import React, {useEffect} from "react";
import { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'
import '../pages/css/lookbook.css'



function LookBook ({collections}) {
    const [showheight, setShowHeight] = useState(0);

    useEffect(() => {
        

        window.top.document.title = "5 Star Nail Spa | Look Book"
        window.addEventListener("scroll", () => {
            const winheight = window.scrollY;
            setShowHeight(winheight);
        });
    },[]);
    
    return (
        <div onLoad={()=>{window.scrollTo(0, 0)}} className="lb">
            <div className="lb-body">
                <p style={{width:"100%", textAlign:'center'}}>
                    Pick a collection
                </p>
                <button style={{opacity: showheight > 900 ? '1' : '0',marginRight: showheight > 900 ? '0px' : '-60px'}} className="button-up" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    <i className="fa-solid fa-caret-up"></i>
                </button>
                <ul className="collection-ul">
                    {collections.map((collection) => (
                    <li key={collection.id}>
                        <NavLink to={collection.id}>
                            {collection.collectionName}
                        </NavLink>
                    </li>
                    ))}
                </ul>
                <Outlet/>

            </div>
        </div>
    )
}

export default LookBook;