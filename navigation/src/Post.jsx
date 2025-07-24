
import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import './Post.css'

function Postbar() {
    return (
        <div >
            <div className='post'>
                <div className="postWappwr">
                    <div className="postTop">
                        <div className="postLeft">
                            <img src='src\assets\virat img.jpg' alt='Virat' className='postPorafilImg' />
                            <span className='postUserName'>Virat</span>
                            <span className='pstTime'>10 mis ago</span>
                        </div>
                        <div className="PostTopRight">
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    <div className="pstCenter">
                        <span className='postText'>
                            The only thing we have is this moment
                        </span>
                        <img src='src\assets\virat img.jpg' className='postImag'/>
                    </div>
                    <div className="postBottom">
                        <div className="postBottonLeft">
                            <img src='src\assets\like.png' alt='like' className='likeIcon'/>
                            <img src='src\assets\heart.png' alt='like' className='heartIcon'/>
                        </div>
                        <span className='postLinkeCounter'>
                            76543211980 pepole like</span>
                    </div>
                    <div className="postbuttonRight">
                        <span className="postCommentCounrt">
                            789 comment
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Postbar;