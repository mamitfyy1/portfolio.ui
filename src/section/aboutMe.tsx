'use client';

import '@miktatmert/style/aboutMe.css';
import {useState} from "react";

import Image from "next/image";

import TabButton from "@miktatmert/component/TabButton";
import TabContent from "@miktatmert/component/TabContent";

const tabs = [
    {title: 'Drawing Skills'},
    {title: 'Software Skills'},
    {title: 'Education'}
]
type TabTitle = (typeof tabs[number]['title']);

export default function AboutMe() {
    const [activeTab, setActiveTab] = useState<TabTitle>(tabs[0].title);

    return (
        <div id='aboutMe' className='aboutMe-container'>
            <div className='aboutMe-image'>
                <Image src='/asset/turbofan.png' alt='Turbofan' width={500} height={500} unoptimized/>
            </div>

            <div className='aboutMe-description-container'>
                <h1 className='aboutMe-title'>About Me</h1>

                <div className='aboutMe-tab-titles'>
                    {
                        tabs.map(t => <TabButton key={t.title} title={t.title} active={activeTab === t.title} onTabChange={setActiveTab}/>)
                    }
                </div>

                <div className='aboutMe-tab-contents'>
                    <TabContent value='Drawing Skills' index={activeTab}>
                        <ul className='aboutMe-lists'>
                            <li>Solidworks</li>
                            <li>Autodesk Fusion 360</li>
                            <li>Soon...</li>
                        </ul>
                    </TabContent>

                    <TabContent value='Software Skills' index={activeTab}>
                        <ul className='aboutMe-lists'>
                            <li>Matlab</li>
                            <li>Python</li>
                            <li>Soon...</li>
                        </ul>
                    </TabContent>

                    <TabContent value='Education' index={activeTab}>
                        <ul className='aboutMe-lists'>
                                <li>Aerospace Engineering - <a href='https://havacilik.atu.edu.tr/#!/' target='_blank' rel="noopener noreferrer" className='link'>Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi</a></li>
                        </ul>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
