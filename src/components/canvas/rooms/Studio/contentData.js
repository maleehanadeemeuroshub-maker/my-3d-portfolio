/**
 * Studio Content Data
 *
 * Fallback content for the Studio monitor tower, used only if the
 * live data hook (useSanityData) hasn't resolved yet. Mirrors the
 * real content so there is never a mismatch.
 */

export const PLATFORM_CONFIG = {
    github: {
        color: '#333333',
        accentColor: '#000000',
        icon: '🐙',
        label: 'GitHub',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
};

export const CONTENT_DATA = [
    {
        id: 'github-1',
        title: 'GitHub Repositories',
        platform: 'github',
        description: 'Check out my 24+ live projects and repositories.',
        url: 'https://github.com/maleehanadeemeuroshub-maker',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        date: '2026-01-01',
    },
    {
        id: 'linkedin-1',
        title: 'LinkedIn Profile',
        platform: 'linkedin',
        description: 'Connect with me professionally on LinkedIn.',
        url: 'https://www.linkedin.com/in/maleeha-nadeem',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        date: '2026-01-01',
    },
];

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
