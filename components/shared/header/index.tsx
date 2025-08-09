import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return <header className="w-full border-b">
    <div className="wrapper flex justify-between items-center">
      <div className="flex justify-start items-center">
        <Link href="/" className="flex justify-start items-center">
            <Image src="/images/logo.svg" alt={APP_NAME} width={48} height={48} priority={true} />
            <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
        </Link>
      </div>
      <div className="space-x-6">
        <ThemeToggle />
        <Button asChild variant="ghost">
            <Link href="/cart">
                <ShoppingCart /> Cart
            </Link>
        </Button>
        <Button asChild>
            <Link href="/sign-in">
                <UserIcon /> Sign In
            </Link>
        </Button>
      </div>
    </div>
  </header>;
};

export default Header;