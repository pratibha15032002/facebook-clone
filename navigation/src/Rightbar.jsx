
 import React from 'react'
 import './Rightbar.css'

 function Rightbar() {
   
    return (
      <div>
            <div className="rightBar">
                <div className="wightwapper">
                    <div className="birthdayContainer">
                        <img src='src\assets\Rohit.jpg' alt='rohit' className='birthdayImg' />
                        <span className='birthdayText'><b>Rohit  </b>and<b>  2 other friends </b>&nbsp;have a birthday today</span>
                    </div>
                    <img src='src\assets\Rjat.png' alt='rajat' className='rightbarAd' />
                    <h4 className='rightbarTitle'>Online Friend</h4>
                    <ul className="friendlist">
                        <li className="rightbarfriend">
                            <div className="rightbarProfileImgContainer">
                                 <img src="src\assets\Hardik.png" alt="Hardik" className='rightbarProfileImg' />
                                 <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUsername">Hardik</span>
                        </li>
                         <li className="rightbarfriend">
                             <div className="rightbarProfileImgContainer">
                                 <img src="src\assets\Rjat.png" alt="rajat" className='rightbarProfileImg' />
                                 <span className="rightbarOnline"></span>
                            </div>
                           <span className="rightbarUsername">Rajat</span>
                     </li>
                         <li className="rightbarfriend">
                             <div className="rightbarProfileImgContainer">
                                 <img src="src\assets\rahul.avif" alt="rahul" className='rightbarProfileImg' />
                                 <span className="rightbarOnline"></span>
                             </div>                             <span className="rightbarUsername">Rahul</span>
                        </li>                    </ul>
                 </div>
           </div>
        </div>
     )
 }
 export default Rightbar;


