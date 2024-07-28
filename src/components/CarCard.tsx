"use client";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    year,
    make,
    model,
    transmission,
    drive,
  } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex text-[32px] font-extrabold">
        <span className="self-start text-[13px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[13px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray ">
          <div className="flex flex-col justify-between items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              height={20}
              width={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <Image src="/tire.svg" height={20} width={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <Image src="/gas.svg" height={20} width={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View Moore"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue "
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
