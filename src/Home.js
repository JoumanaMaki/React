import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = "joumana"
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])


    const [name, setName]= useState('mario');

    //const [name, setName]=useState('joumana');
    //const [age, setAge]= useState(25)
    //const handleClick=()=>{
    //   setName('JOUMANA');
    // setAge(19)
    //name ="JOUMANA"
    //console.log(name)

    {/*  const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }
    const handleClickAgain =(name, e)=>{
console.log("hello "+ name, e.target);
    }*/}

    const handleDelete = (id) =>{
         const newBlogs = blogs.filter(blog => blog.id !== id);
         setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log("use effect ran")
        console.log(blogs)
    },[]);
    return (
        <div className="home">

            <BlogList blogs={blogs} title="All Blogs"handleDelete={handleDelete} />
            <button onClick={()=>setName(`joumana`)}>change name</button>
<p>{name}</p>

          {/*   <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blog" handleDelete={handleDelete}/>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                </div>
            ))
            }

               <h2> Homepage</h2>
        <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        <button onClick={(e)=>handleClickAgain("joumana", e)}>Click me again</button>*/}


        </div>
    );
}

export default Home;