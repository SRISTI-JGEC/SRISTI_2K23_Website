import { formattedReviews } from '@/app/api/reviews/route'
import React from 'react'

const ReviewCard = ({ review }: { review: formattedReviews }) => {
  return (
    <div style={{ backgroundImage: "url('/Images/Untitled-2.png')", backgroundSize: 'contain' }}
      className='w-[18.5rem] h-[15.6rem]  md:w-[32.5rem] md:h-[27.5rem] ml-10 md:ml-4 lg:ml-12 text-white p-5 md:p-16 text-sm md:text-xl font-medium'>
      <i>{review.review}</i>
      <p className='w-full text-right mt-5'>~{review.name}</p>
      <p className='w-full text-right mt-1 text-sm lg:text-lg text-slate-50/75'>{review.department} , &nbsp;
        {
          review.year === "1" ? review.year + "st Year" : review.year === "2" ? review.year + "nd Year" :
            review.year === "3" ? review.year + "rd Year" : review.year + "th Year"
        }
      </p>
    </div>
  )
}

export default ReviewCard