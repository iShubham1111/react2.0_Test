import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        email: '',
        phone: ''
    });

    const [submittedData, setSubmittedData] = useState([]); 
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.age || formData.age < 1) newErrors.age = "Valid age is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) newErrors.email = "Enter a valid email";

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone.match(phoneRegex)) newErrors.phone = "Phone number must be 10 digits";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem('formData', JSON.stringify([...submittedData, formData]));
            setSubmittedData([...submittedData, formData]); 
            setFormData({
                name: '',
                age: '',
                location: '',
                email: '',
                phone: ''
            });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">User Form</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Age:</label>
                    <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} />
                    {errors.age && <small className="text-danger">{errors.age}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
                    {errors.location && <small className="text-danger">{errors.location}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number:</label>
                    <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* Submitted Data List Will Appear Below */}
            {submittedData.length > 0 && (
                <div className="mt-4 p-3 border rounded bg-light">
                    <h3>Submitted Data</h3>
                    {submittedData.map((data, index) => (
                        <div key={index} className="border p-2 mb-2">
                            <p><strong>Name:</strong> {data.name}</p>
                            <p><strong>Age:</strong> {data.age}</p>
                            <p><strong>Location:</strong> {data.location}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                            <p><strong>Phone:</strong> {data.phone}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
