// function About() {
//     return (
//     <div className="p-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
//                     About Me
//         </h2>
//         <p className="text-gray-600 text-lg leading-relaxed mb-6">
//             I am an M.Tech Computer Science (Integrated) student at 
//             <span className="font-semibold text-gray-800">Sri Krishna College of Engineering and Technology</span> 
//             with a strong foundation in software development, data structures, and AI-driven systems.
//         </p>
//         <p className="text-gray-600 text-lg leading-relaxed mb-8">
//             I enjoy working on projects that blend technology with human behavior, especially in areas like:
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//             <div className="bg-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition">
//                 <p className="font-semibold text-gray-800">User Experience (UX)</p>
//             </div>
//             <div className="bg-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition">
//                 <p className="font-semibold text-gray-800">Artificial Intelligence</p>
//             </div>
//             <div className="bg-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition">
//                 <p className="font-semibold text-gray-800">Web Development</p>
//             </div>
//         </div>
//         <p className="text-gray-600 text-lg leading-relaxed">
//             I have hands-on experience in full-stack development, and I continuously improve my problem-solving skills through competitive programming and real-world projects.
//         </p>
//     </div>
//     );
// }

// export default About

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function About() {
    const { theme } = useContext(ThemeContext);
    console.log("Current theme in About component:", theme);
    return (
        <section id="about" 
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-50
                via-white
                to-blue-50
                dark:from-slate-900
                dark:via-slate-950
                dark:to-slate-900
                flex
                items-center
                justify-center
                px-6
                py-20
                transition-colors
                duration-500
            " 
        >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="text-blue-600 dark:text-blue-400">
                        <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
                            Get To Know Me
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
                            About <span className="text-blue-600">Me</span>
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        I am an M.Tech Computer Science (Integrated) student at{" "}
                        <span className="font-semibold text-gray-800 dark:text-white">
                            Sri Krishna College of Engineering and Technology
                        </span>{" "}
                        with a strong foundation in software development,
                        data structures, and AI-driven systems.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        I enjoy building projects that combine technology with
                        human behavior, especially in areas focused on creating
                        impactful digital experiences and intelligent systems.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span 
                            className="px-5 py-2 rounded-full
                                bg-blue-100 dark:bg-blue-900/40
                                text-blue-700 dark:text-blue-300
                                font-medium 
                                shadow-sm
                                hover:scale-105 
                                transition duration-300"
                        >
                            User Experience
                        </span>
                        <span 
                            className="
                            px-5 py-2 
                            rounded-full 
                            bg-purple-100 dark:bg-purple-900/40
                            text-purple-700 dark:text-purple-300
                            font-medium shadow-sm hover:scale-105 transition duration-300"
                        >
                            Artificial Intelligence
                        </span>
                        <span 
                            className="
                            px-5 py-2 rounded-full 
                            bg-green-100 dark:bg-green-900/40
                            text-green-700 dark:text-green-300
                            font-medium shadow-sm hover:scale-105 transition duration-300"
                        >
                            Web Development
                        </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed pt-2">
                        I have hands-on experience in full-stack development,
                        and I continuously improve my problem-solving abilities
                        through competitive programming and real-world projects.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a
                            href="/Resume_New.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 inline-block"
                        >
                            View Resume
                        </a>
                        <button onClick={() =>
                            document.getElementById("contact").scrollIntoView({
                                behavior: "smooth",
                            })
                        } 
                        className="
                            px-6 py-3 border 
                            border-gray-300
                            dark:border-gray-700
                            text-gray-700
                            dark:text-gray-200
                            rounded-xl
                            hover:bg-gray-100
                            dark:hover:bg-slate-800
                            hover:scale-105 transition duration-300"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div 
                        className="bg-white/70
                            dark:bg-slate-800/70
                            backdrop-blur-lg
                            border
                            border-white/40
                            dark:border-slate-700
                            shadow-2xl
                            rounded-3xl
                            p-8
                            transition-colors
                            duration-500">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                                <h3 className="text-xl font-bold mb-2">
                                    Full Stack Development
                                </h3>
                                <p className="text-blue-100">
                                    Building responsive and scalable web
                                    applications using modern technologies.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                                <h3 className="text-xl font-bold mb-2">
                                    AI & Intelligent Systems
                                </h3>
                                <p className="text-purple-100">
                                    Exploring machine learning, cognitive
                                    systems, and AI-powered experiences.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                                <h3 className="text-xl font-bold mb-2">
                                    Problem Solving
                                </h3>
                                <p className="text-green-100">
                                    Strengthening analytical thinking through
                                    coding challenges and project development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-300 dark:bg-blue-700 opacity-30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-300 dark:bg-purple-700 opacity-30 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}

export default About;