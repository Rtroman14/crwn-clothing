import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    // const MenuItem = (props.title) => {
    <div
        style={{
            backgroundImage: `url(${imageUrl})`,
        }}
        className={`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title}</h1>
            {/* <h1 className="title">props.title/h1> */}
            <span className="subtitle">SHOP Now</span>
        </div>
    </div>
);

export default MenuItem;
