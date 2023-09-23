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
    <>
      <div className="w-full   bg-no-repeat bg-cover flex justify-center items-center h-screen bg-[url('/Images/10.541378.jpg')]">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="bg-black/50 text-white font-griffy p-8 rounded-lg shadow-md flex flex-col"
        >
          <label className='mb-2'> First Name</label>
          <input {...register('firstName')} className="mb-4 p-2 border bg-white/50" />
          <label className='mb-2'> Last Name</label>
          <input
            {...register('lastName', { required: true })}
            className="mb-4 p-2 border bg-white/50"
          />
          <label className='mb-2'> Age</label>
          {errors.lastName && <p className="text-red-500">Last name is required.</p>}
          <input
            {...register('age', { pattern: /\d+/ })}
            className="mb-4 p-2 border bg-white/50"
          />
          {errors.age && (
            <p className="text-red-500">Please enter a number for age.</p>
          )}
          <input type="submit" className="bg-blue-500 text-white p-2 rounded" />
        </form>
      </div>
    </>
  );
};

export default Page;
