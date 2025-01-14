import React from "react";
import Image from "next/image";
export default function ContactHero() {
  return (
    <div className="flex flex-col justify-between bg-gray-100 gap-20 " id="contact">
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center px-8 xl:py-20">
        <div className="flex flex-col xl:flex-row  xl:justify-between gap-20 xl:w-[1120px] ">
          {/* Follow Us */}
          <div className="text-center">
            <h2 className="text-2xl font-monBlack text-big">FOLLOW US</h2>
            <div className="mt-4 flex xl:flex-row gap-4 flex-col  items-center">
              <a
                href="https://www.instagram.com/kleshmongolia"
                className="bg-gradient-to-r from-red-500 to-purple-500 text-white  rounded-full flex items-center justify-center  gap-4 px-2 w-[200px] relative py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  color="#00000"
                  className=" absolute left-2"
                >
                  <path
                    d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="font-semibold text-[16px]">Kleshmongolia</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560365275473"
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full flex items-center justify-center gap-4 px-2 w-[200px] relative py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className=" absolute left-2"
                >
                  <path
                    d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-[16px] font-semibold">Klesh</span>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h2 className="text-2xl font-monBlack text-big">CONTACT US</h2>
            <div className="mt-4 text-center">
              <p>
                <strong>Address:</strong> 43-52, 19 khoroo, Bayanzurkh district,
                Ulaanbaatar, Mongolia
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:info@klesh.mn" className="text-blue-600">
                  info@klesh.mn
                </a>
              </p>
              <p>
                <strong>Phone:</strong> (+976) 7272-1115, 6011-1115
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-big w-full flex justify-center">
        <div className="text-white py-4 flex justify-center items-center flex-col gap-4 w-full xl:w-[1120px] relative">
          <div className="text-center xl:absolute right-0 text-[12px] font-monBlack">
            <p>© 2025 by Klesh. All rights reserved. Developed by Orgil O</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
