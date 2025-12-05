import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16 items-center">
      <h1 className="text-neutral-100 text-4xl font-bold">
        Welcome to Next.js!
      </h1>
      <p className="text-neutral-300 mt-4 text-center md:w-1/2 px-8">
        This is a simple web page built with Next.js and Bun. with some shadcn
        ui components.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" className="mt-6">
          Get Started
        </Button>
        <Button variant="default" className="mt-6">
          Learn More
        </Button>
      </div>

      {/* Hero Section */}
    </div>
  );
}
