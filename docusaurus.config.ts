import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AReaL",
  tagline:
    "A Large-Scale Asynchronous Reinforcement Learning System for language reasoning and agentic post-training.",
  favicon: "img/areal/areal-logo.png",

  // Load the display serif used by the landing page.
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://areal-ai.io/", // Your website URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "areal-project", // Usually your GitHub org/user name.
  projectName: "AReaL", // Usually your repo name.

  onBrokenLinks: "throw",
  // Landing sections (#use / #research / #partners) are runtime element IDs,
  // not Docusaurus-generated heading anchors, so skip anchor validation for them.
  onBrokenAnchors: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // Docs are no longer served from this site.
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        docs: false,
        // Blog is no longer used.
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "AReaL",
      logo: {
        alt: "AReaL Logo",
        src: "img/areal/areal-logo.png",
      },
      items: [
        { to: "/#use", label: "Use", position: "left" },
        { to: "/#research", label: "Research", position: "left" },
        {
          href: "https://areal-ai.io/docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/areal-project/AReaL",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "https://areal-ai.io/docs/getting-started",
            },
          ],
        },
        {
          title: "Research",
          items: [
            {
              label: "Publications",
              to: "/#research",
            },
            {
              label: "Partners",
              to: "/#partners",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/areal-project/AReaL",
            },
            {
              label: "Community",
              to: "https://github.com/areal-project/community",
            },
            {
              label: "inclusionAI",
              to: "https://www.inclusion-ai.org/",
            },
          ],
        },
      ],
      copyright: `Since 2025 - ${new Date().getFullYear()} The AReaL Project, We 💖 Open Source and welcome you to joining us.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
