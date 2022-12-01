import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';



function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="/materials/AmazonLogo.png" alt="Amazon logo" />
            </Link>


            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="searchIcon" />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'} state={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello</span>
                        <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link >
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to='./checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo_basketCount'>{basket?.length}</span>
                    </div>

                </Link>

            </div>
        </div>
    )
}

export default Header