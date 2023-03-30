import "./HomePage.css"
import rickHomeImg from "../images/rick-home.webp"
import mortyHomeImg from "../images/Morty-home.webp"
import jerryHomeImg from "../images/jerry-home.jpeg"
import bethHomeImg from "../images/beth-home.webp"
import summerHomeImg from "../images/summer-home.webp"
import galleryImg1 from "../images/cover-pic.jpg"
import galleryImg2 from "../images/cover-pic-2.jpg"
import galleryImg3 from "../images/cover-pic-3.jpg"
import galleryImg4 from "../images/r&mHome.png"
import galleryImg5 from "../images/gallery-img.jpg"
import galleryImg6 from "../images/gallery-img-2.jpg"
import galleryImg7 from "../images/gallery-img-3.png"
import galleryImg8 from "../images/gallery-img-4.png"


import 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = () => {

return (

<div className="home-page">
    
    <nav id="home-nav-bar"> 
    
    <ul className="nav-list"> 
    
    <a href = "#"> List of Characters </a>
    <a href = "#">  Featured Episodes</a>
    <a href = "#"> Gallery </a>
    <a href = "#"> News </a>
    
    
    </ul>
    </nav>

        <h1> The Ultimate Rick and Morty Guide </h1>
        
        <h2> Featured Characters</h2>

        <div className="featured-characters-div"> 
        
        <ul className=" list-group featured-characters-list">
            <li className="list-group-item"> <img src = {rickHomeImg} alt="rick-home-img"  />Rick </li>
            <li className="list-group-item">  <img src = {mortyHomeImg} alt = "Morty-home-img"/> Morty </li>
            <li className="list-group-item"> <img src = {jerryHomeImg} alt = "jerry-home-img" />  Jerry Smith </li>
            <li className="list-group-item"> <img src = {bethHomeImg} alt = "beth-home-img"/> Beth Smith </li>
            <li className="list-group-item"> <img src = {summerHomeImg} alt = "summer-home-img"/> Summer Smith </li>
        </ul>

        </div>
        <h2> Welcome to the world of Rick and Morty </h2>
        <div className="about-home">
       
        <p>Are you new to Rick and Morty? No worries! We're here to introduce you to this fantastic animated sitcom. Created by Justin Roiland and Dan Harmon, Rick and Morty takes you on a thrilling adventure through space and alternate dimensions, as you follow the misadventures of mad scientist Rick Sanchez and his good-hearted, yet easily influenced, grandson Morty Smith.</p>
        <p>Combining humor, science fiction, and deep philosophical themes, Rick and Morty has captivated audiences worldwide and garnered a passionate fan-base. So buckle up and get ready to explore the many bizarre and hilarious worlds of Rick and Morty!</p>

        </div>

        <h2> Embark on a Visual Adventure: Rick and Morty Gallery Awaits! </h2>

        <div className="gallery-home"> 

       
       <img src = {galleryImg1} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg2} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg3} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg4} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg5} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg6} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg7} alt = "rick-and-morty-epsode" />
       <img src = {galleryImg8} alt = "rick-and-morty-epsode" />

        </div>

        <button className="back-top-btn"> <a href="#home-nav-bar">Back to the Top</a>  </button>
</div>

)


}

export default HomePage;