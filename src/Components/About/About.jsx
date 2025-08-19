import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about container'>
            <div className="about-left">
                <img src={about_image} className='about-img' />
                <img src={play_icon} className='play-icon' />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tommorrow's Leaders today</h2>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maiores explicabo, accusamus, atque ratione, ad quas quod cumque accusantium tempore recusandae fuga perspiciatis similique officia corrupti error. Similique, incidunt in?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, earum?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iusto eos quibusdam esse voluptate facere sit vero? Porro, repellendus molestias.</p>
                </div>
            </div>
        </div>
    )
}

export default About
