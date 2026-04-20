import Hero from '../components/Hero';
import FeatureCards from '../components/Home/FeatureCards';
import AboutSection from '../components/Home/AboutSection';
import ServiceTabs from '../components/Home/ServiceTabs';
import ProcessSteps from '../components/Home/ProcessSteps';
import ProjectGallery from '../components/Home/ProjectGallery';
import AppointmentTestimonial from '../components/Home/AppointmentTestimonial';
import Stats from '../components/Home/Stats';
import FinalCTA from '../components/Home/FinalCTA';
import BlogSection from '../components/Home/BlogSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeatureCards />
      <AboutSection />
      <ServiceTabs />
      <ProcessSteps />
      <ProjectGallery />
      <AppointmentTestimonial />
      <Stats />
      <FinalCTA />
      <BlogSection />
    </div>
  );
}
