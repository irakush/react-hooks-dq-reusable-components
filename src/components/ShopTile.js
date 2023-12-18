import React from "react";

// Study me! What information do I require to work?
// How am I the same as InventoryTile? How am I different?

function ShopTile({ potion, stateFunc, children }) {
  return (
    <div className="card">
      <div onClick={() => stateFunc(potion.id)} className="image-wrapper">
        <img className="image" alt={potion.name} src={potion.image_url} />
      </div>
      {children}
    </div>
  );
}

export default ShopTile;
