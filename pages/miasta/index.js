import React, { useEffect, useState } from "react";
import Pakiety from "@layouts/partials/Pakiety";
import Posts from "@layouts/partials/Posts";
import Image from "next/image";
import img from '../../public/images/posts/wizja.jpg'
const Header = () => {

  return (
    <>
    
    <div className='row space-y-16 mb-16'>
        <div className="col-12 sm:col-6 mb-16">

            <Image
              className="rounded-lg"
              src={img}
              alt='siema'
              width="925"
              height="475" 
              priority='true'
            />
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text"></ul>
          <h3 className="mb-2">
              Witam was
          </h3>
          <p className="text-text">
          Witam was
          </p>
        </div>
    </div>

</>
  );
};

export default Header;
