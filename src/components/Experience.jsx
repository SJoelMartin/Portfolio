// function Experience() {
//     return (
//         <div className="p-8">
//             <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
//             <div className="relative border-l-2 border-gray-200 pl-6">
//                 <div className="mb-10 ml-4">
//                     <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>
//                     <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
//                         <h3 className="text-xl font-semibold text-gray-800">
//                             Odessa Solutions Pvt. Ltd.
//                         </h3>
//                         <p className="text-gray-600">
//                             Software Intern · Bangalore
//                         </p>
//                         <p className="text-sm text-gray-500 mt-1">
//                             📅 July 2025 – September 2025
//                         </p>
//                         <div className="border-t my-4"></div>
//                         <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                             Tech Stack
//                         </h4>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">C#</span>
//                             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">.NET</span>
//                             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SQL Server</span>
//                             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">LINQ</span>
//                         </div>
//                         <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                             Contributions
//                         </h4>
//                         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//                             <li>Worked on enterprise-level Lessor Portal system</li>
//                             <li>Implemented backend logic using object-oriented principles</li>
//                             <li>Handled database operations and query optimization</li>
//                             <li>Built scalable and production-ready features</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }   

// export default Experience

function Experience() {
    return (
        <section id="experience" 
            className="
                min-h-screen bg-gradient-to-br 
                from-white via-slate-50 to-blue-50 
                dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
                py-20 px-6 flex items-center justify-center
                transition-colors duration-500
            "
        >
            <div className="max-w-6xl w-full">
                <div className="text-center mb-16">
                    <p 
                        className="
                            uppercase tracking-[6px] 
                            text-blue-600 
                            dark:text-blue-400
                            font-semibold mb-3
                        "
                    >
                        Professional Journey
                    </p>
                    <h2 
                        className="
                            text-4xl md:text-5xl font-extrabold 
                            text-gray-900
                            dark:text-white
                        "
                    >
                        Experience
                    </h2>
                    <div className="w-28 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
                </div>
                <div className="relative">
                    <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                    <div className="relative pl-16">
                        <div 
                            className="
                                absolute left-0 top-6 w-10 h-10 rounded-full
                                bg-white dark:bg-slate-900
                                border-4 border-blue-500 shadow-xl flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 blur-3xl rounded-3xl"></div>
                        <div 
                            className="
                                relative 
                                bg-white/80 dark:bg-slate-900/80 
                                backdrop-blur-xl
                                border border-white/40 dark:border-slate-700
                                rounded-3xl shadow-2xl p-8 md:p-10 hover:-translate-y-2 transition duration-500 overflow-hidden
                            "
                        >
                            <div 
                                className="
                                    absolute top-0 right-0 w-40 h-40 
                                    bg-blue-100 dark:bg-blue-900/30
                                    rounded-full blur-3xl opacity-40
                                "
                            ></div>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                                <div>
                                    <h3 
                                        className="
                                            text-3xl font-bold 
                                            text-gray-900 dark:text-white 
                                            mb-2
                                        "
                                    >
                                        Odessa Solutions Private Limited
                                    </h3>
                                    <p 
                                        className="
                                            text-lg 
                                            text-gray-600 dark:text-gray-300
                                        "
                                    >
                                        Associate Software Engineer
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-lg text-center">
                                    <p className="text-sm uppercase tracking-wider">
                                        Duration
                                    </p>
                                    <h4 className="text-lg font-bold">
                                        Jul 2025 – Sep 2025
                                    </h4>
                                </div>
                            </div>
                            <div 
                                className="
                                    h-[1px] w-full 
                                    bg-gradient-to-r from-transparent 
                                    via-gray-300 dark:via-slate-600
                                    to-transparent mb-8
                                "
                            ></div>
                            <div className="mb-10">
                                <h4 
                                    className="
                                        text-2xl font-semibold 
                                        text-gray-800 dark:text-gray-100
                                        mb-5
                                    "
                                >
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-4">
                                    <span 
                                        className="
                                            px-5 py-2 rounded-full 
                                            bg-blue-100 dark:bg-blue-900/30 
                                            text-blue-700 dark:text-blue-300
                                            font-medium shadow-md hover:scale-105 transition duration-300
                                        "
                                    >
                                        C#
                                    </span>
                                    <span 
                                        className="
                                            px-5 py-2 rounded-full 
                                            bg-purple-100 dark:bg-purple-900/30
                                            text-purple-700 dark:text-purple-300
                                            font-medium shadow-md hover:scale-105 transition duration-300
                                        "
                                    >
                                        .NET
                                    </span>
                                    <span 
                                        className="
                                            px-5 py-2 rounded-full 
                                            bg-green-100 dark:bg-green-900/30
                                            text-green-700 dark:text-green-300
                                            font-medium shadow-md hover:scale-105 transition duration-300
                                        "
                                    >
                                        SQL Server
                                    </span>
                                    <span 
                                        className="
                                            px-5 py-2 rounded-full 
                                            bg-orange-100 dark:bg-orange-900/30
                                            text-orange-700 dark:text-orange-300
                                            font-medium shadow-md hover:scale-105 transition duration-300
                                        "
                                    >
                                        LINQ
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-5">
                                    Contributions
                                </h4>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div 
                                        className="
                                            bg-slate-50 dark:bg-slate-800
                                            border border-slate-100 dark:border-slate-700
                                            p-5 rounded-2xl
                                            shadow-sm hover:shadow-lg
                                            transition duration-300
                                        "
                                    >
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Worked on enterprise-level Lessor Portal system.
                                        </p>
                                    </div>
                                    <div className="
                                            bg-slate-50 dark:bg-slate-800
                                            border border-slate-100 dark:border-slate-700
                                            p-5 rounded-2xl
                                            shadow-sm hover:shadow-lg
                                            transition duration-300
                                        "
                                    >
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Implemented backend logic using object-oriented principles.
                                        </p>
                                    </div>
                                    <div className="
                                            bg-slate-50 dark:bg-slate-800
                                            border border-slate-100 dark:border-slate-700
                                            p-5 rounded-2xl
                                            shadow-sm hover:shadow-lg
                                            transition duration-300
                                        "
                                    >
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Handled database operations and query optimization.
                                        </p>
                                    </div>
                                    <div className="
                                            bg-slate-50 dark:bg-slate-800
                                            border border-slate-100 dark:border-slate-700
                                            p-5 rounded-2xl
                                            shadow-sm hover:shadow-lg
                                            transition duration-300
                                        "
                                    >
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Built scalable and production-ready features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;