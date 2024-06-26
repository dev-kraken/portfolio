import { Icons } from "@/components/shared/icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
  keywords: string[];
};

export type InfoList = {
  icon: keyof typeof Icons;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Service_D = {
  title: string;
  description: string;
  link: string;
  icon: keyof typeof Icons;
};

export type MainNavItem = NavItem;

export type LandingMenu_D = MainNavItem[];

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type EmailCheckerHowWork = {
  title: string;
  icon: keyof typeof Icons;
  description: string;
};
