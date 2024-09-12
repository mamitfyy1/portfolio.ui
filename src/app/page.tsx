import AboutMe from "@miktatmert/section/aboutMe";
import HeroSection from "@miktatmert/section/heroSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#121212]">
            <HeroSection/>
            <AboutMe/>
        </main>
    );
}
