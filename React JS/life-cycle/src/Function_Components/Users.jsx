
import React, { useState } from 'react';

const RegistrationForm = () => {

    const [formData, setFormData] = useState({

        id: '',
        name: '',
        course: '',
        branch: '',
        rollno: '',
        email: '',
        username: '',
        about: '',
        password: '',

    });

    const [submissions, setsubmissions] = useState([])

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }

    const getData = () => {

        fetch("http://localhost:3000/users").then((response) => {
            return response.json()
        }).then(data => {
            // console.log(data)
            setsubmissions(data)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            getData()
        })

    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
                <h2>Registration form</h2>
                <div>
                    <label>Id:</label>
                    <input type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" name="course" value={formData.course} onChange={handleChange} />
                </div>
                <div>
                    <label>Branch:</label>
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
                </div>
                <div>
                    <label>Rollno:</label>
                    <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>About Us:</label>
                    <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Branch</th>
                        <th>Rollno</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.id}</td>
                            <td>{submission.name}</td>
                            <td>{submission.course}</td>
                            <td>{submission.branch}</td>
                            <td>{submission.rollno}</td>
                            <td>{submission.email}</td>
                            <td>{submission.username}</td>
                            <td>{submission.about}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default RegistrationForm;