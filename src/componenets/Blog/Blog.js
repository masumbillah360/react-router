import React from "react";

const Blog = ({ post }) => {
	const { id, userId, title, body } = post;
	return (
		<div
			data-aos="flip-up"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
			className="border bg-green-200 rounded-lg text-justify p-4"
		>
			<h1>id : {id}</h1>
			<h1>user id : {userId}</h1>
			<h1>Title : {title}</h1>
			<h1>Post : {body}</h1>
		</div>
	);
};

export default Blog;
