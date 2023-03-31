import SectionAbout from "@/components/About";
import SectionFaq from "@/components/Faq";
import SectionFeatures from "@/components/Features";
import SectionFeedback from "@/components/Feedback/Feedback";
import SectionPerfil from "@/components/Perfil"
import SectionMethods from "@/components/Methods";
import SectionSubscribe from "@/components/Subscribe";


export default function Home() {
  return (
    <main className="relative">
      <SectionPerfil />
      <SectionAbout />
      <SectionFeatures />
      <SectionSubscribe />
      <SectionFeedback />
      <SectionMethods />
      <SectionFaq />
    </main>
  );
}
