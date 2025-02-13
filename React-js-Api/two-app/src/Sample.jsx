import React, { useState, useEffect } from "react";

const apiUrl = "http://localhost:5003/addressBook";

const DigitalBook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);      

  const fetchContacts = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Please provide both name and email.");
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });
      if (response.ok) {
        alert("Contact added successfully!");
        fetchContacts();
        setName("");
        setEmail("");
      } else {
        alert("Error adding contact.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const editContact = async (id, currentName, currentEmail) => {
    const updatedName = prompt("Enter updated name:", currentName);
    const updatedEmail = prompt("Enter updated email:", currentEmail);
    if (updatedName && updatedEmail) {
      try {
        const response = await fetch(`${apiUrl}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: updatedName, email: updatedEmail })
        });
        if (response.ok) {
          alert("Contact updated successfully!");
          fetchContacts();
        } else {
          alert(`Contact with ID ${id} not found.`);
        }
      } catch (error) {
        console.error("Error updating contact:", error);
      }
    } else {
      alert("Update canceled or incomplete input.");
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      if (response.ok) {
        alert("Contact deleted successfully!");
        fetchContacts();
      } else {
        alert(`Contact with ID ${id} not found.`);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Digital Book Contacts</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required className="border p-2 rounded mb-2 w-full" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required className="border p-2 rounded mb-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Contact</button>
      </form>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="py-2 px-4 border">{contact.name}</td>
              <td className="py-2 px-4 border">{contact.email}</td>
              <td className="py-2 px-4 border">
                <button onClick={() => editContact(contact.id, contact.name, contact.email)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => deleteContact(contact.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DigitalBook;
