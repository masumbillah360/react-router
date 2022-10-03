import React from "react";

const User = ({ user }) => {
	const { id, name, username, email, website, phone } = user;
    const userDetails =()=>{
        console.log(id);
    }
	return (
		<div>
			<div className="bg-green-300 p-2 rounded-lg">
				<h3 className="font-bold">Name : {name}</h3>
				<h3>User Name : {username}</h3>
				<h3>Phone : {phone}</h3>
				<h3>Email : {email}</h3>
				<h3>
					Website:
					<a href={website} target="_blank" rel="noopener noreferrer">
						{website}
					</a>
				</h3>
                <button onClick={userDetails} className="btn btn-secondary btn-sm mt-4">Show Details</button>
			</div>
		</div>
	);
};

export default User;
