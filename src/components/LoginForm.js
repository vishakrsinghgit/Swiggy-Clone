import React, { useState } from 'react';
import FoodImage from "../assets/img/foodApp.jpg";

const Form = ({ fields, onSubmit }) => {
    const initialState = Object.fromEntries(fields.map(field => [field.name, '']));
    const [formData, setFormData] = useState(initialState);

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
      <div className='flex h-screen w-screen'>
        <div>
          <img  alt='Food Image' src={FoodImage} className='h-full w-half'>
          
          </img>
        </div >
        <form className='w-1/2 h-screen  pl-10 pr-10 pt-28 border border-gray-300 shadow-md ' onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name} className="mb-5 mt-8">
                    <label className="block mb-5 font-bold">{field.label}:</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleFieldChange}
                        className="w-full  px-3 py-2 border border-gray-300 rounded"
                    />
                </div>
            ))}
            <button type="submit" className="w-full mt-8 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
        </div>
    );
};

export default Form;
