import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { submitContact } from "../services/contactService";

function Contact(){
    const { formData, handleChange, resetForm } = useForm({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        submitContact(formData);
        resetForm();
        document.getElementById("form-success-msg").style.display = "block";
    }

    const navigate = useNavigate();
    function handleLogin(){
        navigate("/login");
    }

    return (
        <div 
            id="contact"
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-50 via-white to-blue-50
                dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
                py-20 px-6
                transition-colors duration-500
            "
        >
            <div className="text-center mb-16">
                <p className="uppercase tracking-[6px] text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    Get In Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                    Contact Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mt-5 max-w-2xl mx-auto">
                    Have a project, opportunity, or just want to connect?
                    Feel free to reach out.
                </p>
                <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
                <div 
                    className="
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-xl
                        rounded-3xl
                        shadow-2xl
                        border border-white/40 dark:border-slate-700
                        p-8 md:p-10
                    "
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h2>
                    <form id="contactForm" noValidate onSubmit={handleSubmit}>
                        <fieldset className="mb-5">
                            <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</legend>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                name="name" 
                                placeholder="Your Name" 
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-300 dark:border-slate-600
                                    bg-white dark:bg-slate-800
                                    text-gray-900 dark:text-white
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
                            />
                        </fieldset >
                        <p id="name-required-error-msg" className="text-red-500 text-sm mt-1"></p>
                        <fieldset className="mb-5">
                            <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</legend>
                            <input
                                type="email"
                                id="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                name="email" 
                                placeholder="Your Email"  
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-300 dark:border-slate-600
                                    bg-white dark:bg-slate-800
                                    text-gray-900 dark:text-white
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
                            />
                        </fieldset>
                        <p id="email-format-error-msg" className="text-red-500 text-sm mt-1"></p>
                        <p id="email-required-error-msg" className="text-red-500 text-sm mt-1"></p>
                        <fieldset className="mb-5">
                            <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</legend>
                            <textarea
                                id="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                name="message" 
                                placeholder="Your Message" 
                                rows={6}
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-300 dark:border-slate-600
                                    bg-white dark:bg-slate-800
                                    text-gray-900 dark:text-white
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
                            >
                            </textarea>
                        </fieldset>
                        <p id="message-required-error-msg" className="text-red-500 text-sm mt-1"></p>
                        <button 
                            className="
                                w-full
                                py-3
                                rounded-xl
                                bg-blue-600
                                text-white
                                font-semibold
                                hover:bg-blue-700
                                transition
                                shadow-lg
                            " 
                            type="submit" 
                        >
                            Send
                        </button>
                    </form>
                    <div 
                        id="form-success-msg" 
                        className="
                            hidden
                            mt-6
                            bg-green-100 dark:bg-green-900/30
                            border border-green-300 dark:border-green-700
                            rounded-2xl
                            p-4
                        "
                    >
                        <p className="text-green-700 dark:text-green-300 font-medium">Thank You for your Message!</p>
                        <p className="text-green-600 dark:text-green-400 text-sm mt-1">Please check your inbox for future communications from me</p>
                    </div>
                    <button 
                        id="login-button" 
                        onClick={handleLogin} 
                        className="
                            mt-6
                            w-full
                            py-3
                            rounded-xl
                            border
                            border-blue-500
                            text-blue-600 dark:text-blue-400
                            hover:bg-blue-50 dark:hover:bg-slate-800
                            transition
                        "
                    >
                        Login/Register
                    </button>
                </div>
                <div 
                    className="
                        bg-white/80 dark:bg-slate-900/80
                        backdrop-blur-xl
                        rounded-3xl
                        shadow-2xl
                        border border-white/40 dark:border-slate-700
                        p-8 md:p-10
                        flex flex-col justify-center
                    "
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Connect with Me</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=joelmartin.s.1703@gmail.com&su=Portfolio%20Connection&body=Hi%20Joel,"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                bg-slate-50 dark:bg-slate-800
                                border border-slate-200 dark:border-slate-700
                                rounded-2xl
                                p-5
                                flex items-center justify-center
                                hover:scale-105
                                hover:shadow-lg
                                transition duration-300
                            "
                        >   
                            <img title="Gmail" className="w-12 h-12 object-contain" src="../icons/gmail.png"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/joel-martin-s-71470b227/" 
                            target="_blank"
                            className="
                                bg-slate-50 dark:bg-slate-800
                                border border-slate-200 dark:border-slate-700
                                rounded-2xl
                                p-5
                                flex items-center justify-center
                                hover:scale-105
                                hover:shadow-lg
                                transition duration-300
                            "
                            rel="noopener noreferrer"
                        >
                            <img title="LinkedIn" className="w-12 h-12 object-contain" src="../icons/linkedin.png"/>
                        </a>
                        <a 
                            href="https://github.com/joelmartin" 
                            target="_blank"
                            className="
                                bg-slate-50 dark:bg-slate-800
                                border border-slate-200 dark:border-slate-700
                                rounded-2xl
                                p-5
                                flex items-center justify-center
                                hover:scale-105
                                hover:shadow-lg
                                transition duration-300
                            "  
                            rel="noopener noreferrer"
                        >
                            <img title="GitHub" className="w-12 h-12 object-contain" src="../icons/github.png"/>
                        </a>
                        <a 
                            href="https://leetcode.com/u/Joel_Martin_S/" 
                            target="_blank"
                            className="
                                bg-slate-50 dark:bg-slate-800
                                border border-slate-200 dark:border-slate-700
                                rounded-2xl
                                p-5
                                flex items-center justify-center
                                hover:scale-105
                                hover:shadow-lg
                                transition duration-300
                            "
                            rel="noopener noreferrer"
                        >
                            <img title="LeetCode" className="w-12 h-12 object-contain" src="../icons/leetcode.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact