import Link from 'next/link';

const linkStyles = {
  marginTop: '10px',
};

const buttonStyles = {
  top: '10px',
  left: '10px',
};


const Drawer = ( props : { isOpend : boolean, clickEvent : () => void }) => {



  const drawerStyles = {
    position: 'fixed',
    top: '0',
    bottom:"0",
    right: '0',
    backgroundColor: 'gray',
    padding: '20px',
    width: '200px',
    display: props.isOpend ? 'block' : 'none',
  };
  return (
      <div style={drawerStyles}>
        <button style={buttonStyles} onClick={props.clickEvent}>X</button>
        <p style={linkStyles} ><Link href={{pathname : '/'}}>Home</Link></p>
        <p style={linkStyles}><Link href={{pathname: '/mint/nft'}}>NFT Mint</Link></p>
        <p style={linkStyles}><Link href={{pathname: '/mint/erc20'}}>ERC20 Mint</Link></p>
        <p style={linkStyles}>Bridge</p>
        <p style={linkStyles}>Swap</p>
        <p style={linkStyles}>Market Place</p>
      </div>
  );
};

export default Drawer;
