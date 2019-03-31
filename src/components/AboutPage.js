import React from 'react';
import PhotoCollage from '../components/PhotoCollage';
import Bio from '../components/Bio';
import Navigation from '../components/Navigation';

import '../styles/aboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-wrapper">

            <PhotoCollage />

            <Bio />

            <Navigation  />
        </div>
    );
};

export default AboutPage;
