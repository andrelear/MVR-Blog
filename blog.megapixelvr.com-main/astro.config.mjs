import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://help.megapixelvr.com",
  integrations: [
    starlight({
      plugins: [
        starlightImageZoom({
          // Configuration options go here.
        }),
      ],
      title: "Megapixel",
      logo: {
        src: "./src/assets/Green_Megapixel_Wordmark_Blank.svg",
        replacesTitle: true,
      },
      customCss: ["./src/styles/tailwind.css"],
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Sign Up",
              link: "/getting-started/sign-up/",
            },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/core-concepts/example/",
            },
          ],
        },
        {
          label: "Organization",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/organization/example/",
            },
          ],
        },
        {
          label: "Projects",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Creating a Project",
              link: "/projects/example/",
            },
          ],
        },
        {
          label: "Agents",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Managing Agents",
              link: "/agents/managing-agents/",
            },
          ],
        },
        {
          label: "Members",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Manage Your Team",
              link: "/members/managing-your-team/",
            },
          ],
        },
        {
          label: "Tools",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Notes",
              link: "/tools/notes/",
              badge: { text: "New", variant: "note" },
            },
          ],
        },
        {
          label: "Account",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Edit Profile",
              link: "/account/edit-profile/",
            },
            {
              label: "Adjust Preferences",
              link: "/account/adjust-preferences/",
            },
            {
              label: "Edit Notifications",
              link: "/account/edit-notifications/",
            },
          ],
        },
        {
          label: "Changelog",
          link: "/changelog/",
        },
      ],
    }),
    tailwind(),
    sitemap(),
  ],
});
