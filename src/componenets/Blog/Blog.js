import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ post }) => {
	const { id, userId, title, body } = post;
    const navigate = useNavigate()

    const getAuthor =()=>{
        navigate(`/user/${userId}`)
    }
	return (
		<div
			data-aos="flip-up"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
			className="border bg-green-200 rounded-lg text-justify p-4 bg-jar"
		>
			<h1>id : {id}</h1>
			<h1>user id : {userId}</h1>
			<h1 className="font-bold pt-2">Title : {title}.</h1>
			<h1 className="py-3">Post : {body}.</h1>
            <button onClick={getAuthor} className="btn btn-sm btn-secondary mt-3">Get Author</button>
		</div>
	);
};

export default Blog;
