// function Education() {
//     return (
//         <div className="education">
//             <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>

//             <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                     M.Tech Computer Science (Integrated)
//                 </h3>
//                 <p className="text-gray-600 mt-1">
//                     Sri Krishna College of Engineering and Technology
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                     Expected Graduation: 2026
//                 </p>
//                 <div className="border-t my-4"></div>
//                 <h4 className="text-lg font-semibold mb-3 text-gray-700">
//                     Relevant Coursework
//                 </h4>
//                 <ul className="grid grid-cols-2 gap-3 text-gray-600">
//                     <li className="bg-gray-100 px-3 py-2 rounded-lg">Data Structures</li>
//                     <li className="bg-gray-100 px-3 py-2 rounded-lg">Artificial Intelligence</li>
//                     <li className="bg-gray-100 px-3 py-2 rounded-lg">Web Development</li>
//                     <li className="bg-gray-100 px-3 py-2 rounded-lg">Software Engineering</li>
//                 </ul>
//             </div>
//             </div>
//     );
// }

// export default Education

function Education() {
    return (
        <section id="education" 
            className="
                min-h-screen 
                bg-gradient-to-br 
                from-slate-100 via-white to-blue-50 
                dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
                py-20 px-6 flex items-center justify-center
                transition-colors duration-500
            "
        >
            <div className="max-w-5xl w-full">
                <div className="text-center mb-14">
                    <p 
                        className="
                            uppercase tracking-[6px] 
                            text-blue-600
                            dark:text-blue-400
                            font-semibold mb-3">
                        Academic Journey
                    </p>
                    <h2 
                        className="
                            text-4xl md:text-5xl font-extrabold 
                            text-gray-900
                            dark:text-white
                        "
                    >
                        Education
                    </h2>
                    <div className="w-28 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div 
                        className="
                            relative 
                            bg-white/80 
                            dark:bg-slate-900/80
                            backdrop-blur-xl 
                            border border-white/40 
                            dark:border-slate-700
                            rounded-3xl shadow-2xl 
                            p-8 md:p-12 overflow-hidden
                            transition-colors duration-500
                        "
                    >
                        <div 
                            className="
                                absolute top-0 right-0 
                                w-40 h-40 
                                bg-blue-100 
                                dark:bg-blue-900/30
                                rounded-full blur-3xl opacity-40"></div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div>
                                <h3 
                                    className="
                                        text-2xl md:text-3xl font-bold 
                                        text-gray-900 
                                        dark:text-white
                                        mb-2
                                    "
                                >
                                    M.Tech Computer Science (Integrated)
                                </h3>
                                <p 
                                    className="
                                        text-lg 
                                        text-gray-600 
                                        dark:text-gray-300
                                    "
                                >
                                    Sri Krishna College of Engineering and Technology
                                </p>
                            </div>
                            <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg text-center">
                                <p className="text-sm uppercase tracking-wider">
                                    Graduation
                                </p>
                                <h4 className="text-xl font-bold">
                                    2026
                                </h4>
                            </div>
                        </div>
                        <div 
                            className="
                                h-[1px] w-full 
                                bg-gradient-to-r 
                                from-transparent 
                                via-gray-300 
                                dark:via-slate-600
                                to-transparent mb-8"></div>
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                                Relevant Coursework
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
                                    <p className="font-semibold text-lg">
                                        Data Structures
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
                                    <p className="font-semibold text-lg">
                                        Artificial Intelligence
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-5 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
                                    <p className="font-semibold text-lg">
                                        Web Development
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
                                    <p className="font-semibold text-lg">
                                        Software Engineering
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;