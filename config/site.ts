import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL || "";
export const siteConfig: SiteConfig = {
  name: "Dev Kraken",
  description:
    "A versatile Full Stack Developer specializing in creating dynamic web applications. Proficient in JavaScript, PHP, Next.js, and more, I build robust and scalable solutions tailored to your needs. Let's create something amazing together!",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: "https://twitter.com/somanbandesha12",
    github: "https://github.com/dev-kraken",
  },
  mailSupport: "support@saas-starter.com",
  keywords: [
    "Next.js",
    "React",
    "Prisma",
    "Neon",
    "Auth.js",
    "shadcn ui",
    "Resend",
    "React Email",
    "Stripe",
    "JavaScript",
    "PHP",
    "Full Stack Development",
    "WordPress",
    "Tailwind CSS",
    "RESTful APIs",
    "GraphQL",
    "MariaDB",
    "MySQL",
    "Node.js",
    "Express.js",
    "Redux",
    "TypeScript",
    "Webpack",
    "Babel",
    "Git",
    "Docker",
    "Kubernetes",
    "Agile Development",
    "Scrum",
    "CI/CD",
    "TDD (Test-Driven Development)",
    "BDD (Behavior-Driven Development)",
    "Responsive Design",
    "Mobile-First Design",
    "Cross-Browser Compatibility",
    "Performance Optimization",
    "SEO (Search Engine Optimization)",
    "UX/UI Design",
    "Firebase",
    "AWS (Amazon Web Services)",
    "Google Cloud Platform (GCP)",
    "Azure",
    "Microservices",
    "Serverless Architecture",
    "Progressive Web Apps (PWA)",
    "Single Page Applications (SPA)",
    "MVC Architecture",
    "SQL",
    "NoSQL",
    "Version Control",
  ],
};
