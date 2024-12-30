'use client'; // This line makes the component a Client Component

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClass, updateClass, removeClass } from '../../app/redux/slices/classSlice';

const ClassManagement = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state) => state.classes);

    // State to hold form input values
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        class: '',
        age: '',
        marks: ''
    });

    // State to track if we are updating a class
    const [isUpdating, setIsUpdating] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission for adding/updating a class
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (isUpdating) {
            // If we are updating, dispatch the update action
            dispatch(updateClass(formData));
            setIsUpdating(false); // Reset updating state
        } else {
            // If we are adding, dispatch the add action
            dispatch(addClass({ ...formData }));
        }
        // Reset form
        setFormData({ id: '', name: '', class: '', age: '', marks: '' });
    };

    // Handle updating a class
    const handleUpdateClass = (classItem) => {
        setFormData(classItem); // Set form data to the class item to be updated
        setIsUpdating(true); // Set updating state to true
    };

    // Handle removing a class
    const handleRemoveClass = (id) => {
        dispatch(removeClass({ id })); // Dispatch the remove action
    };

    return (
        <div>
            <h1>Class Management</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Class:
                        <input
                            type="text"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Marks:
                        <input
                            type="number"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">{isUpdating ? 'Update Class' : 'Add Class'}</button>
            </form>

            <h2>Class List</h2>
            <ul>
                {classes.map((classItem) => (
                    <li key={classItem.id}>
                        {classItem.name} - Class: {classItem.class}, Age: {classItem.age}, Marks: {classItem.marks}
                        <button onClick={() => handleUpdateClass(classItem)}>Update</button>
                        <button onClick={() => handleRemoveClass(classItem.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassManagement;