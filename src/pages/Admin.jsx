import axios from "axios"
import {fetchDetails} from "../services/contactService";
import { useState, useEffect } from "react";
import {searchContacts} from "../services/contactService";

function Admin() {
    const [users, setUsers] = useState([]);

    // Show Items Based on Requirement
    const [pageSize,setPageSize] = useState(5);
    const [totalPages,setTotalPages] = useState(0);
    const [page,setPage] = useState(0);

    const handlePrevious = () => {
        if( page > 0 )
            setPage(page => page - 1);
    };

    const handleNext = () => {
        if(page < totalPages - 1 ) setPage(page => page + 1);
    }
    useEffect(() => {
        loadDetails();
    }, [page,pageSize]);

    const loadDetails = async () => {
        try {
            const data = await fetchDetails(page,pageSize);
            setUsers(data.content);
            setTotalPages(data.page.totalPages);
        } catch(error) {
            console.log(error);
        }
    };

    // Search Contacts with Status and Name
    const [searchData, setSearchData] = useState({
        status: "",
        name: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchData({
            ...searchData,
            [name]: value
        });
    };

    const fetchContacts = async (name,status) => {
        try {
            const response = await searchContacts(status,name);
            setUsers(response.content);
        } catch(error) {
            console.log(error);
        }
    };

    // Show Items Dropdown
    const [options, setOptions] = useState([]);
    const handleOptionsDropdown = () => {
        if( options.length === 0 ){
            setOptions(
                [3,5,10]
            );
        }
        else{
            setOptions([]);
        }
    };



    return (
        <div className="admin-container">
            <h1 className="text-3xl font-bold text-center my-6">Admin Page</h1>
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative inline-block mb-4" id="dropdown">
                    <button onClick={handleOptionsDropdown} id="show-items-dropdown" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Show</button>
                    {options.length > 0 && ( 
                        <div className="absolute bg-white shadow-md rounded mt-2 w-40" id="dropdown-menu">
                            <h4 className="px-3 py-2 text-black font-semibold border-b">Show up to</h4>
                            <ul id="dropdown-options">
                            {
                                options.map((option,index) => 
                                    <li className="cursor-pointer hover:bg-blue-600" key={index} onClick={() => {setPageSize(option); setOptions([]); setPage(0);}}>{option} items</li>
                                )
                            }
                            </ul>
                        </div>
                    )}
                    </div>
                <div id="search-container" className="flex gap-3 mb-4">
                    <select
                        name="status"
                        value={searchData.status}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    >
                        <option value="">ALL</option>
                        <option value="NEW">NEW</option>
                        <option value="READ">READ</option>
                        <option value="RESOLVED">RESOLVED</option>
                    </select>
                    <input name="name" type="text" id="search-name-input" value={searchData.name} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Search by name..."/>
                    <button id="search-btn" onClick={()=>fetchContacts(searchData.name,searchData.status)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Search</button>
                </div>
                <table id="contact-table" className="w-full border border-gray-200 shadow-md rounded overflow-hidden">
                    <thead id="table-head" className="bg-gray-100">
                        <tr>
                            <th  className="sort-header" className="p-3 cursor-pointer">ID ⬍</th>
                            <th className="sort-header" className="p-3 cursor-pointer">Name ⬍</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Message</th>
                            <th  className="sort-header" className="p-3 cursor-pointer">Created Date ⬍</th>
                            <th className="sort-header" className="p-3 cursor-pointer">Status ⬍</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="admin-table-body" className="text-center">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.message}</td>
                                <td>{user.createdDate}</td>
                                <td>{user.status}</td>
                                <td>
                                    <div className="status-dropdown">
                                        <button className="status-dropdown-btn" onClick="toggleDropdown(${user.id})">☰</button>
                                        <div id="status-menu-${user.id}" className="status-menu">
                                            <a className="${user.status === 'READ' ? 'active' : ''}" onClick="updateStatus(${user.id},'READ')">Read</a>
                                            <a className="${user.status === 'RESOLVED' ? 'active' : ''}" onClick="updateStatus(${user.id},'RESOLVED')">Resolve</a>
                                            <a onClick="makeAsAdmin('${user.name}')">Make Admin</a>
                                            <a onClick="deleteContact(${user.id})">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="pagination" className="flex justify-center items-center gap-4 mt-4">
                    <button id="prev-page-btn" onClick={handlePrevious} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                    <span id="pageInfo" className="font-medium">Page {page + 1} of {totalPages}</span>
                    <button id="next-page-btn" onClick={handleNext} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Admin