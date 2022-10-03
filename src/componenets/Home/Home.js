import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Home = () => {
	const users = useLoaderData([]);
	return (
		<div>
			<h1>All User List ({users.length})</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<User key={user.id} user={user}></User>
				))}
			</div>
		</div>
	);
};

export default Home;
