import React from "react";

import type {Metadata} from "next";
import {Inter} from 'next/font/google'
import '@miktatmert/style/globals.css';

const inter = Inter({subsets: ['latin'], weight: ['300', '400', '500', '700']});

export const metadata: Metadata = {
    title: "Muhammet Ali OYMAK",
    description: "Aerospace Engineer",
    authors: [{name: "Muhammet Ali OYMAK", url: "https://muhammetalioymak.me"}],
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://muhammetalioymak.me",
        title: "Muhammet Ali OYMAK",
        siteName: "Muhammet Ali OYMAK",
        description: "I'apos;m an Aerospace Engineering Student. I'm in my second year on my education.\n I'm determined to implement beautiful engineering projects in the future.",
        images: [
            {
                url: "https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/495816543_17860497678404745_4855987810088201207_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHztnBltwMascikREHkp-uHdSE0eGm0ew4LW5PkcCW3bKmHBX10tJ3KK_JJAJTWOG4&_nc_ohc=COmFg6n4jfcQ7kNvwGvSgnV&_nc_gid=LC4RtYXE4DjypMwz1gR-qg&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfITW-uXZEO1igvGyR-wMW7hgaGjiillzcPxQryG2wWdlw&oe=6836B6BC&_nc_sid=7d3a",
                width: 1200,
                height: 630,
                alt: "Muhammet Ali OYMAK",
            },
        ]
    },
    robots: "index, follow",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
