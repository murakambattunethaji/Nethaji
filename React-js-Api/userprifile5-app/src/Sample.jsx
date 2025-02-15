import React, { useState, useEffect } from "react";

const UserProfileManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Subscriber");

    // Fetch users from API on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                const initialUsers = data.slice(0, 5).map((user) => ({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: "Subscriber",
                    metadata: { createdAt: new Date() },
                }));
                setUsers(initialUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Validate input fields
    const validateInput = (username, email) => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!usernameRegex.test(username)) {
            alert("Invalid username! Must be 3-20 characters long and contain no special characters.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Invalid email address!");
            return false;
        }

        return true;
    };

    // Add a new user
    const addUser = () => {
        if (!validateInput(username, email)) return;

        const newUser = {
            id: Date.now(),
            username,
            email,
            role,
            metadata: { createdAt: new Date() },
        };

        setUsers([...users, newUser]);
        setUsername("");
        setEmail("");
    };

    // Update user role
    const updateUserRole = (id, newRole) => {
        const updatedUsers = users.map((user) =>
            user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    // Delete a user
    const deleteUser = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    };

    return (
        <div className="bg-gray-100 font-sans min-h-screen p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">User Profile Management</h1>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
                    />
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Subscriber">Subscriber</option>
                    </select>
                    <button
                        onClick={addUser}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add User
                    </button>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">User Profiles</h2>
                    <div className="space-y-4">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="p-4 border rounded flex justify-between items-center"
                            >
                                <div>
                                    <p>
                                        <strong>Username:</strong> {user.username}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {user.email}
                                    </p>
                                    <p>
                                        <strong>Role:</strong> {user.role}
                                    </p>
                                    <p>
                                        <small>
                                            <strong>Created At:</strong>{" "}
                                            {user.metadata.createdAt.toLocaleString()}
                                        </small>
                                    </p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => updateUserRole(user.id, "Admin")}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded mb-2"
                                    >
                                        Make Admin
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileManagement;
