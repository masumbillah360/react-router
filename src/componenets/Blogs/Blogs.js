import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const posts = useLoaderData()
    return (
        <div className=''>
            <h1>All Posts Are Here.. ({posts.length})</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map(post=> <Blog key={post.id} post={post}></Blog> )
                }
            </div>

        </div>
    );
};

export default Blogs;