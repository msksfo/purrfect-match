import React from 'react';
import '../styles/aboutPage.css';
import Navigation from '../components/Navigation';
import profilePic from '../images/profilePic.jpg';
import cat1 from '../images/cropped/cat1.jpg';
import cat2 from '../images/cropped/cat2.jpg';
import cat3 from '../images/cropped/cat3.jpg';
import cat4 from '../images/cropped/cat4.jpg';
import cat5 from '../images/cropped/cat5.jpg';
import cat6 from '../images/cropped/cat6.jpg';
import cat7 from '../images/cropped/cat7.jpg';
import cat8 from '../images/cropped/cat8.jpg';
import cat9 from '../images/cropped/cat9.jpg';
import cat10 from '../images/cropped/cat10.jpg';
import cat11 from '../images/cropped/cat11.jpg';
import cat12 from '../images/cropped/cat12.jpg';
import cat13 from '../images/cropped/cat13.jpg';
import cat14 from '../images/cropped/cat14.jpg';
import cat15 from '../images/cropped/cat15.jpg';
import cat16 from '../images/cropped/cat16.jpg';
import cat17 from '../images/cropped/cat17.jpg';
import cat18 from '../images/cropped/cat18.jpg';
import cat19 from '../images/cropped/cat19.jpg';
import cat20 from '../images/cropped/cat20.jpg';
import cirrus from '../images/cropped/cirrus.jpg';
import dog1 from '../images/cropped/dog1.jpg';
import dog2 from '../images/cropped/dog2.jpg';
import dog3 from '../images/cropped/dog3.jpg';
import dog4 from '../images/cropped/dog4.jpg';
import dog5 from '../images/cropped/dog5.jpg';
import dog6 from '../images/cropped/dog6.jpg';
import dog7 from '../images/cropped/dog7.jpg';
import dog8 from '../images/cropped/dog8.jpg';

const AboutPage = () => {
    return (
        <div className="about-wrapper">
            <div className="about--decorative-images-wrapper">
                <img src={cat1} alt="" className="decorative-image" />
                <img src={cat2} alt="" className="decorative-image" />
                <img src={dog1} alt="" className="decorative-image" />
                <img src={cirrus} alt="" className="decorative-image" />
                <img src={cat3} alt="" className="decorative-image" />
                <img src={dog2} alt="" className="decorative-image" />
                <img src={cat4} alt="" className="decorative-image" />
                <img src={cat5} alt="" className="decorative-image" />
                <img src={cat6} alt="" className="decorative-image" />
                <img src={cat7} alt="" className="decorative-image" />
                <img src={dog7} alt="" className="decorative-image" />
                <img src={cat8} alt="" className="decorative-image" />
                <img src={dog3} alt="" className="decorative-image" />
                <img src={cat9} alt="" className="decorative-image" />
                <img src={cat10} alt="" className="decorative-image" />
                <img src={dog4} alt="" className="decorative-image" />
                <img src={cat11} alt="" className="decorative-image" />
                <img src={cat15} alt="" className="decorative-image" />
                <img src={cat14} alt="" className="decorative-image" />
                <img src={cat13} alt="" className="decorative-image" />
                <img src={cat12} alt="" className="decorative-image" />
                <img src={dog5} alt="" className="decorative-image" />
                <img src={cat16} alt="" className="decorative-image" />
                <img src={cat17} alt="" className="decorative-image" />
                <img src={dog8} alt="" className="decorative-image" />
                <img src={cat18} alt="" className="decorative-image" />
                <img src={cat19} alt="" className="decorative-image" />
                <img src={cat20} alt="" className="decorative-image" />
                <img src={dog6} alt="" className="decorative-image" />
            </div>
            <article className="about">
                <figure className="about--image-wrapper">
                    <img
                        className="about--image"
                        src={profilePic}
                        alt="Sarah profile pic"
                    />
                </figure>

                <section className="about--summary">
                    <h1>Hi. I'm Sarah</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque velit eros, imperdiet vitae vestibulum eget,
                        dictum a nibh. Donec nec posuere risus, placerat
                        faucibus urna. Praesent bibendum sit amet urna sed
                        consectetur. Nullam nunc augue, aliquam vel magna in,
                        condimentum egestas sapien. Praesent consequat eros sit
                        amet enim ultricies, vel iaculis mauris volutpat. Ut
                        porttitor tellus in faucibus auctor.
                    </p>

                    <p>
                        Nulla gravida tellus at risus feugiat suscipit. Aliquam
                        et mi at ligula tempus scelerisque quis nec urna. Proin
                        efficitur mi sit amet ligula molestie sollicitudin.
                        Curabitur congue nulla tortor. Etiam interdum, diam a
                        fringilla rutrum, leo magna placerat orci, non molestie
                        mauris arcu posuere urna.
                    </p>
                </section>
            </article>

            <Navigation  />
        </div>
    );
};

export default AboutPage;
