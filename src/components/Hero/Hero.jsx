import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-img.png'

function Hero() {

    const handleDownloadResume = () => {
        const fileId = "1ibnv1RNSo0JEk5vb013F_ZO8cGeUwAVt"; 
        const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`; // Direct download URL
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Resume_Of_Mehedi_Hassan.pdf"; // Set the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    return (
        <div className="container hero text-start" id="hero">
            {/* Hero Section content */}
            <div className='hero-content flex flex-col-reverse md:flex-row justify-between'>

            <div className="hero-left text-center md:text-left w-full md:w-[60%] lg:w-[50%] ">
                <h1 className='uppercase text-2xl md:text-3xl lg:text-4xl text-start mb-4 lg:mb-12'>Frontend Developer</h1>
                <p className='text-xl md:text-2xl text-start mb-4 md:mb-8'>I am <strong>Mehedi Hassan</strong>, a frontend web developer.Web development is my passion.</p>
                <div className='flex gap-8 mb-4 md:mb-8 justify-center md:justify-start'>
                    <div><Link to="https://www.facebook.com/md.mehedi.hasan.nagor" target='_blank'><FaFacebook /></Link></div>
                    <div><Link to="https://www.linkedin.com/in/developernagor" target='_blank'><FaLinkedin /></Link></div>
                    <div><Link to="" target='_blank'><FaTwitter /></Link></div>
                    <div><Link to="https://github.com/developernagor" target='_blank'><FaGithub /></Link></div>
                </div>
                {/* <Link to="https://docs.google.com/document/d/1Br72ned1cEyTD7DhPXFSqZqnT1dv4y_WMSA5dOBOEVo/edit?usp=sharing" target='_blanc'> */}
                <button className='btn btn-outline' onClick={handleDownloadResume}>Download Resume</button>
                {/* </Link> */}
            </div>

            <div className="hero-right w-full  md:w-[40%] lg:w-[50%]">
                <img src={heroImage} alt="" />
            </div>

            </div>
        </div>
    );
}

export default Hero;