import React from 'react';

import { homeAboutStyles as s } from '../assets/dummystyles';
import HomeAboutImage from '../assets/HomeAboutImage.png'
import { featuredBooks, hastats } from '../assets/dummydata';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeAbout = () => {
    return (
        <div className={s.wrapper}>
            <div className='absolute inset-0 overflow-hidden'>
                <div className={s.bgBlur1} />
                <div className={s.bgBlur2} />
            </div>

            <div className={s.container}>
                <div className={s.aboutGrid}>
                    <div className={s.imageWrapper}>
                        <div className={s.imageGlow} />
                        <div className={s.imageContainer}>
                            <img src={HomeAboutImage} alt="" className={s.aboutImage} />
                        </div>

                    </div>
                    <div className=' space-y-8'>
                        <div>
                            <h2 className={s.aboutHeader}>Our Literary Journey</h2>
                            <div className={s.underline} />
                        </div>

                        <p className={s.aboutText}>
                            Founded with a passion for literature, BookShell has evolved into a sanctuary for book lovers. We curate exceptional reading experiences, connecting readers with stories that inspire, educate, and transport them to new worlds.
                        </p>

                        <div className={s.statGrid}>
                            {hastats.map((stat, index) => (
                                <div className={s.statCard} key={index}>
                                    <div className={s.statIconWrap}>
                                        <stat.icon className={s.statIcon} />
                                    </div>
                                    <h3 className={s.statValue} >{stat.value}</h3>
                                    <p className={s.statLabel}>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link to='/about' className={s.aboutButton} >
                            <span>Learn More About us</span>
                            <ArrowRight className={s.arrowIcon} />
                        </Link>

                    </div>
                </div>

                <div className='mb-12 text-center '>
                    <h2 className={s.sectionHeader}> Legendary Volumes</h2>
                    <div className={s.headerUnderline}></div>
                    <p className={s.headerText}>
                        Handpicked recommendations from our literary experts that you won't want to miss.
                    </p>
                </div>

                <div className={s.bookGrid}>
                    {featuredBooks.map((book, index) => (
                        <div className={s.bookCardWrap} key={index}>
                            <div className={s.bookCardGlow} />

                            <div className={s.bookCard}>
                                <div className={s.bookImageWrapper}>
                                    <img src={book.image} alt="" className={s.bookImage} />
                                </div>

                                <div className={s.bookContent}>
                                    <h3 className={s.bookTitle}>{book.title}</h3>

                                    <p className={s.bookAuthor}>{book.author}</p>
                                    <p className={s.bookDesc}>{book.description}</p>

                                    <Link to='/books' className={s.discoverLink}>
                                        <span>
                                            Discover
                                        </span>
                                        <ArrowRight className={s.arrowSmall} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;