import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {/* <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div> */}
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-4xl lg:text-4xl !leading-tight text-center max-w-3xl mx-auto font-semibold">
        Helping Schools in Providing Personalized Learning for Large Class Sizes
      </p>

      <p className="text-xl lg:text-lg !leading-tight text-center max-w-xl mx-auto">
        We help teachers tackle large class sizes by providing AI assistants to
        quickly identify student learning gaps and personalize education, saving
        time and improving outcomes.
      </p>

      <div className="text-xl lg:text-lg !leading-tight text-center max-w-xl mx-auto">
        <div className="flex gap-10">
          <Button
            asChild
            size="lg"
            variant={"default"}
            className="opacity-100 w-48"
          >
            <Link href="/sign-up">Book Demo</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant={"outline"}
            className="opacity-100 w-48 flex justify-center items-center gap-2"
          >
            <Link href="/sign-in">
              Learn More <span className="text-lg">↓</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
