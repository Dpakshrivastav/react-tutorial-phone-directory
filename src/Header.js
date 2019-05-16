import React, { Component } from 'react'
import './header.css'
const Header = function(props) {
    return (
        <div className="header">
            {props.heading}
        </div>
    )
}

// class Header extends Component{
//     render(){
//         return (
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// };

export default Header;