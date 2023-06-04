'use client';



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
        <button onClick={props.clickEvent}>X</button>
        <p>Home</p>
        <p>NFT Mint</p>
        <p>ERC20 Mint</p>
        <p>Bridge</p>
        <p>Swap</p>
        <p>Market Place</p>
      </div>
  );
};

export default Drawer;
