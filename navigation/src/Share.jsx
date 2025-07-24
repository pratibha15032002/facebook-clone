
import React from 'react'
import { HiMiniPhoto } from "react-icons/hi2";
import { AiOutlineTag } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import './Share.css'


function Sharebar() {
    var style1 = { color: "blue" }
    var style2 = { color: "red" }
    var style3 = { color: "green" }
    var style4 = { color: "yellow" }


    return (
        <div>
            <div className="share">
                <div className="sharewapper">
                    <div className="sharetop">
                      <img src='src\assets\virat img.jpg' className='shareProfileImg'/>
                      <input placeholder="What's on Your mind" className='shareInput'/>
                    </div>
                    <hr className='shareHr'/>
                    <div className="shareButton1">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <HiMiniPhoto style={style2} className='shareIcon'/>
                                <span className='shareOptionText'>Photo/Video</span>
                            </div>
                            <div className="shareOption">
                                <AiOutlineTag style={style1} className='shareIcon'/>
                                <span className='shareOptionText'>Tag</span>
                            </div>
                            <div className="shareOption">
                                <FaLocationDot style={style3} className='shareIcon'/>
                                <span className='shareOptionText'>Location</span>
                            </div>
                            <div className="shareOption">
                                <MdEmojiEmotions style={style4} className='shareIcon'/>
                                <span className='shareOptionText'>Feelings</span>
                            </div>
                            <button className="shareButton">
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sharebar;