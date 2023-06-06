import { useEffect, useState } from "react";

const HeaderController = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

    useEffect(() => {
        console.log(isDrawerOpen);
    },[isDrawerOpen]);

    return {
        toggle : toggleDrawer,
        isOpend : isDrawerOpen,
    }
}

export default HeaderController;