import React from 'react';
import profilePic from '../images/profilePic.jpg';
import '../styles/bio.css';

const Bio = () => (
    <article className="about">
        <div className='about--inner-wrapper'>
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
        </div>
        
    </article>
)

export default Bio;