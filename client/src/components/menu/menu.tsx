
import { useState } from "react"  

import kattint from "./use-fetch";

function Menu(){

    const [isActive, setIsActive] = useState(false);
    return (
        <div className="menu">
            <div className="menu-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                Menü
            </div>
            {isActive && (
            <div className="menu-content">
                <div className="menu-item" onClick={kattint}>
                    Eladó autók listája
                </div>
                <div className="menu-item">
                    Új autó rögzítése
                </div>  
                <div className="menu-item">
                    Eladott autó törlése
                </div>              
            </div>
            )}
        </div>
        
    )
}

export default Menu;
