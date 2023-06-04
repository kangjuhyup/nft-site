'use client';

import HeaderController from "@/components/view_controller/header";
import MenuButton from "./menu/button";
import Drawer from "./menu/drawer";

const headerStyles = {
    backgroundColor: '#333',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
  };

  const titleStyles = {
    fontSize: '24px',
    margin: '0',
  };



const Header = () => {
    const { toggle, isOpend} = HeaderController();
    return (
        <div style={headerStyles}>
            <h1 style={titleStyles}>RIVER KANG NFT-SITE</h1>
            <MenuButton clickEvent={toggle}/>
            <Drawer isOpend={isOpend} clickEvent={toggle}/>
        </div>
    )
}

export default Header;
