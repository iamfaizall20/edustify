import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonails = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials container'>
            <img src={next_icon} className='next-button' onClick={slideForward} />
            <img src={back_icon} className='back-button' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptates earum est, esse dignissimos culpa inventore ad quasi accusamus beatae aliquam modi optio, harum doloribus!</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia enim quasi porro, numquam vero repudiandae fugit vitae impedit repellat aliquam aspernatur. Dolore, esse dolor.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia enim quasi porro, numquam vero repudiandae fugit vitae impedit repellat aliquam aspernatur. Dolore, esse dolor.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia enim quasi porro, numquam vero repudiandae fugit vitae impedit repellat aliquam aspernatur. Dolore, esse dolor.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonails
