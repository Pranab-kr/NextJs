import ContactStats from "@/components/contact-stats";
import ContactsList from "@/components/ContactsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactsPage = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="mx-auto w-full max-w-4xl container">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size={"sm"}>
              &larr; Back to Home
            </Button>
          </Link>
        </div>
        <ContactStats />

        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsPage;
