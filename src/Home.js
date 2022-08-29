const Home = () => {
    let name = "joumana"
    const handleClick=()=>{
        name ="JOUMANA"
        console.log(name)
    }
   {/*  const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }
    const handleClickAgain =(name, e)=>{
console.log("hello "+ name, e.target);
    }*/}
    return (
        <div className="home">
            <h2> Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        {/*<button onClick={(e)=>handleClickAgain("joumana", e)}>Click me again</button>*/}


        </div>
    );
}

export default Home;