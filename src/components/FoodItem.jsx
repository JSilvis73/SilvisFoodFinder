// This allows for the display of the FoodItem

import React from "react";

export default function FoodItem(props) {

  return (
    <div
      onClick={() => {
        props.onDelete(props.id);
      }}
      >
      <li>{props.text}</li>
    </div>
  );
}