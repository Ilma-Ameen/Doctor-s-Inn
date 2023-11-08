import React from "react";
import { Button } from "@mui/material";
import heroimg1 from "../assests/images/hero-img01.png";
import heroimg2 from "../assests/images/hero-img02.png";
import heroimg3 from "../assests/images/hero-img03.png";
import icon01 from "../assests/images/icon01.png";
import icon02 from "../assests/images/icon02.png";
import icon03 from "../assests/images/icon03.png";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import DoctorList from "./Doctor/DoctorList";


export default function Home() {
  return (
    <>
    <section className="hero_section pt-[60px] 2xl:h-[800]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* -------hero content------- */}
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              We help Patients live a healthy, longer life.
            </h1>
            <p className="text_para">
              "Welcome to Doctor's Inn, your trusted companion for hassle-free doctor appointments. Whether you're looking for a general practitioner, a specialist, or a nearby clinic, we've got you covered. Our user-friendly platform makes it easy to find and book appointments with the best healthcare professionals in your area."
            </p>
            <button className="btn">Request an Appointment</button>
          </div>
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full "src={heroimg1} alt="" />
            </div>
            <div className="mt-[30px]">
              <img className="w-full mb-[30px] "src={heroimg2} alt="" />
              <img className="w-full "src={heroimg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text_para text-center">
            World-class care for every. Our health system offers unmatched, expert health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-p[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex itms-center justify-center">
              <img src={icon01}/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for every. Our health system offers unmatched, expert health care.
              </p>
              <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30PX] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
            <div className="flex itms-center justify-center">
              <img src={icon02}/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for every. Our health system offers unmatched, expert health care.
              </p>
              <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30PX] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
          </div>
        </div>

        <div className="py-[30px] px-5">
            <div className="flex itms-center justify-center">
              <img src={icon03}/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book an Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              World-class care for every. Our health system offers unmatched, expert health care.
              </p>
              <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30PX] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
    
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Top doctors</h2>
          <p className="text_para text-center">
            World-class care for every. Our health system offers unmatched, expert health care.
            </p>
        </div>
        <DoctorList/>
      </div>
    </section>
    </>
  );
}
