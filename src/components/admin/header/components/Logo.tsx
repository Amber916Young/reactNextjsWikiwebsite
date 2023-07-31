import React from 'react'
import Image from 'next/image';
import logo from '@/src/assets/images/logo.png'


export  function Logo(){
    <div className="logo flex items-center">
        <Image src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-text">Witch Talk</h2>
    </div>
}

// export default Logo;
