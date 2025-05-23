import React, { useState } from 'react';
import { motion } from 'framer-motion';
//
const TwoColumnTable = () => {
  const [data, setData] = useState({
    'Basic Information': '-',
    'Nature of Business': 'Manufacturer',
    'Company CEO': 'Pragadeesh Ranga Laser',
    'Total Number of Employees': 'Upto 10 People',
    'Year of Establishment': '2022',
    'Legal Status of Firm': 'Partnership Firm',
    'Annual Turnover': 'Upto Rs. 50 Lakh',
    'Statutory Profile': '-',
    'Banker': 'HDFC Bank',
    'GST No.': '33AEXFS5956G1ZB',
  });

  const tableVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-full bg-gray-100 p-4">
      <h1 className='text-2xl font-extrabold mb-4 text-center'>Fact Sheet</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={tableVariants}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl"
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-4 p-4">
          {/* Left Column (Head) */}
          <div className="flex flex-col gap-2 sm:gap-4">
            {Object.keys(data).map((key) => (
              <motion.div
                key={key}
                className="font-bold text-sm sm:text-lg text-gray-800"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                {key}
              </motion.div>
            ))}
          </div >

          {/* Right Column (Body) */}
          <div className="flex flex-col gap-2 sm:gap-4">
            {Object.values(data).map((value, index) => (
              <motion.div
                key={index}
                className="text-sm sm:text-lg text-gray-600"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                {value}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TwoColumnTable;
