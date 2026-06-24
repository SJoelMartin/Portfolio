import Planet from "./Planet";
import "./solar.css";

function OrbitRing({
    radius,
    duration,
    reverse,
    stacks
    })
{
    return(
        <div
            className={`orbit ${reverse ? "reverse" : ""}`}
            style={{
            width:radius*2,
            height:radius*2,
            animationDuration:`${duration}s`,
            pointerEvents: "none"
            }}
        >
            <div className="ring"></div>

            {
                stacks.map((stack, index) => (
                    <Planet
                        key={index}
                        stack={stack}
                        index={index}
                        count={stacks.length}
                        radius={radius}
                        duration={duration}
                        reverse={reverse}
                    />
                ))
            }
        </div>
    )
}

export default OrbitRing;