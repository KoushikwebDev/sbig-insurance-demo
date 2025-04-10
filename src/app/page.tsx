import Header from "@/components/Header";
import CategoryIcons from "@/components/CategoryIcons";
import HeroImage from "@/components/HeroImage";
import LeadForm from "@/components/LeadForm";
import TermsNotice from "@/components/TermsNotice";
import StatsGrid from "@/components/StatsGrid";
import HeroBoxSection from "@/components/HeroBoxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import AwardsRecognition from "@/components/AwardsRecognition";
import LatestArticles from "@/components/LatestArticles";
import AppPromotion from "@/components/AppPromotion";
import FooterMenuGrid from "@/components/FooterMenuGrid";
import MiniAppBanner from "@/components/MiniAppBanner";
import InsuranceMenu from "@/components/InsuranceMenu";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header />
      <CategoryIcons />
      <HeroImage />
      <LeadForm />
      <TermsNotice />
      <StatsGrid />
      <HeroBoxSection />
      <WhyChooseUs />
      <CustomerTestimonials />
      <AwardsRecognition />
      <LatestArticles />
      <AppPromotion />
      <FooterMenuGrid />
      <MiniAppBanner />
      <InsuranceMenu />
      <LegalDisclaimer />
    </div>
  );
}
