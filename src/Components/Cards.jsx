// import React from "react";

import Card from "./Card";

function Cards({ users, handleRemoveCard }) {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
      {users.map((item, index) => {
        return (
          <Card key={index} index={index} user={item} handleRemoveCard={handleRemoveCard} />
        );
      })}
    </div>
  );
}

export default Cards;
