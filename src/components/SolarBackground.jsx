function SolarBackground() {

    const stars = Array.from(
        { length: 180 },
        (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2
        })
    );

    const shootingStars = Array.from(
        { length: 4 },
        (_, i) => ({
            id: i,
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            delay: i * 4
        })
    );

    return (
        <>
            {
                stars.map(star => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`
                        }}

                    />

                ))
            }
        </>
    );
}

export default SolarBackground;