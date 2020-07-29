import React from 'react'
import logo from '../../img/logo.png'
const Header = () => {
    return (
        <header className='center'>
            <img style={{
                height: '150px',
                width: '400px'
            }} src={logo} alt='' />
        </header>
    )
}

export default Header
