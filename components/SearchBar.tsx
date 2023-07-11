'use client';

import React, { FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import { SearchManufacturer } from './';
import { useRouter } from 'next/navigation';

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar: FC = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchmodel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === '' && searchmodel === '') {
      return alert('Please fill in the search bar');
    }

    setModel(searchmodel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer} />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Modal icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchmodel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <SearchBtn otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
