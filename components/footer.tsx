import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon, TriangleIcon, FacebookIcon, TwitterIcon, InstagramIcon ,LinkedinIcon} from "lucide-react"; // Ensure you import icons

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            {" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://coopbankoromia.com.et/"
            >
              https://coopbankoromia.com.et/
            </Link>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      

      {/* Social Media Links */}
      <div className="flex items-center gap-4">
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FacebookIcon className="w-5 h-5 text-muted-foreground hover:text-blue-600" />
        </Link>
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <TwitterIcon className="w-5 h-5 text-muted-foreground hover:text-blue-400" />
        </Link>
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <InstagramIcon className="w-5 h-5 text-muted-foreground hover:text-pink-600" />
        </Link>
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <LinkedinIcon className="w-5 h-5 text-muted-foreground hover:text-blue-600" />
        </Link>
      </div>
    </>
  );
}
