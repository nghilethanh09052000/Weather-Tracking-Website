import { BsArrowsFullscreen } from "@react-icons/all-files/bs/BsArrowsFullscreen";
import { useState, memo } from "react";

const Button = () => {
    const [fullscreen , setFullScreen] = useState(false);
    console.log(fullscreen)
    const handleFullscreen = () =>{
        if(!fullscreen){
            setFullScreen(true);
            const e = document.documentElement;
            e.requestFullscreen();
        }else{
            setFullScreen(false);
            if(!document.exitFullscreen()){
                document.exitFullscreen()
            }
        }
        
    }
    return ( 
        <div className="fullscreen">
            <BsArrowsFullscreen
                className="fullscreenButton"
                onClick={handleFullscreen}
            />
        </div> 
    );
}
 
export default memo(Button);