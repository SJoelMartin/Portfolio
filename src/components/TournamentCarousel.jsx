import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TournamentCarousel({ sportsGallery }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const totalSlides = sportsGallery.length;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [paused, activeIndex]);

    const getPosition = (index) => {
        let offset = index - activeIndex;
        if (offset > totalSlides / 2) offset -= totalSlides;
        if (offset < -totalSlides / 2) offset += totalSlides;
        return offset;
    };

    const [flippedCards, setFlippedCards] = useState({});

    const toggleCard = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="py-20">
            <h4 className="text-4xl font-bold text-center text-gray-900 mb-16">
                Tournament Highlights
            </h4>
            <div
                className="relative h-[400px] overflow-hidden"
            >
                {sportsGallery.map((sport, index) => {
                    const offset = getPosition(index);
                    let translateX = 0;
                    let translateY = 0;
                    let scale = 1;
                    let opacity = 1;
                    let zIndex = 100;

                    if (offset === 0) {
                        translateX = 0;
                        translateY = 0;
                        scale = 1;
                        opacity = 1;
                        zIndex = 30;
                    } else if (offset === -1) {
                        translateX = -420;
                        translateY = 60;
                        scale = 0.8;
                        opacity = 0.55;
                        zIndex = 20;
                    } else if (offset === 1) {
                        translateX = 420;
                        translateY = 60;
                        scale = 0.8;
                        opacity = 0.55;
                        zIndex = 20;
                    } else {
                        translateX = offset * 500;
                        translateY = 120;
                        scale = 0.65;
                        opacity = 0;
                        zIndex = 0;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-0 transition-all duration-700 ease-in-out"
                            style={{
                                transform: `
                                    translateX(calc(-50% + ${translateX}px))
                                    translateY(${translateY}px)
                                    scale(${scale})
                                `,
                                opacity,
                                zIndex,
                            }}
                        >
                            {/* <div
                                className="
                                    group
                                    w-[380px]
                                    bg-white
                                    rounded-3xl
                                    overflow-hidden
                                    shadow-2xl
                                "
                            >
                                <div className="overflow-hidden h-60">
                                    <img
                                        src={sport.team}
                                        alt={sport.title}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            group-hover:scale-110
                                            transition
                                            duration-700
                                        "
                                    />
                                </div>
                                <div className="p-6">
                                    <h5 className="text-2xl font-bold text-gray-900">
                                        {sport.title}
                                    </h5>
                                    <p className="text-gray-600 mt-2 mb-5">
                                        📍 {sport.location}
                                    </p>
                                    <div className="overflow-hidden rounded-2xl h-52">
                                        <img
                                            src={sport.personal}
                                            alt={sport.title}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                                hover:scale-105
                                                transition
                                                duration-700
                                            "
                                        />
                                    </div>
                                </div>
                            </div> */}
                            {/* <div
                                onClick={() => toggleCard(index)}
                                className="
                                    relative
                                    w-[380px]
                                    h-[500px]
                                    cursor-pointer
                                "
                            >
                                <div
                                    className={`
                                        absolute
                                        inset-0
                                        rounded-3xl
                                        overflow-hidden
                                        shadow-xl
                                        transition-all
                                        duration-700
                                        ${
                                            flippedCards[index]
                                                ? "scale-100 z-20"
                                                : "scale-95 translate-y-4 z-10"
                                        }
                                    `}
                                >
                                    <img
                                        src={sport.personal}
                                        alt=""
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div
                                    className={`
                                        absolute
                                        inset-0
                                        rounded-3xl
                                        overflow-hidden
                                        shadow-2xl
                                        transition-all
                                        duration-700
                                        ${
                                            flippedCards[index]
                                                ? "scale-95 translate-y-4 z-10"
                                                : "scale-100 z-20"
                                        }
                                    `}
                                >
                                    <img
                                        src={sport.team}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-5">
                                        <h5 className="text-white text-2xl font-bold">
                                            {sport.title}
                                        </h5>
                                        <p className="text-gray-200">
                                            📍 {sport.location}
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <div
                                className="relative w-[420px] h-[360px] cursor-pointer"
                                onClick={() => toggleCard(index)}
                            >
                                <div
                                    className={`
                                        absolute
                                        w-[320px]
                                        h-[240px]
                                        rounded-3xl
                                        overflow-hidden
                                        shadow-2xl
                                        transition-all
                                        duration-700
                                        ease-in-out
                                        ${
                                            flippedCards[index]
                                                ? "top-12 left-16 z-10"
                                                : "top-0 left-0 z-20"
                                        }
                                    `}
                                    onMouseEnter={() => setPaused(true)}
                                    onMouseLeave={() => setPaused(false)}
                                >
                                    <img
                                        src={sport.team}
                                        alt=""
                                        className={`
                                            w-full
                                            h-full
                                            object-cover
                                            transition-all
                                            duration-700
                                            ${
                                                flippedCards[index]
                                                    ? "blur-[2px] scale-95"
                                                    : "blur-0 scale-100"
                                            }
                                        `}
                                    />
                                    <div className="absolute inset-0 bg-black/15" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                                        <h5 className="text-white text-xl font-bold">
                                            {sport.title}
                                        </h5>
                                        <p className="text-gray-200 text-sm">
                                            📍 {sport.location}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={`
                                        absolute
                                        w-[320px]
                                        h-[240px]
                                        rounded-3xl
                                        overflow-hidden
                                        shadow-xl
                                        transition-all
                                        duration-700
                                        ease-in-out
                                        onMouseEnter={() => setPaused(true)}
                                        onMouseLeave={() => setPaused(false)}
                                        ${
                                            flippedCards[index]
                                                ? "top-0 left-0 z-20"
                                                : "top-12 left-16 z-10"
                                        }
                                    `}
                                    onMouseEnter={() => setPaused(true)}
                                    onMouseLeave={() => setPaused(false)}
                                >
                                    <img
                                        src={sport.personal}
                                        alt=""
                                        className={`
                                            w-full
                                            h-full
                                            object-cover
                                            object-top
                                            transition-all
                                            duration-700
                                            ${
                                                flippedCards[index]
                                                    ? "blur-0 scale-100"
                                                    : "blur-[2px] scale-95"
                                            }
                                        `}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
                <button
                    onClick={prevSlide}
                    className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        z-50
                        w-12
                        h-12
                        rounded-full
                        bg-white
                        shadow-lg
                        hover:scale-110
                        transition
                        hover:bg-blue-700
                        hover:text-white
                    "
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        z-50
                        w-12
                        h-12
                        rounded-full
                        bg-white
                        shadow-lg
                        hover:scale-110
                        transition
                        hover:bg-blue-700
                        hover:text-white
                    "
                >
                    ❯
                </button>
            </div>
            <div className="flex justify-center gap-3 mt-8">
                {sportsGallery.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            transition-all duration-300 rounded-full cursor-pointer
                            ${
                                activeIndex === index
                                    ? "w-8 h-3 bg-blue-600"
                                    : "w-3 h-3 bg-gray-300"
                            }
                        `}
                    />
                ))}
            </div>
        </section>
    );
}

export default TournamentCarousel;