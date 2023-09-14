import React, { memo } from "react";
import robot from '../images/robot1.jpg'

function Header(prop) {
    return (
        <section className="header d-flex justify-content-center">
            <div className="text-center py-1" >
                <img src={robot} width={100} height={100} />
                <h1>{prop.heading}</h1>
            </div>
        </section>
    );
}
export default memo(Header);
