import React from 'react';
import '../styles/testimonials.css';
import cirrus from '../images/cropped/cirrus.jpg';
import cat3 from '../images/cropped/cat3.jpg';
import dog2 from '../images/cropped/dog2.jpg';
import dog1 from '../images/cropped/dog1.jpg';

const userReviews = [
    {
        name: 'Cirrus',
        testimonial:
            'Sarah is soooooo nice! She plays with me, spoils me with treats, and gives me snuggles and love while my humans are away. Puuuurrrrr',
        image: cirrus,
    },
    {
        name: 'Cute Doggy',
        testimonial:
            'Sarah is the best. She comes to visit me when my family is away. We go for long walks, and sometimes play in the park. Woof woof!',
        image: dog2,
    },
    {
        name: 'Pretty Kitty',
        testimonial:
            'I love Sarah. Meow. I never worry when my humans travel, because I know Sarah will take good care of me. Plus, she brings treats!',
        image: cat3,
    },
    {
        name: 'Nice Doggy',
        testimonial:
            'Sarah gets five stars from me. She takes me outside where I can sniff everything. Sometimes we play fetch too. Bark bark.',
        image: dog1,
    },
];

const Testimonials = props => {
    return (
        <section className="main--testimonials">
            {/*  this title wrapper is div is needed to match up the section title alignment with the services section title */}
            <div className="main--testimonials-title-wrapper">
                <h2 className="main--testimonials-title">
                    {props.sectionName}
                </h2>
            </div>

            <ul className="main--testimonials-ul">
                {userReviews.map((value, index) => {
                    return (
                        <li
                            key={index}
                            className="main--testimonials-testimonial"
                        >
                            <div>
                                {/* alternate the photo/text alignment. odd indexed users to the right. even to the left. */}
                                {index % 2 !== 0 ? (
                                    <img
                                        className="pet-profilePic odd-images"
                                        src={value.image}
                                        alt={value.name}
                                    />
                                ) : (
                                    <img
                                        className="pet-profilePic"
                                        src={value.image}
                                        alt={value.name}
                                    />
                                )}

                                {index % 2 !== 0 ? (
                                    <p className="main--testimonials-odd">
                                        {value.testimonial}{' '}
                                        <span className="main--testimonials-name">
                                            {' '}
                                            ~ {value.name}
                                        </span>
                                    </p>
                                ) : (
                                    <p className="main--testimonials-even">
                                        {value.testimonial}{' '}
                                        <span className="main--testimonials-name">
                                            {' '}
                                            ~ {value.name}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>

            <p className="main--testimonials-human">
                ** Human references available upon request
            </p>
        </section>
    );
};

export default Testimonials;
