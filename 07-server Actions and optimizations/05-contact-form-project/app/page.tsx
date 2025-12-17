import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/mode-toggle";

const HomePage = () => {
  return (
    <main className="min-h-screen px-4 py-12 flex flex-col items-center gap-12">

      <div className="container mx-auto">
        <div className="text-center db-12">
          <h1 className="text-4xl font-bold mb-4">Server actions Demo</h1>
          <p className="text-sm text-muted-foreground max-w-x lg:text-base mx-auto">
            Contact form with mongodb and revalidation using server actions.
          </p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
};

export default HomePage;
