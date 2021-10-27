import React from 'react'
import './Sidebar.css'
import photo from '../../assets/about.png'
import { HashLink } from 'react-router-hash-link';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={photo} alt="" className='sidebar-profile' />
            <div className="sidebar-text">
                <div className="sidebar-name">Bako Doe</div>
                <div className="sidebar-designation">Web Developer</div>
                <div className="sidebar-phone">+91-9876543210</div>
                <div className="sidebar-email">bakodoe@gmail.com</div>
            </div>
            <div className="sidebar-social-media-icons" >
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook-square text-white" style={{ fontSize: "25px", color: "white" }} ></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram text-white" style={{ fontSize: "25px", color: "white" }} ></i></a>
                <a href="https://www.twitte.com" target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter-square text-white" style={{ fontSize: "25px", color: "white" }} ></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin text-white" style={{ fontSize: "25px", color: "white" }} ></i></a>
                <a href="https://www.github.com" target="_blank" rel="noreferrer">
                    <i class="fab fa-github-square text-white" style={{ fontSize: "25px", color: "white" }}></i></a>
            </div>
            <div className="sidebar-menu-icons">
                <HashLink smooth to="#bio">
                    <div className="sidebar-items">
                        <i class="far fa-address-card"></i>
                        <span className="sidebar-text">Bio</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#experience">
                    <div className="sidebar-items">
                        <i class="fas fa-user-md"></i>
                        <span className="sidebar-text">Experience</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#works">
                    <div className="sidebar-items">
                        <i class="fas fa-briefcase"></i>
                        <span className="sidebar-text">Works</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#education">
                    <div className="sidebar-items">
                        <i class="fas fa-user-graduate"></i>
                        <span className="sidebar-text">Education</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#courses">
                    <div className="sidebar-items">
                        <i class="far fa-clone"></i>
                        <span className="sidebar-text">Courses</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#achievements">
                    <div className="sidebar-items">
                        <i class="fas fa-medal"></i>
                        <span className="sidebar-text">Achievements</span>
                    </div>
                </HashLink>
                <HashLink smooth to="#skills">
                    <div className="sidebar-items">
                        <i class="far fa-chart-bar"></i>
                        <span className="sidebar-text">Skills</span>
                    </div>
                </HashLink>
            </div>
        </div>
    )
}

export default Sidebar
