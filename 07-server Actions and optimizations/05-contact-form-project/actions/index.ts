"use server";

import { connectToDB } from "@/lib/db";
import { Contact } from "@/model/contact";

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
