"use client";

import { useState } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createUser } from "@/actions";
import { toast } from "sonner";
import {
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
  Select,
} from "./ui/select";

const AddUser = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleSubmit = async (formData: FormData) => {
    formData.append("isActive", isActive.toString());
    const res = await createUser(formData);
    toast.success(`User ${res[0].name} created successfully!`);
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <form action={handleSubmit}>
        <FieldSet>
          <FieldLegend>
            <h1 className="font-bold text-lg">Add User</h1>
          </FieldLegend>
          <FieldSeparator />

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                id="name"
                autoComplete="off"
                name="name"
                placeholder="Evil Rabbit"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" placeholder="Email" name="email" />
            </Field>

            <Field>
              <FieldLabel htmlFor="age">Age</FieldLabel>
              <Input
                type="number"
                id="age"
                autoComplete="off"
                name="age"
                placeholder="Age"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="isActive">Status</FieldLabel>
              <Select
                value={isActive ? "true" : "false"}
                onValueChange={(value) => setIsActive(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <FieldSeparator />
            <Field>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
};

export default AddUser;
