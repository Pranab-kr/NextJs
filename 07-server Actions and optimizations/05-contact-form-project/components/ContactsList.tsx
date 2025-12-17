import { getAllContacts, updateContactStatus } from "@/actions";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "./ui/card";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

interface ContactsListProps {
  success: boolean;
  contacts?: {
    id: string;
    name: string;
    email: string;
    status: string;
    subject: string;
    message: string;
    createdAt: Date;
  }[];
  error?: string;
}

const ContactsList = async () => {
  const contacts: ContactsListProps = await getAllContacts();
  // console.log(contacts);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-primary font-semibold">
          Contacts Messages
        </h2>
        <Badge variant="secondary">
          {contacts.contacts?.length ?? 0} Messages
        </Badge>
      </div>

      {contacts.success && contacts.contacts && contacts.contacts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {contacts.contacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>{contact.name}</CardTitle>
                  <Badge className="mt-2" variant="default">
                    {contact.status}
                  </Badge>
                </div>
                <CardDescription>{contact.subject}</CardDescription>
              </CardHeader>
              <CardPanel>
                <div className="space-y-4 mb-4">
                  <p className="text-lg mb-2">{contact.message}</p>
                  <p className="text-sm text-muted-foreground">
                    From: {contact.email}
                  </p>
                </div>

                <div className="border-t border-border ">
                  <div className="flex justify-between mt-4">
                    <p className="text-sm text-muted-foreground">
                      Sent: {contact.createdAt.toLocaleDateString()}
                    </p>
                    {contact.status === "new" && (
                      <form
                        action={async () => {
                          "use server";
                          await updateContactStatus(contact.id, "read");
                        }}
                      >
                        <Button variant="outline" size="sm" type="submit">
                          Mark as Read
                        </Button>
                      </form>
                    )}
                    {contact.status === "read" && (
                      <form
                        action={async () => {
                          "use server";
                          await updateContactStatus(contact.id, "replied");
                        }}
                      >
                        <Button variant="outline" size="sm" type="submit">
                          Mark as replied
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </CardPanel>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardPanel>
            <Mail className="mb-4 h-6 w-6 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No messages yet.</h3>
          </CardPanel>
        </Card>
      )}
    </div>
  );
};

export default ContactsList;
