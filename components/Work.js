import React from "react";
import esc from "../assets/works/1.png";
import ammc from "../assets/works/2.png";
import kyn from "../assets/works/3.png";
import nex from "../assets/works/4.png";
import ww from "../assets/works/5.png";
// import Image from "next/image";
import Button from "./Button";

export default function Work() {
  return (
    <div className="w-screen lg:py-20">
      <div className="bg-cyan lg:w-3/5 xs:w-4/5 mx-auto rounded-3xl shadow-2xl lg:p-16 xs:p-6 text-blue">
        <h2>Work</h2>
        <div className="flex justify-between w-full xs:flex-col lg:flex-row">
          <div className="text-blue font-medium">
            Clean, intuitive UIs, powered by the best of Tech.
          </div>
          <div>
            <a className="font-thin text-blue text-opacity-50 cursor-pointer hover:text-opacity-75 hover:underline ">
              Read more about my Work
            </a>
          </div>
        </div>
        <div className="flex lg:w-full items-center xs:flex-col lg:flex-row ">
          <div className="flex lg:flex-col lg:w-2/5 p-2 xs:flex-col-reverse">
            <div>
              <img alt='' src={nex} />
            </div>
            <Button text="See All" type="primary" />
          </div>
          <div className="flex lg:w-3/5 p-2 xs:flex-col lg:flex-row">
            <div className="flex lg:flex-col lg:w-1/2 p-2">
              <div className='xs:mr-5 lg:m-0'>
                <img alt='' src={ammc} />
              </div>
              <div>
                <img alt='' src={kyn} />
              </div>
            </div>
            <div className="flex lg:flex-col lg:w-1/2 p-2">
              <div className='xs:mr-5 lg:m-0'>
                <img alt='' src={esc} />
              </div>
              <div>
                <img alt='' src={ww} />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
