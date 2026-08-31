// Mocked useSanityData.js to serve local static data for Maleeha Nadeem

let cache = {
    projects: [],
    content: [],
    awards: null,
    loaded: false,
    loading: false,
    error: null
};

const listeners = new Set();
function notifyUpdate() {
    listeners.forEach(listener => listener());
}
function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function loadSanityData() {
    if (cache.loaded || cache.loading) return;
    cache.loading = true;

    // Static Data for Maleeha Nadeem
    setTimeout(() => {
        cache.projects = [
            {
                _id: '1',
                title: 'Aurora - Notes App',
                description: 'A fast, distraction-free place to keep notes, lists and ideas, with a clean editor-first interface.',
                projectUrl: 'https://notes-seven-inky.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/notes',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/bioprzod.webp',
                painted: '/textures/gallery/bioprzod_painted.webp'
            },
            {
                _id: '2',
                title: 'Weather - Sky, In Real Time',
                description: 'A real-time weather lookup app with a detail view for extended conditions, built in plain JavaScript against a live weather API.',
                projectUrl: 'https://weather-euros-hub1.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/weather',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/youngmultiprzod.webp',
                painted: '/textures/gallery/youngmultiprzod_painted.webp'
            },
            {
                _id: '3',
                title: 'Movie Search',
                description: 'A movie discovery app that searches and browses titles with poster art and details, built against a movie database API.',
                projectUrl: 'https://movie-search-roan-eight.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/movie-search',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/domki.webp',
                painted: '/textures/gallery/domki.webp'
            },
            {
                _id: '4',
                title: 'Clock Suite',
                description: 'A dependency-free collection of time tools (digital clock, flip clock, timer, world clock).',
                projectUrl: 'https://live-clock-nu.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/live-clock',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/bird.webp',
                painted: '/textures/gallery/bird_gray.webp'
            },
            {
                _id: '5',
                title: 'LearnHub',
                description: 'A front-end e-learning demo with a full simulated auth flow, a dashboard with stats and progress tracking.',
                projectUrl: 'https://signup-pages-gybm.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/signup-pages',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/openliveproject.webp',
                painted: '/textures/gallery/openliveproject.webp'
            },
            {
                _id: '6',
                title: 'Claude Pricing Page Clone',
                description: 'A pixel-conscious recreation of Anthropic\'s Claude pricing page powered by CSS :checked/:has() and native <details>.',
                projectUrl: 'https://pricing-page-test-three.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/pricing-page-test',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/timberkittyprzod.webp',
                painted: '/textures/gallery/timberkittyprzod_painted.webp'
            },
            {
                _id: '7',
                title: 'Butt Traders - Client Website',
                description: 'A freelance client project: a digital-services agency site covering offerings, team and contact.',
                projectUrl: 'https://butt-trader.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/ButtTrader',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/miastotlo.webp',
                painted: '/textures/gallery/miastotlo.webp'
            },
            {
                _id: '8',
                title: 'EurosHub Landing Page',
                description: 'A responsive landing page built during my internship at EurosHub.',
                projectUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                techStack: ['reactlogo.webp', 'htmllogo.webp', 'csslogo.webp'],
                front: '/textures/gallery/monetuneprzod.webp',
                painted: '/textures/gallery/monetuneprzod_painted.webp'
            },
            {
                _id: '9',
                title: 'Temperature Converter',
                description: 'A temperature converter website built with HTML, CSS, and JS.',
                projectUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/przyciskdotylukartki.webp',
                painted: '/textures/gallery/przyciskdotylukartki_painted.webp'
            }
        ];

        cache.content = [
            {
                id: 'github-1',
                title: 'GitHub Repositories',
                platform: 'github',
                description: 'Check out my 24+ live projects and repositories.',
                url: 'https://github.com/maleehanadeemeuroshub-maker',
                frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
                paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'
            },
            {
                id: 'linkedin-1',
                title: 'LinkedIn Profile',
                platform: 'linkedin',
                description: 'Connect with me professionally on LinkedIn.',
                url: 'https://www.linkedin.com/in/maleeha-nadeem',
                frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
                paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'
            }
        ];

        cache.awards = {
            sotd: {
                id: 'award-sotd',
                layout: 'certificate_grid',
                title: 'Internships',
                items: [
                    { label: 'Oasis Infobyte Intern', date: 'Web Development', url: null },
                    { label: 'Synent Technologies Intern', date: 'Web Development', url: null },
                    { label: 'EurosHub Intern', date: 'Web Development', url: null }
                ],
                platformConfig: { label: 'EXPERIENCE', color: '#1a1a1a', icon: 'dY?+' }
            },
            sotm: {
                id: 'award-sotm',
                layout: 'certificate_grid',
                title: 'Education',
                items: [
                    { label: 'BS Software Engineering', date: '2024 - Present', url: null },
                    { label: 'HSSC (ICS)', date: 'Completed', url: null },
                    { label: 'SSC (Science)', date: 'Completed', url: null }
                ],
                platformConfig: { label: 'EDUCATION', color: '#1a1a1a', icon: 'dY".' }
            },
            other: {
                id: 'award-other',
                layout: 'certificate_grid',
                title: 'Quick Facts',
                items: [
                    { label: '3+ Internships', date: 'Completed', url: null },
                    { label: '16 Live Projects', date: 'Deployed', url: null },
                    { label: '24+ GitHub Repos', date: 'Open Source', url: null }
                ],
                platformConfig: { label: 'FACTS', color: '#1a1a1a', icon: 'dY``' }
            }
        };

        cache.loaded = true;
        cache.loading = false;
        notifyUpdate();
    }, 100); // 100ms fake delay
}

export function isSanityDataLoaded() {
    return cache.loaded;
}

import { useState, useEffect } from 'react';

export function useGalleryProjects() {
    const [projects, setProjects] = useState(cache.projects);
    useEffect(() => {
        loadSanityData();
        if (cache.loaded) setProjects(cache.projects);
        return subscribe(() => setProjects(cache.projects));
    }, []);
    return projects;
}

export function useStudioContent() {
    const [content, setContent] = useState(cache.content);
    useEffect(() => {
        loadSanityData();
        if (cache.loaded) setContent(cache.content);
        return subscribe(() => setContent(cache.content));
    }, []);
    return content;
}

export function useAwards() {
    const [awardsData, setAwardsData] = useState(cache.awards);
    useEffect(() => {
        loadSanityData();
        if (cache.loaded) setAwardsData(cache.awards);
        return subscribe(() => setAwardsData(cache.awards));
    }, []);
    return awardsData;
}

loadSanityData();
