import React from "react";

function Container(props){
//   header,
//   children,
//   textPosition = "", // possible values: left, right, center
//   direction = "horizontal", // possible values: vertical, horizontal
//   contentPosition = "center", // possible values: left, right, center
// }) {
  return (
    <>
    <div className= {props.header}>{props.header}</div>
    <div className= {props.children}>{props.children} </div>
    </>
  );
}

export default Container;
