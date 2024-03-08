// import React from 'react'

import { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveCard = (id) => {
    setUsers((prev) => prev.filter((item, index) => index !== id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={users} handleRemoveCard={handleRemoveCard} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
