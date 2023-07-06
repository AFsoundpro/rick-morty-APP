import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className='Nav'>

            <button>
            <Link to="/home">APP</Link>
            </button>
            <button>
            <Link to="/about">ABOUT</Link>
            </button>
            <button>
            <Link to="/">LOGIN</Link>
            </button>


            <SearchBar onSearch={props.onSearch} />
            
                
            
        </nav>
    )
}