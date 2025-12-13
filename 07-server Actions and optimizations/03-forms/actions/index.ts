"use server";
export async function createUser(formData: FormData) {
  const name = formData.get("name")?.valueOf();
  console.log("Creating user with name:", name);
  // Here you would typically send the data to your backend or database
}
