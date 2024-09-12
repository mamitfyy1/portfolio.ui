'use client';

import '@miktatmert/style/aboutMe.css';
import {useState} from "react";

import Image from "next/image";

import TabButton from "@miktatmert/component/TabButton";
import TabContent from "@miktatmert/component/TabContent";

const tabs = [
    {title: 'Skills'},
    {title: 'Education'}
]
type TabTitle = (typeof tabs[number]['title']);

export default function AboutMe() {
    const [activeTab, setActiveTab] = useState<TabTitle>(tabs[0].title);

    return (
        <div className='aboutMe-container'>
            <div className='aboutMe-image'>
                <Image src='/asset/gif/aboutMe/sphere.gif' alt='Shapeless' width={960} height={540} unoptimized/>
            </div>

            <div className='aboutMe-description-container'>
                <h1 className='aboutMe-title'>About Me</h1>

                <div className='aboutMe-tab-titles'>
                    {
                        tabs.map(t => <TabButton key={t.title} title={t.title} active={activeTab === t.title} onTabChange={setActiveTab}/>)
                    }
                </div>

                <TabContent value='Skills' index={activeTab}>
                    <h1 className='aboutMe-title'>Skills</h1>
                </TabContent>

                <TabContent value='Education' index={activeTab}>
                    <h1 className='aboutMe-title'>Education</h1>
                </TabContent>
            </div>
        </div>
    )
}
