// import React from 'react'

import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit((data) => handleFormSubmitData(data))}
        className="flex gap-10"
      >
        <input
          {...register("name")}
          type="text"
          className="rounded-md font-semibold text-base px-2 py-1 outline-none"
          placeholder="Name"
        />
        <input
          {...register("email")}
          type="text"
          className="rounded-md font-semibold text-base px-2 py-1 outline-none"
          placeholder="Email"
        />
        <input
          {...register("image")}
          type="text"
          className="rounded-md font-semibold text-base px-2 py-1 outline-none"
          placeholder="Image URL"
        />
        <input
          type="submit"
          value="Submit"
          className="px-5 py-1 rounded-md bg-blue-600 text-white font-semibold"
        />
      </form>
    </div>
  );
}

export default Form;
