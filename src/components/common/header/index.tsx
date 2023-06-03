import MenuButton from "./menu/button";

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

    return (
        <div style={headerStyles}>
            <h1 style={titleStyles}>RIVER KANG NFT-SITE</h1>
            <MenuButton/>
        </div>
    )
}

export default Header;
