import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import AchievementsGrid from '@/components/AchievementsGrid';
import RecordSection from '@/components/RecordSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroBanner />
        <AboutSection />
        <AchievementsGrid />
        <RecordSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
