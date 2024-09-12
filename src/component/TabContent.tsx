'use client';

import React, { useEffect, useState } from 'react';

interface TabContentProps {
    children?: React.ReactNode;
    value: string;
    index: string;
}

function TabContent(props: TabContentProps) {
    const { children, value, index, ...other } = props;
    const [isTabOpened, setIsTabOpened] = useState(value === index);

    useEffect(() => {
        if (value === index) setIsTabOpened(true);
    }, [value, index]);

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            {...other}
        >
            {isTabOpened && children}
        </div>
    );
}

export default TabContent;
