"use server";

import { connectToDB } from "@/lib/db";
import { Contact } from "@/model/contact";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

// Create a new contact entry
export async function createContact(formData: FormData) {
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const subject = (formData.get("subject") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await connectToDB();
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await newContact.save();

    return {
      success: true,
      message: "Contact created successfully.",
      contactId: newContact._id.toString(),
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return { success: false, error: "Failed to create contact." };
  }
}

// Fetch all contacts from the database
export async function getAllContacts() {
  try {
    await connectToDB();
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

    return {
      success: true,
      contacts: contacts.map((contact) => ({
        id: contact._id.toString(),
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        status: contact.status,
        message: contact.message,
        createdAt: contact.createdAt,
      })),
    };
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { success: false, error: "Failed to fetch contacts." };
  }
}

// Update contact status and revalidate path and tags cache
export async function updateContactStatus(contactId: string, status: string) {
  try {
    await connectToDB();
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return { success: false, error: "Contact not found." };
    }

    contact.status = status;
    await contact.save();

    revalidatePath("/contacts");
    revalidateTag("contacts-stats", "max");

    return { success: true, message: "Contact status updated successfully." };
  } catch (error) {
    console.error("Error updating contact status:", error);
    return { success: false, error: "Failed to update contact status." };
  }
}

// Mark contact as read
export async function markAsRead(formData: FormData) {
  const contactId = formData.get("contactId") as string;
  return updateContactStatus(contactId, "read");
}

// Mark contact as replied
export async function markAsReplied(formData: FormData) {
  const contactId = formData.get("contactId") as string;
  return updateContactStatus(contactId, "replied");
}

// Get contact statistics and cache the results
export async function getContactStats() {
  const getCachedStats = unstable_cache(
    async () => {
      await connectToDB();
      const totalContacts = await Contact.countDocuments();
      const newContacts = await Contact.countDocuments({ status: "new" });
      const readContacts = await Contact.countDocuments({ status: "read" });
      const repliedContacts = await Contact.countDocuments({
        status: "replied",
      });

      return { totalContacts, newContacts, readContacts, repliedContacts };
    },
    ["contacts-stats-cache"],
    { tags: ["contacts-stats"] }
  );

  return getCachedStats();
}
