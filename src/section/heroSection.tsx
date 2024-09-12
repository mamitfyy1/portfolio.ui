'use client';

import '@miktatmert/style/heroSection.css';

import Spline from '@splinetool/react-spline';
import {Typewriter} from "react-simple-typewriter";

export default function HeroSection() {
    return (
        <div className='heroSection-out-container'>
            <Spline
                className='heroSection-container-bg'
                scene="https://prod.spline.design/0r3jY6AvvCkDroFe/scene.splinecode"
            />

            <div className='heroSection-container'>
                <div className='heroSection-inner-container'>
                    <h1 className='heroSection-title'>
                        <span className='heroSection-title-highlight'>
                            Hello I&apos;m
                        </span>

                        <span>
                            <Typewriter
                                words={['Miktat Mert Cento', 'Full Stack Developer']}
                                loop={0}
                                typeSpeed={100}
                                cursor
                            />
                       </span>
                    </h1>

                    <p className='heroSection-description'>
                        I&apos;m a full stack developer with 4 years of experience in web development.
                        I&apos;m passionate about creating beautiful and functional websites.
                    </p>
                </div>
            </div>
        </div>
    );
}
