// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lilith',
  tagline: 'Queuestats made simple',
  url: 'https://lilithmod.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lilithmod', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lilithmod/docs/tree/master/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lilithmod/docs/tree/master/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Lilith',
          src: 'img/lilith-text.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'setup/index',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.gg/lilith',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/lilithmod',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/setup',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/lilith',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lilithmod',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lilith Development`,
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ['toml'],
      },
    }),
};

module.exports = config;
