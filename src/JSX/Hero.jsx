import React, { useState } from 'react'
import '../CSS/Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios
 from 'axios';
function Hero() {
    const [isBlogFormVisible, setBlogFormVisible] = useState(false);

  const [user_id, setAuther] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage] = useState('');

  

    const handleCard = async (e) => {
     
    
        
          const response = await axios.post('http://localhost:3000/blog/addblog', {
            user_id,
            title,
            description,
            image_url
          });

      };
  const changeStateOfBlog = () => {
    setBlogFormVisible(!isBlogFormVisible);
  };
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Tourism in Jordan
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Share with us your tourism experience in Jordan to spread what is
        positive.
      </p>
      <button 
       onClick={changeStateOfBlog}
        className= "m-20 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 btnhero"
      >
        
        Crate Card
      </button>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
      <img className='imghero'
        src="https://images.unsplash.com/photo-1547234936-74a4b1ee7f42?auto=format&fit=crop&q=80&w=1774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="mockup"
      />
    </div>
    {/* Blog Form */}
    {isBlogFormVisible && (
          <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-1 '>
            <div className='bg-gray-900 text-white mx-8 px-4 md:px-20 py-5 rounded-xl w-full max-w-lg '>
        <h1 className='font-bold text-white md:text-2xl text-center mb-4'> Blog Form </h1>

              <FontAwesomeIcon
                icon={faTimes}
                className='text-white cursor-pointer text-2xl absolute mb-4  ml-40 '
                onClick={changeStateOfBlog}
              />
              <div className='my-8 mx-4 '>
                <label htmlFor='author' className='m-2'>
                  Author
                </label>
                <input type='text' id='author'
                value={user_id}
                onChange={(e) => setAuther(e.target.value)} className='text-black w-full' required/>
              </div>
              <div className='my-8 mx-4'>
                <label htmlFor='title' className='m-2'>
                  Title
                </label>
                <input type='text' id='title'
                 value={title}
                 onChange={(e) => setTitle(e.target.value)} className='text-black w-full 'required />
              </div>
              <div className='my-8 mx-4'>
                <label htmlFor='description' className='m-2'>
                  Description
                </label>
                <input type='text' id='description' 
                value={description}
                 onChange={(e) => setDescription(e.target.value)}  className='h-14 text-black w-full'required />
              </div>
              <div className='my-8 mx-4'>
                <label htmlFor='image' className='m-2'>
                  Image
                </label>
                <input type='file' 
                value={image_url}
                 onChange={(e) => setImage(e.target.value)}
                 id='image'required />
              </div>
              <button
                type='submit'
                onSubmit={handleCard} 
                className='  border border-white text-white rounded p-2 ml-[10px]  mt-4 btnhero'
              >
                Submit
              </button>
            </div>
          </div>
        )}
  </div>
</section>

  )
}

export default Hero