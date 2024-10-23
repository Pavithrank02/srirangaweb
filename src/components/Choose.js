import React from 'react';
import { HoverBorderGradientDemo } from './Button';

const Choose = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full p-4 md:p-8'>
      <div className='flex justify-center w-full'>
        <h2 className='text-black font-bold text-2xl md:text-3xl from-neutral-500 to-slate-500'>
          Choose <span className="text-yellow-600">Sri Ranga Laser</span>
        </h2>
      </div>

      <div className="text-lg md:text-xl text-justify font-semibold flex flex-col justify-center items-center mt-6">
        <p className="flex  w-full md:w-10/12 text-justify">
          Sri Ranga Laser custom sheet metal parts in Tamil Nadu are reliable and top-quality. Read our blog to learn more about trends or submit a contact form for a free quote. <br />
          You can also call us at +91 97904 84558.
          <br /><br />
          All of our fabricated metal products are made in India.
          <br /><br />
          #carbonsteel #fabrication #sheetfabrication
        </p>
        <div className="flex items-center mt-6">
          <HoverBorderGradientDemo />
        </div>
      </div>
    </div>
  );
}

export default Choose;
