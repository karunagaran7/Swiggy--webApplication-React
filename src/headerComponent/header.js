import './header.css';
import { Link } from 'react-router-dom';
import {RxCaretDown} from 'react-icons/rx';
import {SiSwiggy} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {IoMdContacts} from 'react-icons/io';
import {IoMdHelpCircle} from 'react-icons/io';
const Header =()=>{
    return(
        <div className="header">
            <div className="logo">
                <h2 className="logo1"><SiSwiggy/></h2>
                <span><sup>Tambaram</sup><RxCaretDown/></span>
            </div>
                <div className="menu">
                    <ul className="line">
                       <Link to="/"><li><span><AiFillHome/></span>Home</li></Link> 
                       <Link to="/cart"><li><span><BsFillCartCheckFill/></span>Cart</li></Link>
                        <Link to="/contact"><li><span><IoMdContacts/></span>Contact</li></Link>
                       <Link to="/help"><li><span><IoMdHelpCircle/></span>Help</li></Link> 
                    </ul>
                </div>
        </div>
    )
}

export default Header;