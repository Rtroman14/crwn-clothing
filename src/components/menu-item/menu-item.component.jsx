import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    // const MenuItem = (props.title) => {
    <div className={`${size} menu-item`}>
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

export default MenuItem;
