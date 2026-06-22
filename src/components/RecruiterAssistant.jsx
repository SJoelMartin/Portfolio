import { useState } from "react";
import axios from "axios";
import { Bot, Send } from "lucide-react";

function AIRecruiterAssistant() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [chat, setChat] = useState([
        {
        sender: "ai",
        text: "Hi 👋 I'm your AI Recruiter Assistant. Ask me anything about Joel's skills, projects, experience and achievements."
        }
    ]);
    
    const suggestions = [
        "Tell me about Joel",
        "What projects has Joel built?",
        "What technologies does Joel know?",
        "Explain his AI projects",
        "Why should I hire Joel?"
    ];
    const askAssistant = async (question = message) => {
        if (!question.trim()) return;
            setChat((prev) => [
            ...prev,
            {
                sender: "user",
                text: question
            }
        ]);
        setMessage("");
        setLoading(true);
        try {
            const url = `${import.meta.env.VITE_API_URL}/recruiter-assistant`;
            const res = await axios.post(
                url,
                {
                    message: question
                }
            );
            console.log(url);
            setChat((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: res.data.response
                }
            ]);
        } catch (err) {
            setChat((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "Unable to connect to AI assistant."
                }
            ]);
        }
        setLoading(false);
    };
  return (
        <section 
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
            <div className="rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
                <div className="border-b border-slate-800 p-8">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                            <Bot size={30} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                AI Recruiter Assistant
                            </h2>
                            <p className="text-slate-400 mt-1">
                                Ask questions about Joel's experience, skills and projects.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8">
                        {suggestions.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => askAssistant(item)}
                            className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition"
                        >
                            {item}
                        </button>
                        ))}
                    </div>
                </div>
                <div className="h-[500px] overflow-y-auto p-8 bg-slate-950 space-y-5">
                    {chat.map((msg, index) => (
                        <div
                        key={index}
                        className={`max-w-[80%] px-5 py-4 rounded-2xl leading-7 ${
                            msg.sender === "user"
                            ? "ml-auto bg-blue-600 text-white"
                            : "bg-slate-800 text-slate-200"
                        }`}
                        >
                        {msg.text}
                        </div>
                    ))}
                    {loading && (
                        <div className="bg-slate-800 text-slate-400 px-5 py-4 rounded-2xl w-fit animate-pulse">
                            AI is thinking...
                        </div>
                    )}
                </div>
                <div className="border-t border-slate-800 p-6 bg-slate-900">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={message}
                            placeholder="Ask me anything..."
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && askAssistant()
                            }
                            className="flex-1 rounded-2xl bg-slate-800 border border-slate-700 px-6 py-4 text-white outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={() => askAssistant()}
                            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-2xl transition flex items-center gap-2 text-white font-medium"
                        >
                        <Send size={18} />
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AIRecruiterAssistant;
