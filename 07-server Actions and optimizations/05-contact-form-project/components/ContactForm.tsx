"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "./ui/card";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (formData: FormData) => {
    // "use server";
    //todo
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
                  id="name"
                  name="name"
                  placeholder="Name of your project"
                  type="text"
                />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email address"
                  type="email"
                />
              </Field>
              <Field>
                <FieldLabel>Subject</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  type="text"
                />
              </Field>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                />
              </Field>

              <Button disabled={isSubmitting} className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </CardPanel>
      </Card>
    </div>
  );
};

export default ContactForm;
