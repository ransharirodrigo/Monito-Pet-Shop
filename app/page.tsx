"use client"

import { useState } from "react";
import { CustomButton, NavBar, PetDetailsCard, OurProductCard, PetKnowledgeCard, Footer, Logo } from "@/components";


export default function Home() {

  const [PetDetailsCardData, setPetDetailsCardData] = useState([
    {
      "imgPath": "/PetImages/image1.svg",
      "heading": "MO231 - Pomeranian White",
      "gender": "Male",
      "age": "02 months",
      "price": "6.900.000 VND"
    },
    {
      "imgPath": "/PetImages/image2.svg",
      "heading": "MO502 - Poodle Tiny Yellow",
      "gender": "Female",
      "age": "02 months",
      "price": "3.900.000 VND"
    },
    {
      "imgPath": "/PetImages/image3.svg",
      "heading": "MO102 - Poodle Tiny Sepia",
      "gender": "Male",
      "age": "02 months",
      "price": "4.000.000 VND"
    },
    {
      "imgPath": "/PetImages/image4.svg",
      "heading": "MO512 - Alaskan Malamute Grey",
      "gender": "Male",
      "age": "02 months",
      "price": "38.900.000 VND"
    },
    {
      "imgPath": "/PetImages/image1.svg",
      "heading": "MO231 - Pomeranian White",
      "gender": "Male",
      "age": "02 months",
      "price": "6.900.000 VND"
    },
    {
      "imgPath": "/PetImages/image2.svg",
      "heading": "MO502 - Poodle Tiny Yellow",
      "gender": "Female",
      "age": "02 months",
      "price": "3.900.000 VND"
    },
    {
      "imgPath": "/PetImages/image3.svg",
      "heading": "MO102 - Poodle Tiny Sepia",
      "gender": "Male",
      "age": "02 months",
      "price": "4.000.000 VND"
    },
    {
      "imgPath": "/PetImages/image4.svg",
      "heading": "MO512 - Alaskan Malamute Grey",
      "gender": "Male",
      "age": "02 months",
      "price": "38.900.000 VND"
    },
  ]);

  const [OurProductData, setOurProductData] = useState([
    {
      "imgPath": "/ProductImages/image1.svg",
      "heading": "Reflex Plus Adult Cat Food Salmon",
      "product": "Dog Food",
      "size": "385gm",
      "price": "140.000 VND"
    },
    {
      "imgPath": "/ProductImages/image2.svg",
      "heading": "Reflex Plus Adult Cat Food Salmon",
      "product": "Cat Food",
      "size": "1.5kg",
      "price": "165.000 VND"
    },
    {
      "imgPath": "/ProductImages/image3.svg",
      "heading": "Cat scratching ball toy kitten sisal rope ball",
      "product": "Toy",
      "size": "1.5kg",
      "price": "1.100.000 VND"
    },
    {
      "imgPath": "/ProductImages/image4.svg",
      "heading": "Cute Pet Cat Warm Nest",
      "product": "Toy",
      "size": "1.5kg",
      "price": "410.000 VND"
    },
    {
      "imgPath": "/ProductImages/image1.svg",
      "heading": "Reflex Plus Adult Cat Food Salmon",
      "product": "Dog Food",
      "size": "385gm",
      "price": "140.000 VND"
    },
    {
      "imgPath": "/ProductImages/image2.svg",
      "heading": "Reflex Plus Adult Cat Food Salmon",
      "product": "Cat Food",
      "size": "1.5kg",
      "price": "165.000 VND"
    },
    {
      "imgPath": "/ProductImages/image3.svg",
      "heading": "Cat scratching ball toy kitten sisal rope ball",
      "product": "Toy",
      "size": "1.5kg",
      "price": "1.100.000 VND"
    },
    {
      "imgPath": "/ProductImages/image4.svg",
      "heading": "Cute Pet Cat Warm Nest",
      "product": "Toy",
      "size": "1.5kg",
      "price": "410.000 VND"
    },
  ]);

  const [PetKnowledgeCardData, setPetKnowledgeCardData] = useState([
    {
      "imgPath": "/PetKnowledge/image1.svg",
      "heading": "What is a Pomeranian? How to Identify Pomeranian Dogs",
      "description": "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",

    },
    {
      "imgPath": "/PetKnowledge/image2.svg",
      "heading": "Dog Diet You Need To Know",
      "description": "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",

    },
    {
      "imgPath": "/PetKnowledge/image3.svg",
      "heading": "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      "description": "Dog bites are common during development.However, no one wants to see their furniture or important items being bitten by a dog.",

    },
  ]);

  return (

    <main className="relative bg-[#FFFFFF]">
      {/* <div className=" w-[635px] h-[635px] absolute top-[-580px] left-[-210.33px] bg-red-600 rounded-[99px] rotate-[30deg]">

      </div> */}

      <div className="w-full rounded-t-none rounded-b-[40px] bg-gradient-to-r from-[#FCEED5] via-[#FFE7BA] to-[#FCEED5] px-4  pt-4 flex flex-col items-center">


        <div className="w-full 2xl:w-11/12  ">
          {/* Navigation bar */}
          <div className="w-full  flex flex-row justify-between xl:gap-12 2xl:w-11/12">
            <div className="xl:hidden">
              <img src="/menuIcon.svg" />
            </div>

            {/* Logo */}
            <div>
              <Logo />
            </div>

            <div className="xl:hidden">
              <img src="/searchIcon.svg" />
            </div>

            <NavBar />
          </div>

          {/* Home page hero banner details and image */}
          <div className="w-full mt-10 flex flex-col  lg:flex lg:flex-row 2xl:w-11/12  ">

            {/* Details */}
            <div className="flex flex-col gap-y-6 items-center lg:w-2/4 xl:items-end pt-7">

              {/* Heading div*/}
              <div className="w-full  sm:flex flex-col items-center lg:items-start xl:w-11/12">
                <p className="font-extrabold text-[#002A48] text-[46px] sm:text-6xl ">One more friend</p>
                <p className="font-bold text-[28px]  text-[#002A48] sm:text-[46px]">Thousands more fun!</p>

              </div>

              {/*  Paragraph div*/}
              <div className="w-full sm:flex items-center justify-center sm:text-center lg:justify-start lg:text-start xl:w-11/12">
                <p className="text-xs	font-medium sm:w-3/4">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                  We have 200+ different pets that can meet your needs!</p>
              </div>

              {/* Button div */}
              <div className="w-full flex gap-x-5 flex-row sm:justify-center  lg:justify-start xl:w-11/12">
                <CustomButton title="View Intro" containerStyles="w-[161px] h-12 rounded-[57px] border-[#003459] border-[1.5px] text-[#003459]" />
                <CustomButton title="Explore Now" containerStyles="w-[163px] h-12 rounded-[57px] border-[#003459] border-[1.5px] text-[#FDFDFD] bg-[#003459]" />
              </div>

            </div>

            {/* Image */}
            <div className=" w-full  flex justify-center lg:w-2/4">
              <img src="/woman_holds_pet.svg" />
            </div>
          </div>
        </div>


      </div>

      {/* Pet details section heading */}
      <div className="px-4 flex justify-center mt-10">
        <div className="w-full 2xl:w-11/12 flex ">

          {/* heading */}
          <div className="w-9/12">
            <p className="text-black text-base font-medium">Whats new?</p>
            <p className="text-[#003459] text-2xl font-bold">Take a look at some of our pets</p>
          </div>

          {/* Button */}
          <div className="hidden xl:w-3/12 xl:flex items-end justify-end">
            <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-[151px] h-11" />
          </div>
        </div>
      </div>

      {/* Pet Details cards */}
      <div className="px-4 flex justify-center mt-3">
        <div className="w-full grid grid-cols-2  place-items-center 
                        grid-rows-4 md:grid md:gap-2 md:grid-cols-4 md:grid-rows-2
                        2xl:w-11/12 mt-5 ">
          {PetDetailsCardData.map((card, index) => (
            <PetDetailsCard
              imgPath={card.imgPath}
              heading={card.heading}
              gender={card.gender}
              age={card.age}
              price={card.price}
            />
          ))}
        </div>
      </div>

      {/*View more Button */}
      <div className="px-4 flex justify-center mt-3">
        <div className="w-full md:w-2/4  xl:hidden">
          <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-full h-11" />
        </div>
      </div>

      {/* puppy-raising-by-girl and description */}
      <div className="px-4 flex justify-center mt-3">
        <div className="w-full px-4 py-4 2xl:w-11/12 grid grid-rows-2 grid-cols-1 bg-[#003459] rounded-[20px] xl:grid-rows-1 xl:grid-cols-2 xl:items-center">

          {/* Image */}
          <div className="hidden xl:block">
            <img src="/puppy-raising-by-girl.svg" />
          </div>

          {/* Descriptions */}
          <div className="">
            {/* Paragraphs */}
            <div className="flex flex-col items-center gap-y-3 xl:items-end xl:pr-7">
              <p className="text-4xl font-extrabold xl:text-[52px]">One more friend</p>
              <p className="text-2xl xl:text-4xl font-bold">Thousands more fun!</p>
              <p className="text-xs font-medium w-10/12 text-center md:w-7/12 xl:text-end">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-x-7 xl:justify-end mt-2 md:mt-4">
              <div className="w-[161px]">
                <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-full h-11" />
              </div>
              <div className="w-[161px]">
                <CustomButton title="Explore Now" containerStyles="w-[163px] h-12 rounded-[57px] border-[#003459] border-[1.5px] text-[#FDFDFD] bg-[#003459]" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center xl:hidden">
            <img src="/puppy-raising-by-girl.svg" className="w-3/4" />
          </div>

        </div>
      </div>

      {/* Our Products section*/}
      <div className="hidden xl:px-4 xl:flex xl:justify-center xl:mt-10">
        <div className="w-full 2xl:w-11/12 flex ">

          {/* heading */}
          <div className="w-9/12">
            <p className="text-black text-base font-medium">You already know ?Hard to choose right products for your pets?</p>
            <p className="text-[#003459] text-2xl font-bold">Our Products</p>
          </div>

          {/* Button */}
          <div className="xl:w-3/12 xl:flex items-end justify-end">
            <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-[151px] h-11" />
          </div>
        </div>
      </div>

      {/* Our Products cards */}
      <div className=" hidden px-4 xl:flex justify-center mt-10">
        <div className="w-full grid grid-cols-4 grid-rows-1 gap-2  2xl:w-11/12 mt-5 ">
          {OurProductData.map((card, index) => (
            <OurProductCard
              imgPath={card.imgPath}
              heading={card.heading}
              product={card.product}
              size={card.size}
              price={card.price}
            />
          ))}
        </div>
      </div>

      {/* Pet sellers section */}
      <div className="hidden xl:px-4 xl:flex xl:justify-center xl:mt-10">
        <div className="w-full 2xl:w-11/12 flex ">

          {/* heading */}
          <div className="w-9/12 flex flex-row items-center gap-x-5">
            <p className="text-black text-base font-medium">Proud to be part of</p>
            <p className="text-[#003459] text-2xl font-bold">Pet Sellers</p>
          </div>

          {/* Button */}
          <div className="w-3/12 flex items-end justify-end">
            <CustomButton title="View all our sellers" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-[201px] h-11" />
          </div>
        </div>
      </div>

      {/* Pet Sellers */}
      <div className="hidden xl:px-4 xl:flex xl:justify-center xl:mt-3">
        <div className="w-full 2xl:w-11/12 flex justify-between items-center">
          <div>
            <img src="/PetSellers/image1.svg" />
          </div>
          <div>
            <img src="/PetSellers/image2.svg" />
          </div>
          <div>
            <img src="/PetSellers/image3.svg" />
          </div>
          <div>
            <img src="/PetSellers/image4.svg" />
          </div>
          <div>
            <img src="/PetSellers/image5.svg" />
          </div>
          <div>
            <img src="/PetSellers/image6.svg" />
          </div>
          <div>
            <img src="/PetSellers/image7.svg" />
          </div>
        </div>
      </div>

      {/* Adoption */}
      <div className="hidden xl:px-4 xl:flex xl:justify-center xl:mt-3">
        <div className="w-full 2xl:w-11/12 flex justify-between items-center">
          <div className="bg-[#FFB775] rounded-[20px] w-full h-[378px] flex flex-row">
            {/* Details div */}
            <div className="w-3/6 flex flex-col items-end justify-center gap-y-1">
              <div className="w-3/4 flex flex-row gap-x-3">
                <p className="font-extrabold text-[52px] text-[#003459]">Adoption</p>
                <img src="/PetPawIcon.svg" />
              </div>
              <div className="w-3/4">
                <p className="font-bold	text-4xl	text-[#003459]">We need help. so do they.</p>
              </div>
              <div className="w-3/4">
                <p className="font-medium	text-xs	text-[#242B33] w-1/2">Adopt a pet and give it a home,
                  it will be love you back unconditionally.</p>
              </div>
              <div className="flex flex-row gap-x-5 w-3/4 mt-5">
                <CustomButton title="View all our sellers" containerStyles="bg-[#003459] text-[#FDFDFD] text-base rounded-[57px] border-[#003459] border-[1.5px] w-[180px] h-11 font-medium" />
                <CustomButton title="View all our sellers" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-[180px] h-11 font-medium" />
              </div>
            </div>
            {/* Image */}
            <div className="w-3/6">
              <img src="/HumanHoldPetHand.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Pet knowledge heading section */}
      <div className="px-4 flex justify-center mt-10">
        <div className="w-full 2xl:w-11/12 flex ">

          {/* heading */}
          <div className="w-9/12">
            <p className="text-black text-base font-medium">You already know ?</p>
            <p className="text-[#003459] text-2xl font-bold">Useful pet knowledge</p>
          </div>

          {/* Button */}
          <div className="hidden xl:w-3/12 xl:flex items-end justify-end">
            <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-[151px] h-11" />
          </div>
        </div>
      </div>

      {/* Pet knowledge cards */}
      <div className="px-4 flex justify-center mt-5">
        <div className="w-full grid grid-cols-1 grid-rows-3 md:grid md:gap-2 md:grid-cols-3 
                        md:grid-rows-1 2xl:w-11/12 mt-5 ">
          {PetKnowledgeCardData.map((card, index) => (
            <PetKnowledgeCard
              imgPath={card.imgPath}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/*View more Button */}
      <div className="px-4 flex justify-center mt-3">
        <div className="w-full md:w-2/4  xl:hidden">
          <CustomButton title="View more" containerStyles="text-[#003459] rounded-[57px] border-[#003459] border-[1.5px] w-full h-11" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-7">
        <Footer />
      </div>

    </main>
  );
}
