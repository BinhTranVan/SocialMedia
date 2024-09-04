import { Home, Search, User, Bell, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

function MenuItems() {
    const iconSize = 16;
    const pathname = usePathname();
    const router = useRouter();
    const menuItems = [
        {
            name: "Home",
            icon: <Home size={iconSize}/>,
            path: "/",
            isActive: pathname === "/",
        },
        {
            name: "Search",
            icon: <Search size={iconSize}/>,
            path: "/search",
            isActive: pathname === "/search",
        },
        {
            name: "Profile",
            icon: <User size={iconSize}/>,
            path: "/profile",
            isActive: pathname === "/profile",
        },
        {
            name: "Notification",
            icon: <Bell size={iconSize}/>,
            path: "/notifications",
            isActive: pathname === "/notifications",
        },
        {
            name: "Logout",
            icon: <LogOut size={iconSize}/>,
            path: "/logout",
        },
    ];

    return (
        <div className="w-56 lg:h-screen lg:bg-gray-300 p-5">
            <div className="mt-5 flex flex-col">
                <span className="text-2xl font-bold text-info">
                    SHEY <b className="text-primary">GRAM</b>
                </span>
                <span className="text-sm">Logged-in user</span>
            </div>
            <div className="mt-20 flex flex-col gap-12">
                {menuItems.map((item, index) =>(
                    <div key={index} className={`cursor-pointer px-5 py-2 flex gap-3 items-center ${
                        item.isActive && 'bg-info text-white rounded-sm'}`} onClick = {() => router.push(item.path)}>
                        {item.icon}
                        <span className="text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuItems;