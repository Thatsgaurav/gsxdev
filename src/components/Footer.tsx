import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas, SiCodechef, SiWhatsapp } from "react-icons/si";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
        <Bounded as="footer" className="text-slate-600">
            <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
                <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
                    <Link
                        href="/"
                        className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-gray-400"
                    >
                        {settings.data.name}
                    </Link>
                    <span
                        className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
                        aria-hidden={true}
                    >
                        /
                    </span>
                    <p className=" text-sm text-slate-300 ">
                        © {new Date().getFullYear()} {settings.data.name}
                    </p>
                </div>
                <nav className="navigation" aria-label="Footer Navigation">
                    <ul className="flex items-center gap-1">
                        {settings.data.nav_item.map(({ link, label }, index) => (
                            <React.Fragment key={label}>
                                <li>
                                    <PrismicNextLink
                                        className={clsx(
                                            "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-gray-400",
                                        )}
                                        field={link}
                                    >
                                        {label}
                                    </PrismicNextLink>
                                </li>
                                {index < settings.data.nav_item.length - 1 && (
                                    <span
                                        className="text-4xl font-thin leading-[0] text-slate-400"
                                        aria-hidden="true"
                                    >
                                        /
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
                <div className="socials inline-flex justify-center sm:justify-end">
                    {isFilled.link(settings.data.github_link) && (
                        <PrismicNextLink
                            field={settings.data.github_link}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-gray-400"
                            aria-label={settings.data.name + " on GitHub"}
                        >
                            <FaGithub />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.twitter_link) && (
                        <PrismicNextLink
                            field={settings.data.twitter_link}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-gray-800"
                            aria-label={settings.data.name + " on Twitter"}
                        >
                            <BsTwitterX />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.linkedin_link) && (
                        <PrismicNextLink
                            field={settings.data.linkedin_link}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-blue-400"
                            aria-label={settings.data.name + " on LinkedIn"}
                        >
                            <FaLinkedin />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.leetcode) && (
                        <PrismicNextLink
                            field={settings.data.leetcode}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-amber-300"
                            aria-label={settings.data.name + " on Leetcode"}
                        >
                            <SiLeetcode />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.geeksforgeeks) && (
                        <PrismicNextLink
                            field={settings.data.geeksforgeeks}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-emerald-800"
                            aria-label={settings.data.name + " on Geeksforgeeks"}
                        >
                            <SiGeeksforgeeks />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.codingninjas) && (
                        <PrismicNextLink
                            field={settings.data.codingninjas}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-orange-400"
                            aria-label={settings.data.name + " on Codingninjas"}
                        >
                            <SiCodingninjas />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.hackerrank) && (
                        <PrismicNextLink
                            field={settings.data.hackerrank}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-emerald-400"
                            aria-label={settings.data.name + " on Hackerrank"}
                        >
                            <FaHackerrank />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.codechef) && (
                        <PrismicNextLink
                            field={settings.data.codechef}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-amber-700"
                            aria-label={settings.data.name + " on Codechef"}
                        >
                            <SiCodechef />
                        </PrismicNextLink>
                    )}
                    {isFilled.link(settings.data.whatsapp) && (
                        <PrismicNextLink
                            field={settings.data.whatsapp}
                            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-green-400"
                            aria-label={settings.data.name + " on Whatsapp"}
                        >
                            <SiWhatsapp />
                        </PrismicNextLink>
                    )}
                </div>
            </div>
        </Bounded>
    );
}