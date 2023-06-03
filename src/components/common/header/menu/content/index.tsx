'use client'

import { useState } from "react";


interface props {
    isOpen : boolean
}

const Drawer = ({isOpen} : props) => {
    const drawerStyles = {
      position: 'absolute',
      top: '100%',
      right: '0',
      backgroundColor: 'white',
      padding: '20px',
      width: '200px',
      display: isOpen ? 'block' : 'none',
    };
    return (
        <div style={drawerStyles}>
          <p>Drawer Content</p>
        </div>
    );
};
    

const Content = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <div>
        <Drawer isOpen={isDrawerOpen} />
      </div>
    );
  };
  
  export default Content;