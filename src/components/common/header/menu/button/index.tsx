
const menuButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
};
  
const MenuButton = (props: { clickEvent : () => void }) => {


    return (
        <button style={menuButtonStyles} onClick={props.clickEvent}>☰</button>
    )
}

export default MenuButton;