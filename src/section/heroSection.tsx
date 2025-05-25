'use client';

import '@miktatmert/style/heroSection.css';
import {Icon} from "@iconify/react";
import {Typewriter} from "react-simple-typewriter";

export default function HeroSection() {
    return (
        <div id='hero' className='heroSection-out-container'>
            {/*
            <Spline
                className='heroSection-container-bg'
                scene="https://prod.spline.design/0r3jY6AvvCkDroFe/scene.splinecode"
            />
            */}

            <div className='heroSection-container'>
                <div className='heroSection-inner-container'>
                    <h1 className='heroSection-title'>
                        <span className='heroSection-title-highlight'>
                            Hello I&apos;m
                        </span>

                        <span>
                            <Typewriter
                                words={['Muhammet Ali Oymak', 'Aerospace Engineer']}
                                loop={0}
                                typeSpeed={100}
                                cursor
                            />
                       </span>
                    </h1>

                    <p className='heroSection-description'>
                        I&apos;m an Aerospace Engineering Student. I&apos;m in my second year on my education.
                        I&apos;m determined to implement beautiful engineering projects in the future.
                    </p>
                </div>
            </div>

            <a href='/#aboutMe'>
                <Icon icon='akar-icons:chevron-down' className='heroSection-scroll-icon'/>
            </a>
        </div>
    )
        ;
}
