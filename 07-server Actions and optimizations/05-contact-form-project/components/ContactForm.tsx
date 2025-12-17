"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "./ui/card";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createContact } from "@/actions";
import { toastManager } from "@/components/ui/toast";
import { Spinner } from "./ui/spinner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    const result = await createContact(formData);

    if (result.success) {
      console.log("Message sent successfully:", result);

      toastManager.add({
        title: "Message Sent Successfully",
        description: "Your message has been sent successfully.",
        type: "success",
      });
    } else {
      console.log(
        "Error sending message:",
        result.error || "An error occurred. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Fill out the form below and we will get back to you as soon as.
          </CardDescription>
        </CardHeader>

        <CardPanel>
          <div className="flex flex-col gap-4">
            <form action={onSubmit} id="contact-form" className="space-y-6">
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input
                  name="name"
                  placeholder="Name of your project"
                  type="text"
                />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input name="email" placeholder="Email address" type="email" />
              </Field>
              <Field>
                <FieldLabel>Subject</FieldLabel>
                <Input
                  name="subject"
                  placeholder="Subject of your message"
                  type="text"
                />
              </Field>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea name="message" placeholder="Your message" />
              </Field>

              <Button disabled={isSubmitting} className="w-full" type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner />
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </CardPanel>
      </Card>
    </div>
  );
};

export default ContactForm;
