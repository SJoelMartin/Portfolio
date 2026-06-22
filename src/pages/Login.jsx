import { Link } from "react-router-dom";
import { useState } from "react";
import {loginUser} from "../services/authService";
import { useNavigate } from "react-router-dom";
import {setTokens} from "../services/tokenService";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        // Add your login logic here
        try {
            const response = await loginUser(formData);
            console.log(response.data);
            // Save JWT Token
            const { accessToken, refreshToken } = response.data;
            setTokens(accessToken, refreshToken);
            alert("Login Successful");
            if( response.data.role === "ADMIN"){
                navigate("/admin");
            }
            else{
                navigate("/user?username=" + formData.username);
            }
        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message ||
                "Invalid credentials"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Sign in to continue
                    </p>
                </div>
                <p
                    id="error-message"
                    className="text-red-500 text-center mb-4"
                ></p>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-sm text-gray-400">
                        OR
                    </span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">
                        Don't have an account?
                    </p>
                    <Link
                        to="/register"
                        className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-semibold transition"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login