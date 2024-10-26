'use client';

import { useEffect, useRef } from 'react';

interface UnicornStudioEmbedProps {
    projectId: string;
}

export default function UnicornStudioEmbed({ projectId }: UnicornStudioEmbedProps): JSX.Element {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeScript = (callback: () => void) => {
            const script = document.createElement("script");
            script.src = "https://cdn.unicorn.studio/v1.2.3/unicornStudio.umd.js";
            script.onload = callback;
            document.head.appendChild(script);
        };

        const initializeUnicornStudio = () => {
            if (elementRef.current) {
                elementRef.current.setAttribute("data-us-project", projectId);
                if (window.UnicornStudio) {
                    window.UnicornStudio.init();
                }
            }
        };

        initializeScript(initializeUnicornStudio);
    }, [projectId]);

    return <div ref={elementRef} style={{ width: "100%", height: "100%" }} />;
}
