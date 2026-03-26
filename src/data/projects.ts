export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  results: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "healthcare-website",
    title: "Doc needs a WEBSITE!",
    category: "Creative",
    description: "Designed and developed a professional multi-page website for a fetal medicine specialist, focused on trust, clarity, and patient engagement.",
    longDescription: "Built a complete no-code website using WordPress for a healthcare professional. The project focused on creating a clean, user-friendly structure with clear service pages, blog integration, and strong call-to-actions like WhatsApp chat and appointment booking. Basic on-page SEO including meta tags and page optimization was implemented to improve search visibility.",
    tags: ["WordPress", "UI/UX", "On-Page SEO", "Healthcare"],
    image: "https://i.ibb.co/bMGKvhdd/TTT.jpg",
    results: [
      "Improved user navigation and engagement",
      "Clear conversion flow with CTA buttons",
      "SEO-ready website structure"
    ],
    challenge: "I had to make an informative, clear, and understandable website for the patients who were seeking fetal-Health-care. the point is the medical terms were not as popular in india yet. AND - I had never created a website before!",
    solution: "The domain was purchased and hosting was set up using Hostinger. A complete website was built on WordPress by creating multiple pages like About, Services, and Blogs. Relevant content and images were added to make the site informative and visually clear. while the content used was NON-Medical friendly for the searcher's ease of understanding.  Strong call-to-action buttons like WhatsApp chat and ‘Book Appointment’ were integrated to improve user interaction and make it easy for patients to connect."
  },
  {
    id: "facebook-ads",
    title: "Join my webinar to upgrade your life.",
    category: "Marketing",
    description: "Planned and executed a Facebook Ads campaign for RAIBOW REIKI CARE to drive registrations for a wellness webinar.",
    longDescription: "This project focused on creating a targeted ad campaign for the client offering courses in Reiki and holistic healing. The goal was to attract the right audience, build trust, and convert interest into paid webinar registrations through a structured funnel.",
    tags: ["Facebook Ads", "Lead Generation", "Funnel Strategy", "Wellness Marketing"],
    image: "https://i.ibb.co/VWPcbvKd/REKHI.jpg",
    results: [
      "Increased webinar registrations",
      "Targeted high-intent wellness audience",
      "Improved engagement through focused messaging"
    ],
    challenge: "The client wanted to attract the right audience for a niche wellness webinar and convert them into paid attendees, while standing out in a space built heavily on trust and authenticity.",
    solution: "The campaign started with defining the ideal target audience, including people interested in spirituality, healing, meditation, and wellness practices. Audience segmentation was done based on interests, behaviors, and demographics to ensure highly relevant reach.Ad creatives were designed with calming visuals and trust-building messaging, highlighting the benefits of Reiki, the credibility of the Grandmaster, and the value of attending the webinar. Multiple ad copies were tested to identify what resonated best with the audience. A simple funnel was created: users clicked on the ad and were directed to a landing page with detailed information about the webinar, including benefits, testimonials, and session details. Strong call-to-actions like 'Reserve Your Spot' were placed strategically.To drive conversions, a clear payment step was integrated where users could securely book their seat after registration. Follow-up communication (via WhatsApp or email) was planned to remind users and reduce drop-offs.Performance was monitored and optimized by tracking clicks, engagement, and conversions, ensuring the campaign continuously improved. The overall strategy focused on building trust, educating the audience, and guiding them smoothly from interest to paid participation."
  },

  {
    id: "Local SEO",
    title: "Best FETAL-CARE doc near me.",
    category: "Performance",
    description: "Enhanced the online visibility of a doctor at Rainbow Hospital, Hyderabad using targeted local SEO strategies.",
    longDescription: "Focused on improving local search presence through Google Business Profile optimization, local keyword targeting, and on-page SEO improvements. Tools like Google Search Console, Google Analytics (GA4), and Keyword Planner were used to monitor and refine performance.",
    tags: ["Brand Identity", "Local SEO", "Google Business Profile", "Keyword Research, Analytics"],
    image: "https://i.ibb.co/C5JqDDcw/Whats-App-Image-2026-03-27-at-01-03-41.jpg",
    results: [
      "Improved local search visibility",
      "Increased appointments",
      "Better keyword targeting for local audience"
    ],
    challenge: "The client had low online visibility and faced strong competition from other doctors in her speciality, making it difficult to attract patients and generate direct appointment inquiries.",
    solution: "The goal was to build a strong personal digital presence and gain a competitive advantage over other doctors. The process began with optimizing the Google Business Profile by adding accurate information, services, categories, and professional images to improve trust and visibility. Local keyword research was conducted to identify high-intent search terms, which were then strategically implemented across the website through optimized meta tags, headings, and content. A well-structured website was developed to support SEO efforts, including clear service pages, informative blogs, and strong call-to-actions like WhatsApp chat and appointment booking.Technical improvements such as mobile optimization, page speed,Meta-tags and indexing were ensured using tools like Google Search Console. Regular updates and engagement on the business profile further boosted visibility.Performance was continuously tracked using Google Analytics (GA4) and Search Console, allowing data-driven improvements. The overall strategy focused on increasing local search rankings, building credibility, and driving more direct patient inquiries and appointments"
  },
  {
    id: "email-funnel",
    title: "You need a SAW MACHINE.",
    category: "Communicative",
    description: "Designed a structured email marketing funnel for Indotech Industries to nurture B2B leads and drive product inquiries.",
    longDescription: "This project focused on building a B2B email funnel for Indotech Industries, a manufacturer of Band Saw Machines. The goal was to convert cold leads into qualified inquiries by educating potential buyers, building trust, and showcasing product value through a structured communication flow.",
    tags: ["Email Marketing", "B2B", "Lead Nurturing", "Copywriting"],
    image: "https://i.ibb.co/bgHwyGjH/Picsart-26-03-27-02-24-28-833.jpg",
    results: [
      "Improved lead engagement through structured communication",
      "Clear product awareness for industrial buyers",
      "Stronger inquiry intent from nurtured leads"
    ],
    challenge: "The company needed a way to engage B2B prospects, educate them about complex machinery, and convert initial interest into serious product inquiries across global markets.",
    solution: "A 3-step email funnel was designed to guide potential clients through awareness, consideration, and decision stages. The first email (Welcome Email) introduced Indotech Industries, highlighting its credibility, global presence, and product range. The focus was on building trust and making a strong first impression.The second email (Value Email) educated the audience about the benefits and applications of Band Saw Machines, including performance, durability, and efficiency. This email focused on solving industry problems and positioning the brand as a reliable solution provider.The third email (Conversion Email) encouraged action by showcasing key products, use cases, and a strong call-to-action like 'Request a Quote' or 'Contact Us'. The funnel was designed to be simple, informative, and conversion-focused, ensuring that industrial buyers receive the right information at each stage. Optional integration with tools like Mailchimp allows automation, segmentation, and tracking of open rates and engagement.Overall, the strategy focused on building trust, simplifying complex information, and guiding potential clients toward making high-value business inquiries."
  }
];
