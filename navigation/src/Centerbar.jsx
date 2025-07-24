
import React from 'react'
import Sharebar from './Share';
import Postbar from './Post';
import './Centerbar.css'


function Centerbar(){
    return(
        <div className='centerbar'>
           <div className="centerbarWapper">
            <Sharebar/>
            <Postbar/>
           </div>
        </div>
    )
}
 export default Centerbar;