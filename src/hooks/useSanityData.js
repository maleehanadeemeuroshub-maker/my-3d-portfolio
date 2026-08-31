// Mocked useSanityData.js to serve local static data

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

    // Simulate fetch
    setTimeout(() => {
        cache.projects = [
            {
                _id: '1',
                title: 'EurosHub Landing Page',
                description: 'A responsive landing page built during my internship at EurosHub.',
                projectUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                techStack: ['reactlogo.webp', 'htmllogo.webp', 'csslogo.webp'],
                front: '/textures/gallery/bioprzod.webp',
                painted: '/textures/gallery/bioprzod_painted.webp'
            },
            {
                _id: '2',
                title: 'Temperature Converter',
                description: 'A temperature converter website built with HTML, CSS, and JS.',
                projectUrl: 'https://github.com/maleehanadeemeuroshub-maker',
                techStack: ['htmllogo.webp', 'csslogo.webp', 'jslogo.webp'],
                front: '/textures/gallery/youngmultiprzod.webp',
                painted: '/textures/gallery/youngmultiprzod_painted.webp'
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
            }
        ];

        cache.awards = {
            sotd: { id: 'award-sotd', layout: 'certificate_grid', title: 'Internships', items: [] },
            sotm: { id: 'award-sotm', layout: 'certificate_grid', title: 'Projects', items: [] },
            other: { id: 'award-other', layout: 'certificate_grid', title: 'Certificates', items: [] }
        };

        cache.loaded = true;
        cache.loading = false;
        notifyUpdate();
    }, 500);
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
