import UnicornStudioEmbed from "@miktatmert/component/UnicornStudioEmbed";
import AboutMe from "@miktatmert/section/aboutMe";
import HeroSection from "@miktatmert/section/heroSection";
import Projects from "@miktatmert/section/projects";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#121212]">
            <div className='heroSection-container-bg'>
                <UnicornStudioEmbed projectId='lHlDvoJDIXCxxXVqTNOC'/>
            </div>

            <section id="hero">
                <HeroSection/>
            </section>

            <section id="aboutMe">
                <AboutMe/>
            </section>

            <section id="projects">
                <Projects/>
            </section>
        </main>
    );
}
