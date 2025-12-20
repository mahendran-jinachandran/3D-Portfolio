import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCard from "./sections/FeatureCard.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import BlogSection from "./sections/BlogSection.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            {<ShowCaseSection />}
            {/*<LogoSection/>*/}
            {/*<FeatureCard/>*/}
            <ExperienceSection />
            <TechStack />
            <BlogSection />
            {/*<Testimonials />*/}
            <Contact />
            <Footer />
        </>
    );
};

export default App;
