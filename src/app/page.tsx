import { getHomepageData } from '@/lib/data/homepage';
import HeroSection from '@/components/homepage/HeroSection';
import AboutUsSection from '@/components/homepage/AboutUsSection';
import CoreObjectives from '@/components/homepage/CoreObjectives';
import MembershipSection from '@/components/homepage/MembershipSection';
import ChurchVowsSection from '@/components/homepage/ChurchVowsSection';
import ScriptureOfTheDay from '@/components/homepage/ScriptureOfTheDay';
import AnnouncementsSection from '@/components/homepage/AnnouncementsSection';


export default async function Home() {
  const homepageData = await getHomepageData();

  return (
    <main className="min-h-screen">
      {/* Announcement Banner */}
      {/* <AnnouncementBanner announcements={homepageData.announcements} /> */}
      
      {/* Hero Section */}
      <HeroSection churchInfo={homepageData.churchInfo} />
      
      {/* About Us Section */}
      <AboutUsSection />
      
      {/* Core Objectives */}
      <CoreObjectives />
      
      {/* Membership Section */}
      <MembershipSection />
      
      {/* Church Vows */}
      <ChurchVowsSection />
      
      {/* Scripture of the Day */}
      <ScriptureOfTheDay />
      
      {/* Announcements Section */}
      <AnnouncementsSection />
      
     
    </main>
  );
}
