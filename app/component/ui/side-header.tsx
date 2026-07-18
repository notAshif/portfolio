import react from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const menuItems = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Work",
        href: "/work"
    },
    {
        name: "People",
        href: "/people"
    },
    {
        name: "Writing",
        href: "/writing"
    }, 
];

const socialItems = [
    {
        id: 1,
        icon: FaGithub,
        href: "..."
    }, 
    {
        id: 2,
        icon: FaLinkedin,
        href: "..."
    }, 
    {
        id: 3,
        icon: FaTwitter,
        href: "..."
    }
]

export default function SideHeader(){
    return (
        <>
            <header>
                <nav className="fixed bg-transparent top-0 left-0 w-40 h-screen z-40 flex flex-col items-center justify-between py-8 text-foreground ">
                    <ul className="flex flex-col items-start space-y-3 px-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className={`font-indie-flower italic text-xl tracking-tight transition-colors hover:text-foreground ${item.name === "Home" ? "text-foreground font-light" : "text-[#FFE2E2]"}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex-col items-center inline-block space-y-1">
                        {socialItems.map((item) => (
                            <li key={item.id}>
                                <a href={item.href} className="text-lg font-light">
                                    {item.icon({ size: 24 })}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}