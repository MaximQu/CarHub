'use client';

import { FC } from 'react';
import { CustomBtnProps } from '@types';
import Image from 'next/image';

const CustomBtn: FC<CustomBtnProps> = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="Right icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
