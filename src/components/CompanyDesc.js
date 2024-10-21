import React from 'react';
import { MapButton } from './MapButton';

const CompanyDesc = () => {
  return (
    <div className='flex flex-col justify-evenly bg-slate-200 py-8 px-4 md:px-8'>
      <div className='flex justify-center mb-6'>
        <h2 className='text-black font-bold text-2xl md:text-3xl text-center'>
          Top Custom Carbon Steel Fabricator of Central PA & Northern MD
        </h2>
      </div>
      <div className='flex justify-center'>
        <p className='text-black font-medium w-full md:w-10/12 text-justify text-base md:text-xl'>
          Proudly celebrating our 70th anniversary and strategically located in the heart of the mid-Atlantic region, APX York Sheet Metal successfully serves the continental United States, delivering top-quality steel fabricated parts, excellent customer service, and competitive pricing to our valued customers. While we’ve grown in capability and reach since our founding back in 1946, our focus on quality workmanship and delivering on our promises remains as rock-solid as ever.
          <br /><br />
          APX York Sheet Metal understands that our customers face constant pressure to deliver greater value with shorter lead-times. Through state-of-the-art fabrication equipment, advanced business processes, and drawing on our 70 years of manufacturing experience, we stand shoulder-to-shoulder with you as you rise to meet your customers' challenges.
          <br /><br />
          We know that to be successful in the competitive global marketplace, you have to deliver superior value. APX York Sheet Metal would like the opportunity to compete for your business.
          <br /><br />
          If you’re serious about procuring carbon steel fabrications, APX York Sheet Metal is your answer.
        </p>
      </div>
      <MapButton />
    </div>
  );
}

export default CompanyDesc;
