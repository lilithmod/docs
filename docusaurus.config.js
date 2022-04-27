// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
    const gfm = (await import('remark-gfm')).default;
    const github = (await import('remark-github')).default;
    return {
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
                        remarkPlugins: [gfm],
                    },
                    blog: {
                        showReadingTime: true,
                        remarkPlugins: [gfm],
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
                colorMode: {
                    defaultMode: 'dark',
                    disableSwitch: false,
                    respectPrefersColorScheme: false
                },
                navbar: {
                    title: '',
                    logo: {
                        alt: 'Lilith',
                        src: 'img/lilith-text.png',
                    },
                    items: [
                        {
                            type: 'docSidebar',
                            position: 'left',
                            sidebarId: 'gettingstarted',
                            label: 'Getting Started',
                        },
                        {
                            to: '/downloads',
                            position: 'left',
                            label: 'Downloads',
                        },
                        {
                            type: 'docSidebar',
                            position: 'left',
                            sidebarId: 'documentation',
                            label: 'Documentation',
                        },
                        {to: '/blog', label: 'Blog', position: 'left'},
                        {
                            href: 'https://me.lilithmod.xyz',
                            position: 'right',
                            label: 'Config',
                        },
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
                                    to: '/docs/gettingstarted/setup',
                                },
                                {
                                    label: 'Downloads',
                                    to: '/downloads',
                                },
                                {
                                    label: 'Documentation',
                                    to: '/docs/documentation/features',
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
                                    label: 'Config',
                                    href: 'https://me.lilithmod.xyz',
                                },
                                {
                                    label: 'Privacy Policy',
                                    to: '/docs/documentation/privacy',
                                },
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
    }
}

module.exports = createConfig;
