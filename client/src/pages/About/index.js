import React, {useState} from "react";
import Header from "../../components/Header";
import './about.css'


const About = ({setModal}) => {
    setModal(false);
    return(
        <>
        <Header/>        
        <div className="about-container">
        <div className="col-12 col-lg-7 about-section">
            <p>
                <span className="about-emphasis hi">Hi!</span> <br></br> I am <span className="about-emphasis">Shelly
                    Kamadulski</span>, owner of Lilith Photography <br></br><br></br>
                &emsp;My love for photography began when my daughter was born in 1993 because I wanted to preserve every
                moment of her little life. Since then, I've become a bit obsessed with photography. I purchased my first
                professional camera in 2010 while studying Art at SWIC and knew that I wanted to capture those little
                details for other mothers. In 2016, I earned my Bachelor's of Fine Arts in Photography from SIUE and
                opened my studio in Granite City, IL. Now, I am honored to be able to also capture those special moments
                for you and your family.
            </p>
        </div>
        <div className="col-12 col-lg-5 about-section"><img src='/photos/about/ShellySunflower' /></div> 
        <div className="col-12"><hr></hr></div>   
               
        <div className="col-12 col-lg-7 order-lg-12 about-section">
            <p>
                <span className="about-section-banner">
                    I want to be there!
                </span><br></br>&emsp;My heart is in photographing relationships. The relationship between a mother and
                child, the love of a husband and wife, and the bonds between the entire family. That look of beaming
                happiness while holding your newborn, <b>I want to be there.</b> The exhilaration and joy when your baby
                is experiencing new milestones, <b>I want to be there.</b> As your children grow and explore the world,
                <b>I want to be there</b> to capture those remarkable moments with you!
            </p>
        </div>
        <div className="col-12 col-lg-5 order-lg-1 about-section"><img src='/photos/about/Family' /></div>
        <div className="col-12">
            <p className="mt-5"><hr></hr></p>
        </div>
        <div className="about-section art-images col-12">
            <div className="col-4 art-img"><img src="/photos/about/Clouds" /></div>
            <div className="col-4 art-img"><img src="/photos/about/Frog" /></div>
            <div className="col-4 art-img"><img src="/photos/about/Hands" /></div>
        </div>
        <div className="col-12 about-section">
            <p>
                <span className="about-section-banner">
                    Art you can enjoy every day!
                </span><br></br>&emsp;I would love the chance to meet your family and make some art together. I look forward
                to meeting with you and learning how I can help you fulfill your vision. Whether you are welcoming a new
                baby or documenting the growth of your child, I know how incredibly important these images are as the
                moments are so fleeting. Your session will be precisely tailored to create beautiful images that you'll
                love now and forever!
            </p>            
        </div>
        </div>
        </>
    )
}

export default About;