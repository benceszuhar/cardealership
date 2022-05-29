import * as React from "react"
import { useState } from "react"  

function Menu(){
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="menu">
            <div className="menu-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                Menü
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
            <div className="menu-content">
                <div className="menu-item">
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