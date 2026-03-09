import HeroSection from "@/components/Hero/HeroSection";
import StorySection from "@/components/Story/StorySection";

import GallerySection from "@/components/Gallery/GallerySection";
import PhotoWall from "@/components/PhotoWall/PhotoWall";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import PoseGallery from "@/components/PoseGallery/PoseGallery";
import InstagramStrip from "@/components/Instagram/InstagramStrip";
import CTASection from "@/components/CTA/CTASection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <StorySection />
        <GallerySection />
        <PhotoWall />
        <FeaturedSection />
        <PoseGallery />
        <InstagramStrip />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
