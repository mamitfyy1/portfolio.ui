"use client";

import React from "react";

import {motion} from "framer-motion";
import '@miktatmert/style/components.css';

const variants = {
    default: {width: 0},
    active: {width: "calc(100% - 0.75rem)"},
};

interface TabButtonProps {
    active?: boolean;
    onTabChange: (tabTitle: string) => void;
    title: string
}

function TabButton({active, onTabChange, title}: TabButtonProps) {
    return (
        <button onClick={() => onTabChange(title)}>
            <span className='tabButton-label' id={active ? 'active' : 'default'}>
                {title}
            </span>

            <motion.div
                initial={false}
                animate={active ? 'active' : 'default'}
                variants={variants}
                className='tabButton-underline'
            />
        </button>
    );
}

export default TabButton;
