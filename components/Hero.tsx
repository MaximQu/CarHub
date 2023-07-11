'use client';

import Image from 'next/image';
import CustomBtn from './CustomBtn';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, book , or rent a car — quickly and easily!</h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with out effortless booking process.
        </p>
        <CustomBtn
          title="Explore Card"
          btnType="button"
          containerStyles="bg-primary-blue p-3 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="Hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
