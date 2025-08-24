import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
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
            </nav>
            <nav className="md:hidden">
                <div className="flex gap-1 items-center">
                    <Button asChild variant="ghost">
                        <Link href="/cart">
                            <ShoppingCart />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/sign-in">
                            <UserIcon />
                        </Link>
                    </Button>
                    <Sheet>
                        <SheetTrigger className="align-middle">
                            <EllipsisVertical />
                        </SheetTrigger>
                        <SheetContent className="flex flex-col items-start">
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription></SheetDescription>
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
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    );
};

export default Menu;