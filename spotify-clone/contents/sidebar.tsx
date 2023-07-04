"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import path from "path";
import exp from "constants";
interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], []);
    return (
        <div className="flex h-full">
            <div
                className="
                hidden
                "
            >
            </div>
        </div>
    );
}

export default Sidebar
