"use client";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === "system" ? <SunMoon /> : theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                    System 
                </DropdownMenuCheckboxItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
)}

export default ThemeToggle;