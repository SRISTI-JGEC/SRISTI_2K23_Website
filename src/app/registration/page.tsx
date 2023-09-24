"use client"
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const memberInputs = [];

  for (let i = 2; i < 5; i++) {
    memberInputs.push(
      <div key={i}>
        <label className='mb-2 text-2xl py-2 pr-2 ' style={{ paddingTop: '10px' }}>
          Member {i} Name
        </label>
        <input
          {...register(`member${i}name`, { required: false })}
          className="mb-4 p-2 py-2  pr-2 border bg-white/50"
        />
        <label className='mb-2 text-2xl py-2 pr-2'> Member {i} Number</label>
        <input
          {...register(`member${i}number`, { required: false })}
          className="mb-4 p-2 border bg-white/50 py-2"
        />
      </div>
    );
  }


  return (
    <>
      <Image
        alt="bg"
        priority
        src="/Images/10.541378.jpg"
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="w-full   bg-no-repeat bg-cover flex justify-center">
        <div className='mt-40 '>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="bg-black/50 text-white font-griffy p-10 rounded-3xl  shadow-md flex flex-col"
          >
            <h1 className='text-4xl text-gray-100 text-center font-poppins mb-8'>Event Registration</h1>

            <label className='mb-2 text-2xl'> Team Name <span className='text-red-500 text-sm'>*</span></label>
            <input {...register('teamname')} className="mb-4 p-2 border bg-white/50" />
            {errors.teamname && <p className="text-red-500">Team Name is required.</p>}

            <label className='mb-2 text-2xl'> Event Name<span className='text-red-500 text-sm'>*</span></label>
            <input
              {...register('eventname', { required: true })}
              className="mb-4 p-2 border bg-white/50"
            />
            {errors.eventname && <p className="text-red-500">Event Name is required.</p>}
             <label className='mb-2 text-2xl'> Lead Name<span className='text-red-500 text-sm'>*</span></label>
            <input
              {...register('leadName', { required: true })}
              className="mb-4 p-2 border bg-white/50"
            />
            {errors.leadName && <p className="text-red-500">Lead Name is required.</p>}
            <label className='mb-2 text-2xl' > Lead Number<span className='text-red-500 text-sm'>*</span></label>
            <input
              {...register('leadnumber', { required: true })}
              className="mb-4 p-2 border bg-white/50"
            />
            {errors.leadnumber && <p className="text-red-500">Lead Number is required.</p>}
           {
              memberInputs
            }


            {/* <label className='mb-2 text-2xl'> Age</label>
            {errors.lastName && <p className="text-red-500">Last name is required.</p>}
            <input
              {...register('age', { pattern: /\d+/ })}
              className="mb-4 p-2 border bg-white/50"
            />
            {errors.age && (
              <p className="text-red-500">Please enter a number for age.</p>
            )} */}
            <input
              type="submit"
              className="bg-gradient-to-b from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-800
               text-white font-bold py-2 px-4 rounded-full text-lg"
              value="Submit"
            />

          </form>
        </div>
      </div>
    </>
  );
};

export default Page;


// teamName, eventName leadEmail, members [name,
//   email]