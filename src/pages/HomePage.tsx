import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamStackedCards from '@/components/sections/team/TeamStackedCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="SARDARFLIX"
      description="Independent documentaries exploring real people, untold stories, history, culture and the moments that shape us."
      primaryButton={{
        text: "WATCH DOCUMENTARIES",
        href: "#features",
      }}
      secondaryButton={{
        text: "EXPLORE SARDARFLIX",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-sunrise-river-landscape_23-2149134293.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="featured" data-section="featured">
    <SectionErrorBoundary name="featured">
          <PricingMediaCards
      tag="FEATURED DOCUMENTARY"
      title="Coming Soon"
      description="A new Sardarflix documentary is currently in production. Stay tuned for behind-the-scenes content."
      plans={[
        {
          tag: "In Production",
          price: "2026",
          period: "Release",
          features: [
            "Exclusive interviews",
            "Cinematic research",
            "Untold archive footage",
          ],
          primaryButton: {
            text: "VIEW PROJECT",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-face-made-with-popcorns-3d-glasses-cinema-time-text_23-2148188248.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCardsBento
      tag="OUR STORIES"
      title="Categories"
      description="Explore our curated collection of documentary storytelling."
      items={[
        {
          title: "True Crime",
          description: "Investigating dark realities.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/breathtaking-view-pathway-middle-forest-captured-madeira-portugal_181624-13410.jpg",
        },
        {
          title: "Punjab & History",
          description: "Preserving the past.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/multiple-mirror-effect-woman-looking-camera_23-2148282263.jpg",
        },
        {
          title: "Untold Stories",
          description: "Narratives lost in time.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-posing-outdoors_23-2150204407.jpg",
        },
        {
          title: "Culture & People",
          description: "Authentic lives of Punjab.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/metallic-confetti-balloon_23-2148001897.jpg",
        },
        {
          title: "Social Issues",
          description: "Challenging the status quo.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/dramatic-black-white-landscape-with-water_23-2149889425.jpg",
        },
        {
          title: "Diaspora Focus",
          description: "Perspectives from afar.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cinema-concept-with-reel-tickets_23-2147989024.jpg",
        },
        {
          title: "Short Docs",
          description: "Impactful quick narratives.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41089.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="upcoming" data-section="upcoming">
    <SectionErrorBoundary name="upcoming">
          <FeaturesDetailedSteps
      tag="UPCOMING PROJECTS"
      title="In Development"
      description="Projects we are currently crafting."
      steps={[
        {
          tag: "Soon",
          title: "Project A",
          subtitle: "Crime investigation",
          description: "Digging into a decade-old cold case.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-cup-coffee-cafe_107420-96471.jpg",
        },
        {
          tag: "Soon",
          title: "Project B",
          subtitle: "Historical study",
          description: "Researching lost records in rural Punjab.",
          imageSrc: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100146.jpg",
        },
        {
          tag: "Soon",
          title: "Project C",
          subtitle: "Cultural profile",
          description: "A documentary on traditional folk arts.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-celebrating-holy-week_23-2151195997.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="ABOUT SARDARFLIX"
      quote="We Tell Stories. We Preserve Them."
      author="Sardarflix Studio"
      role="Independent Documentary Platform"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-middle-aged-charismatic-man-brown-coat-dark-photo-studio_613910-14768.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="filmmaker" data-section="filmmaker">
    <SectionErrorBoundary name="filmmaker">
          <TeamStackedCards
      tag="FILMMAKER"
      title="The Founder"
      description="Meet the visionary behind our lens."
      members={[
        {
          name: "Founder Name",
          role: "Lead Documentary Filmmaker",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-16021.jpg",
        },
        {
          name: "Creative Team",
          role: "Researchers & Editors",
          imageSrc: "http://img.b2bpic.net/free-photo/developing-photos-darkroom-high-angle_23-2149894020.jpg",
        },
        {
          name: "Contributing Artists",
          role: "Visual Storytellers",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-view-fields-with-bare-trees-sunset_181624-10211.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="CONNECT"
      title="Follow The Journey"
      description="Get trailers and updates via social."
      names={[
        "Instagram",
        "YouTube",
        "TikTok",
        "X",
        "Facebook",
        "LinkedIn",
        "Vimeo",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="CONTACT"
      text="Have A Story To Tell? Let's collaborate."
      primaryButton={{
        text: "SEND STORY",
        href: "#",
      }}
      secondaryButton={{
        text: "EMAIL US",
        href: "mailto:hello@sardarflix.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
