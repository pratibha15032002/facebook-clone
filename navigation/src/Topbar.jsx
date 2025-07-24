import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import './Topbar.css'

function Topbar() {
    return (
        <div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className='logo'>Facebook</span>
                </div>
                <div className="topbarCenter">
                    <div className="serchbar">
                        <CiSearch className="searchIcon" />
                        <input type='text' className='serchInput'
                            placeholder='Search for Friends or Post' />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className='topbarLink'>Homepage</span>
                        <span className='topbarLink'>Timeline</span>
                    </div>
                    <div className="topbarIcon">
                        <div className='topbarIconItem'>
                            <IoMdPerson />
                            <span className='topbarIconBadge'>6</span>
                        </div>
                        <div className='topbarIconItem'>
                            <MdOutlineChat />
                            <span className='topbarIconBadge'>28</span>
                        </div>
                        <div className='topbarIconItem'>
                            <FaBell />
                            <span className='topbarIconBadge'>58</span>
                        </div>
                    </div>
                    <img src='src\assets\virat img.jpg' alt='virat kholi' className='topbarImg'/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
