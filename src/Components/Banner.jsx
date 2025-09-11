import React, { useEffect, useState } from 'react';
import { container, formContainer, geometricOverlay, glassBox, headerText, imageSection, imageStyle, imageWrapper, inputField, inputWrapper, overlayEffect, paragraphText, scrollText, scrollTextSection, searchButton, statBox, statLabel, statNumber, statsContainer, subHeader } from '../assets/dummystyles';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { words } from '../assets/dummydata';
import img from '../assets/banner1.png'


const Banner = () => {

    const [searchQuary, setSearchQuary] = useState(" ");
    const [currentWord, setCurrentWord] = useState(0);


    const navigate = useNavigate();

    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 2000)
        return () => clearInterval(intervel)
    }, [])


    const handelsearch = (e) => {
        e.preventDefault()
        if (searchQuary.trim()) {
            navigate('/books?search=${encodeURIComponent(searchQuery.trim())}')
        }
    }






    return (
        <div className={container}>
            <div className={glassBox}>
                <div className={geometricOverlay}>
                    <div className=' absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 
                    md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl' />
                    <div className='absolute  -bottom-20 -left-20 md:-bottom-40 md:-left-40 h-40 w-40
                     md:w-80 md:h-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl' />
                </div>

                <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
                    {/* TEXT SECTION */}
                    <div className='space-y-4 md:space-y-6  '>
                        <h1 className={headerText}>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43c6AC]'>
                                Mindful
                            </span>
                            <br />
                            <span className={subHeader}>
                                Reading Experience
                            </span>
                        </h1>

                        <p className={paragraphText}>
                            Curated knowledge journeys that challenge perceptions and inspire growth. Discover transformative content crafted for the modern intellect.
                        </p>


                        {/* SEARCH FUNCTION */}

                        <form onSubmit={handelsearch} className='space-y-6 md:space-y-8'>
                            <div className={formContainer}>
                                <div className={inputWrapper}>
                                    <div className=' absolute inset-0 bg-white/90 rounded-lg md:rounded-xl
                                  shadow-sm' />
                                    <div className='relative flex items-center'>
                                        <Search className='ml-4 md:ml-5 w-5 h-5 md:w-6 md:h-6 text-gray-600
                                    group-focus-within:text-[#2B5876]'/>

                                        <input type='text' value={searchQuary} onChange={(e) => setSearchQuary(e.target.value)}
                                            placeholder='search Author, titles, or concept...' className={inputField} />
                                    </div>
                                </div>

                                <button type='submit' className={searchButton}>
                                    <Search className='w-4 h-4 md:w-5 md:h-5' />
                                    <span className='sr-only'> Search </span>
                                </button>
                            </div>
                        </form>

                        {/* STATS */}

                        <div className={statsContainer}>
                            {[
                                { number: "50k+", label: "Titles" },
                                { number: "1.2M", label: "Readers" },
                                { number: "240+", label: "Topics" },
                            ].map((stat, i) => (
                                <div className={statBox} key={i}>
                                    <div className={statNumber}>
                                        {stat.number}
                                    </div>

                                    <div className={statLabel}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* IMAGES  */}
                    <div className={imageSection}>
                        <div className={imageWrapper}>
                            <img src={img} alt=" Image Banner" className={imageStyle} />
                            <div className={overlayEffect} />
                        </div>
                    </div>
                </div>

                {/* FOOTER TEXT */}
                <div className={scrollTextSection}>
                    <div className={scrollText}>
                        Curated Collections • Award-Winning Authors • Critical Analyses • Cultural Perspectives
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;