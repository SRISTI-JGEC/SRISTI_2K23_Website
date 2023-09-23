"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="bg-white p-8 rounded-lg shadow-md flex flex-col"
      >
        <label> First Name</label>
        <input {...register('firstName')} className="mb-4 p-2 border" />
        <label> Last Name</label>
        <input
          {...register('lastName', { required: true })}
          className="mb-4 p-2 border"
        />
        <label> Age</label>
        {errors.lastName && <p className="text-red-500">Last name is required.</p>}
        <input
          {...register('age', { pattern: /\d+/ })}
          className="mb-4 p-2 border"
        />
        {errors.age && (
          <p className="text-red-500">Please enter a number for age.</p>
        )}
        <input type="submit" className="bg-blue-500 text-white p-2 rounded" />
      </form>
    </div>
  );
};

export default Page;
