import "./solar.css";
import OrbitRing from "./OrbitRing";
import { motion } from "framer-motion";
import SolarBackground from "./SolarBackground";

import {
    FaJava,
    FaPython,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiSpringboot,
    SiExpress,
    SiMysql,
    SiMongodb,
    SiPostman
} from "react-icons/si";

function SkillsSolarSystem() {
    const orbits = [
        {
            radius: 60,
            duration: 40,
            reverse: false,
            stacks: [
                {
                    name: "React",
                    icon: FaReact,
                    color: "#61DBFB"
                },
                {
                    name: "HTML",
                    icon: FaHtml5,
                    color: "#E34F26"
                },
                {
                    name: "CSS",
                    icon: FaCss3Alt,
                    color: "#1572B6"
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript,
                    color: "#F7DF1E"
                },
                {
                    name: "Tailwind",
                    icon: SiTailwindcss,
                    color: "#38BDF8"
                }
            ]
        },
        {
            radius: 100,
            duration: 50,
            reverse: true,
            stacks: [
                {
                    name: "Spring Boot",
                    icon: SiSpringboot,
                    color: "#6DB33F"
                },
                {
                    name: "NodeJS",
                    icon: FaNodeJs,
                    color: "#68A063"
                },
                {
                    name: "Express",
                    icon: SiExpress,
                    color: "#FFFFFF"
                }
            ]
        },
        {
            radius: 140,
            duration: 60,
            reverse: false,
            stacks: [
                {
                    name: "Java",
                    icon: FaJava,
                    color: "#F89820"
                },
                {
                    name: "Python",
                    icon: FaPython,
                    color: "#3776AB"
                },
                {
                    name: "C",
                    icon: FaReact,
                    color: "#60A5FA"
                }
            ]
        },
        {
            radius: 180,
            duration: 70,
            reverse: true,
            stacks: [
                {
                    name: "MySQL",
                    icon: SiMysql,
                    color: "#4479A1"
                },
                {
                    name: "MongoDB",
                    icon: SiMongodb,
                    color: "#47A248"
                }
            ]
        },
        {
            radius: 220,
            duration: 80,
            reverse: false,
            stacks: [
                {
                    name: "Git",
                    icon: FaGitAlt,
                    color: "#F1502F"
                },
                {
                    name: "GitHub",
                    icon: FaGithub,
                    color: "#FFFFFF"
                },
                {
                    name: "Docker",
                    icon: FaDocker,
                    color: "#2496ED"
                },
                {
                    name: "Postman",
                    icon: SiPostman,
                    color: "#FF6C37"
                }
            ]
        }
    ];

    return (
        <section
            id="skills"
            className="
            relative
            min-h-[700px]
            overflow-hidden
            bg-gradient-to-br
            from-slate-950
            via-black
            to-slate-900
            "
        >
            <SolarBackground/>
            <div
                className="
                absolute
                top-20
                left-20
                w-96
                h-96
                rounded-full
                bg-cyan-500/10
                blur-3xl
                "
            />
            <div
                className="
                absolute
                bottom-10
                right-10
                w-96
                h-96
                rounded-full
                bg-purple-500/10
                blur-3xl
                "
            />
            <div
                className="
                    pt-20
                    text-center
                    z-50
                    relative
                "
            >
                <h2
                    className="
                    text-5xl
                    font-bold
                    text-white
                    "
                >
                    Skills & Technologies
                </h2>

                <p
                    className="
                    text-slate-400
                    mt-4
                    "
                >
                    Technologies orbiting around my passion for software engineering
                </p>
            </div>
            <div
                className="
                    relative
                    flex
                    justify-center
                    items-center
                    pt-60
                "
            >
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity
                    }}
                    className="
                        absolute
                        w-5
                        h-5
                        rounded-full
                        bg-gradient-to-r
                        from-yellow-400
                        via-orange-500
                        to-yellow-500
                        shadow-[0_0_120px_rgba(255,170,0,.8)]
                        items-center
                        justify-center
                        z-50
                        bg-[radial-gradient(circle,#fff7b3_0%,#ffd54a_25%,#ffb300_55%,#ff6f00_100%)]
                        shadow-[0_0_50px_rgba(255,220,100,.9),0_0_100px_rgba(255,170,0,.8),0_0_180px_rgba(255,120,0,.6),0_0_250px_rgba(255,80,0,.4)]
                    "
                >
                </motion.div>
                {
                    orbits.map((orbit, index) => (
                        <OrbitRing
                            key={index}
                            radius={orbit.radius}
                            duration={orbit.duration}
                            reverse={orbit.reverse}
                            stacks={orbit.stacks}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default SkillsSolarSystem;