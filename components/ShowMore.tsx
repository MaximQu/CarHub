'use client';

import { ShowMoreProps } from '@types';
import { FC } from 'react';
import CustomBtn from './CustomBtn';

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext, setLimit }) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomBtn
          title="Show more"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
