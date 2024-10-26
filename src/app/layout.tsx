import React from "react";

import type {Metadata} from "next";
import {Inter} from 'next/font/google'
import '@miktatmert/style/globals.css';

const inter = Inter({subsets: ['latin'], weight: ['300', '400', '500', '700']});

export const metadata: Metadata = {
    title: "Miktat Mert CENTO",
    description: "Full Stack Developer",
    authors: [{name: "Miktat Mert Cento", url: "https://miktatmert.dev"}],
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "https://miktatmert.dev",
        title: "Miktat Mert CENTO",
        siteName: "Miktat Mert CENTO",
        description: "I'm a full stack developer with 4 years of experience in web development.\n I'm passionate about creating beautiful and functional websites.",
        images: [
            {
                url: "https://miktatmert.dev/asset/og-image.png",
                width: 1200,
                height: 630,
                alt: "Miktat Mert CENTO",
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
