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
                title: 'EurosHub — Company Website',
                description: 'Multi-page marketing website for EurosHub, built during a web development internship — home, about, services, portfolio, team and testimonials pages with semantic HTML and fully responsive CSS, deployed live for the client.',
                url: 'https://final-euroshub-landng-page.vercel.app',
                projectUrl: 'https://final-euroshub-landng-page.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/FINAL-Euroshub-landng-Page',
                techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/csslogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/monetuneprzod.webp',
                painted: '/textures/gallery/monetuneprzod_painted.webp'
            },
            {
                _id: '2',
                title: 'DevNotes — Blog Platform',
                description: 'A React + Vite blog platform with routed pages for home, blog listing, article detail, categories and contact — built around reusable components, context and custom hooks.',
                url: 'https://blog-website-euros-hub1.vercel.app',
                projectUrl: 'https://blog-website-euros-hub1.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/BLOG-website',
                techStack: ['/textures/gallery/reactlogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/timberkittyprzod.webp',
                painted: '/textures/gallery/timberkittyprzod_painted.webp'
            },
            {
                _id: '3',
                title: 'Netflix Clone',
                description: 'A front-end clone of the Netflix landing and browse experience — hero sign-up flow, feature highlights, FAQ accordion and a browsable streaming page with movie rows, built in plain HTML, CSS and JavaScript.',
                url: 'https://netflixx-olive.vercel.app',
                projectUrl: 'https://netflixx-olive.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/NETFLIXX',
                techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/csslogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/youngmultiprzod.webp',
                painted: '/textures/gallery/youngmultiprzod_painted.webp'
            },
            {
                _id: '4',
                title: 'StudyDesk — Student Dashboard',
                description: 'A single-page student dashboard for tracking courses, homework, grades and a weekly class schedule, with term-progress tracking and quick stats — all data persisted locally in the browser.',
                url: 'https://dashboard-euros-hub1.vercel.app',
                projectUrl: 'https://dashboard-euros-hub1.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/dashboard',
                techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/tailwindlogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/bioprzod.webp',
                painted: '/textures/gallery/bioprzod_painted.webp'
            },
            {
                _id: '5',
                title: 'Calculator Hub',
                description: 'A hub of 11 calculator tools — basic, scientific, BMI, age, currency, date difference, discount, EMI, interest, percentage and tip/unit converters — sharing one visual system and a set of common JS helpers.',
                url: 'https://final-calculator-pearl.vercel.app',
                projectUrl: 'https://final-calculator-pearl.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/final-calculator',
                techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/tailwindlogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/monetuneprzod.webp',
                painted: '/textures/gallery/monetuneprzod_painted.webp'
            },
            {
                _id: '6',
                title: 'Flux Todo — React Edition',
                description: 'A full React + Vite rebuild of the Flux Todo app as a single-page app with client-side routing — task board with search, sort, status/category filters and a progress ring, plus category management.',
                url: 'https://flux-react.vercel.app',
                projectUrl: 'https://flux-react.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/flux-react',
                techStack: ['/textures/gallery/reactlogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/timberkittyprzod.webp',
                painted: '/textures/gallery/timberkittyprzod_painted.webp'
            },
            {
                _id: '7',
                title: 'Quizly',
                description: 'Pick a category, difficulty and question count, answer under an optional timer, get scored instantly with explanations, then track progress across rounds.',
                url: 'https://quizly-eta-puce.vercel.app',
                projectUrl: 'https://quizly-eta-puce.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/quizly',
                techStack: ['/textures/gallery/reactlogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/youngmultiprzod.webp',
                painted: '/textures/gallery/youngmultiprzod_painted.webp'
            },
            {
                _id: '8',
                title: 'Butt Traders — Client Website',
                description: 'A freelance client project: a digital-services agency site covering offerings, team and contact — web/app development, SEO and content services across a multi-page static build.',
                url: 'https://butt-trader.vercel.app',
                projectUrl: 'https://butt-trader.vercel.app',
                githubUrl: 'https://github.com/maleehanadeemeuroshub-maker/ButtTrader',
                techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/csslogo.webp', '/textures/gallery/jslogo.webp'],
                front: '/textures/gallery/bioprzod.webp',
                painted: '/textures/gallery/bioprzod_painted.webp'
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
