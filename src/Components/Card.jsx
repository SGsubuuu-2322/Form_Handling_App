// import React from 'react'

function Card({ user, handleRemoveCard, index }) {
  return (
    <div className="w-52 h-full p-3 bg-zinc-100 flex flex-col items-center p-2 rounded-lg">
      <div className="image bg-zinc-200 w-[4vw] h-[4vw] rounded-full overflow-hidden">
        <img
          src={user.image}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
      <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight ">
        <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam
        sequi adipisci totam, error odio.
      </p>
      <button
        onClick={() => handleRemoveCard(index)}
        className="px-3 py-1 text-sm text-white font-semibold rounded-lg bg-red-600 mt-4"
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
