import React from 'react'

import Topbar from './Topbar';
import Leftbar from './Leftbar';
import Centerbar from './Centerbar';
import Rightbar from './Rightbar';
import './Home.css'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            
            <div>
                <Topbar />
            </div>
            <div className="homeContainer">
                <Leftbar />
                 <Centerbar/>
                <Rightbar/>
               
            </div>
        </div >
    )
}
export default Home;