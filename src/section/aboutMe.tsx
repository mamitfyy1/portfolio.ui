'use client';

import '@miktatmert/style/aboutMe.css';
import {useState} from "react";

import Image from "next/image";

import TabButton from "@miktatmert/component/TabButton";
import TabContent from "@miktatmert/component/TabContent";

const tabs = [
    {title: 'Front-end Skills'},
    {title: 'Back-end Skills'},
    {title: 'Education'}
]
type TabTitle = (typeof tabs[number]['title']);

export default function AboutMe() {
    const [activeTab, setActiveTab] = useState<TabTitle>(tabs[0].title);

    return (
        <div id='aboutMe' className='aboutMe-container'>
            <div className='aboutMe-image'>
                <Image src='/asset/png/aboutMe/machintosh.png' alt='Machintosh' width={500} height={500} unoptimized/>
            </div>

            <div className='aboutMe-description-container'>
                <h1 className='aboutMe-title'>About Me</h1>

                <div className='aboutMe-tab-titles'>
                    {
                        tabs.map(t => <TabButton key={t.title} title={t.title} active={activeTab === t.title} onTabChange={setActiveTab}/>)
                    }
                </div>

                <div className='aboutMe-tab-contents'>
                    <TabContent value='Front-end Skills' index={activeTab}>
                        <ul className='aboutMe-lists'>
                            <li>HTML, CSS</li>
                            <li>TypeScript, JavaScript</li>
                            <li>React, Vite.js, Next.js</li>
                            <li>Vue.js, Angular.js (basic knowledge)</li>
                            <li>React Context, Redux</li>
                        </ul>
                    </TabContent>

                    <TabContent value='Back-end Skills' index={activeTab}>
                        <ul className='aboutMe-lists'>
                            <li>C#, TypeScript</li>
                            <li>.Net Core, Node.js, Express.js</li>
                            <li>SQL, MongoDB, Firebase</li>
                            <li>Json Web Token</li>
                            <li>Security Vulnerabilities</li>
                        </ul>
                    </TabContent>

                    <TabContent value='Education' index={activeTab}>
                        <ul className='aboutMe-lists'>
                            <li>Computer Technologies - <a href='https://atauni.edu.tr' className='link'>Atatürk University</a></li>
                        </ul>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
