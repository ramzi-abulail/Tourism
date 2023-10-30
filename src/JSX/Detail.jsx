import React, { useEffect, useState } from 'react';
import '../CSS/Detail.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Detial() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog/getall");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index of the last and first blog post to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-[#FE7A00]">
            <a href="#">
              <img className="rounded-t-lg h-60 w-full " src={blog.image} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black h-30">{blog.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.body}</p>
              <div>
              <Link to={`/blog/${blog.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover.bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark.bg-blue-600 dark:hover.bg-blue-700 dark:focus.ring-blue-800 btnread">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <ul className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                } px-3 py-2 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus.ring-blue-800`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detial;