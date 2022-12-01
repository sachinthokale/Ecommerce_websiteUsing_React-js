import React from 'react'
import "./Header2.css"
import MenuIcon from '@mui/icons-material/Menu';

function Header2() {
    return (
        <div className="header2">
            <div className="header2_ham">
                <a href="#">
                    <MenuIcon className='hamburgerIcon'/>
                
                </a>
            </div>
            <div className="header2_option">
                <a href="#">Best Sellers</a>
            </div>
            <div className="header2_option"><a href="#">Mobiles</a></div>
            <div className="header2_option"><a href="#">Today's Deals</a></div>
            <div className="header2_option"><a href="#">Coustmor Service</a></div>
            <div className="header2_option"><a href="#">Books</a></div>

        </div>
    )
}

export default Header2