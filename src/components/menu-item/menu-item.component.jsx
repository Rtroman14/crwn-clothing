import React from "react";
import { withRouter } from "react-router-dom"; // gives us access to history url param

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // history.push("/someUUL/linkURL")
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            className="background-image"
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            {/* <h1 className="title">props.title/h1> */}
            <span className="subtitle">SHOP Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
