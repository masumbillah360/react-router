import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData()
    const { id, name, username, email, website, phone } = userDetails;
    const navigate = useNavigate()
    const goHome =()=>{
        navigate('/home')
    }
    return (
        <div className='flex flex-col justify-center bg-gray-300 rounded-lg p-4 mt-8'>
            <h1>Id : {id}</h1>
            <h1>Name : {name}</h1>
            <h1>User Name : {username}</h1>
            <h1>Phone : {phone}</h1>
            <h1>Email : {email}</h1>
            <h1>website : {website}</h1>
            <button onClick={goHome} className='btn btn-sm btn-primary w-1/4 mx-auto mt-4'>Go Home</button>
        </div>
    );
};

export default UserDetails;