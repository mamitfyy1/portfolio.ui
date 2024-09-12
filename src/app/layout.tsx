import React from "react";

import type {Metadata} from "next";
import {Inter} from 'next/font/google'
import '@miktatmert/style/globals.css';

const inter = Inter({subsets: ['latin'], weight: ['300', '400', '500', '700']});

export const metadata: Metadata = {
    title: "Miktat Mert CENTO",
    description: "Full Stack Developer",
    authors: [{name: "Miktat Mert Cento", url: "https://miktatmert.dev"}],
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
