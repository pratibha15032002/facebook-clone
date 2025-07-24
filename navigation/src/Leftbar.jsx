
import React from 'react'
import { MdOutlineRssFeed } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import './Laftbar.css'

function Leftbar() {
    return (
        <div>
            <div className="leftbar">
                <div className="Leftbarwarapper">
                    <ul className="leftbarlist">
                        <li className="leftbarlistItem">
                            <MdOutlineRssFeed className='leftbarIcon' />
                            <span>Feed</span>
                        </li>
                        <li className="leftbarlistItem">
                            <MdOutlineChat className='leftbarIcon ' />
                            <span>Chat</span>
                        </li>
                        <li className="leftbarlistItem">
                            <MdOndemandVideo className='leftbarIcon' />
                            <span>Video</span>
                        </li>
                        <li className="leftbarlistItem">
                            <MdGroups className='leftbarIcon' />
                            <span>Groups</span>
                        </li>
                        <li className="leftbarlistItem">
                            <MdBookmarks className='leftbarIcon' />
                            <span>Bookmarks</span>
                        </li>
                        <li className="leftbarlistItem">
                            <BsFillQuestionSquareFill className='leftbarIcon' />
                            <span>Question</span>
                        </li>
                        <li className="leftbarlistItem">
                            <RiGraduationCapFill className='leftbarIcon' />
                            <span>Gradution</span>
                        </li>
                        <li className="leftbarlistItem">
                            <BiCalendarEvent className='leftbarIcon' />
                            <span>Event</span>
                        </li>
                         <li className="leftbarlistItem">
                            <FaUserGraduate  className='leftbarIcon' />
                            <span>Courses</span>
                        </li>
                    </ul>
                    <button className="leftbarButton">
                        Show More
                    </button>
                    <hr/>
                    <hr/>
                    <ul className="leftbarFriendList">
                        <li className="leftbarFriend">
                           <img src='src\assets\Rjat.png' alt='Rjat'  className='leftbarFriendImg'/>
                           <span className='leftbarFriendName'>Rajat</span>
                        </li>
                        <li className="leftbarFriend">
                           <img src='src\assets\virat img.jpg' alt='Virat'  className='leftbarFriendImg'/>
                           <span className='leftbarFriendName'>Virat</span>
                        </li>
                        <li className="leftbarFriend">
                           <img src='src\assets\rahul.avif' alt='rahul'  className='leftbarFriendImg'/>
                           <span className='leftbarFriendName'>Rahul</span>
                        </li>
                        <li className="leftbarFriend">
                           <img src='src\assets\Hardik.png' alt='Rjat'  className='leftbarFriendImg'/>
                           <span className='leftbarFriendName'>Hardik</span>
                        </li>
                         <li className="leftbarFriend">
                           <img src='src\assets\Rohit.jpg' alt='Rjat'  className='leftbarFriendImg'/>
                           <span className='leftbarFriendName'>Rohit</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Leftbar;