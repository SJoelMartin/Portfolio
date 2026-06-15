import { useState, useEffect } from "react";
import {fetchContacts} from "../services/contactService";
import { updateMessage } from "../services/contactService";
import {useSearchParams} from "react-router-dom";

function User() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        loadMessages();
    }, []);
    
    const [searchParams] = useSearchParams();
    const username = searchParams.get("username");

    const loadMessages = async () => {
        try {
            const response = await fetchContacts(username);
            setMessages(response.content);
        }
        catch(error) {
            console.log(error);
        }
    };

    const handleUpdate = (e, id) => {
    const updatedMessages = messages.map((message) =>
        message.id === id
            ? { ...message, message: e.target.value }
            : message
        );
        setMessages(updatedMessages);
    };

    const handleSave = async (message) => {
        try {
            await updateMessage(
                message.id,
                message.message
            );
            alert("Message Updated");
        } catch(error) {
            console.log(error);
            alert("Guest Users cannot update messages");
        }
    };

    return (
        <div className="user-container">
            <h1 id="user-heading" className="text-3xl font-bold text-center my-6">Welcome</h1>
            <h3 className="Username-Heading"></h3>
            <div className="max-w-6xl mx-auto px-4">
                <table id="user-table" className="w-full border border-gray-200 shadow-md rounded overflow-hidden">
                    <thead id="table-head" className="bg-gray-100">
                        <tr>
                            <th className="p-3">Message</th>
                            <th className="sort-header" className="p-3 cursor-pointer">Created Date ⬍</th>
                            <th className="sort-header" className="p-3 cursor-pointer">Updated Date ⬍</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody id="user-table-body" className="text-center">
                        {/* User messages will be rendered here */}
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td><input type="text" id={`message-${message.id}`} value={message.message} onChange={(e) => handleUpdate(e, message.id)}/></td>
                                    <td>{message.createdDate}</td>
                                    <td>{message.updatedDate}</td>
                                    <td>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={()=>handleSave(message)}>Save</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div id="pagination" className="flex justify-center items-center gap-4 mt-4">
                    <button id="prev-page-btn" className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                    <span id="pageInfo" className="font-medium"></span>
                    <button id="next-page-btn" className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Next</button>
                </div>
            </div>
        </div>
    );
}

export default User