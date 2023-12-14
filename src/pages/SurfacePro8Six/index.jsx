import React from "react";

import { CheckBox, Img, Text } from "components";

const SurfacePro8SixPage = () => {
  return (
    <>
      <div className="bg-gradient  flex font-heebo h-[960px] justify-end mx-auto relative w-full">
        <div className="h-[1121px] md:h-[960px] mt-auto mx-auto md:px-5 w-full">
          <div className="h-[1121px] md:h-[960px] m-auto w-full">
            <div className="absolute flex inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[960px] my-auto object-cover w-[51%]"
                src="images/img_rectangle.png"
                alt="rectangle"
              />
              <div className="bg-deep_purple-50 h-[960px] ml-[-1px] my-auto w-1/2 z-[1]"></div>
            </div>
            <Img
              className="absolute h-[277px] object-cover right-[0] rotate-[-37deg] top-[0] w-[23%]"
              src="images/img_ellipse4.png"
              alt="ellipseFour"
            />
            <Img
              className="absolute bottom-[0] h-[517px] object-cover right-[0] rotate-[-37deg] w-1/4"
              src="images/img_ellipse5.png"
              alt="ellipseFive"
            />
            <div className="absolute bg-white-A700_35 flex flex-col items-start justify-start left-[11%] p-[15px] rounded-bl-[30px] rounded-tl-[30px] shadow-bs5 top-[13%]">
              <Text
                className="capitalize md:ml-[0] ml-[41px] md:text-5xl text-[70px] text-white-A700"
                size="txtHeeboBlack70"
              >
                Join Us
              </Text>
              <Text
                className="capitalize mb-[510px] md:ml-[0] ml-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtHeeboRegular25"
              >
                Let’s make your dream in reality
              </Text>
            </div>
          </div>
          <div className="absolute bg-gray-50 flex flex-col items-end justify-end p-7 sm:px-5 right-[11%] rounded-br-[30px] rounded-tr-[30px] shadow-bs6 top-[13%] w-[39%]">
            <div className="flex flex-col items-start justify-start mr-0.5 mt-[17px] w-[89%] md:w-full">
              <Text
                className="capitalize sm:text-[33px] md:text-[39px] text-[43px] text-black-900 text-center tracking-[0.86px]"
                size="txtGupterBold43"
              >
                Hello ! Welcome Back
              </Text>
              <Text
                className="capitalize mt-[15px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                size="txtHarmattanRegular35"
              >
                Email{" "}
              </Text>
              <div className="bg-gray-50_01 h-[60px] mt-1.5 shadow-bs7 w-full"></div>
              <Text
                className="capitalize mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                size="txtHarmattanRegular35"
              >
                Password
              </Text>
              <div className="bg-gray-50_01 h-[60px] mt-1.5 shadow-bs7 w-full"></div>
              <div className="flex flex-row font-heebo items-start justify-between md:ml-[0] ml-[13px] mt-[18px] w-[98%] md:w-full">
                <CheckBox
                  className="capitalize text-left text-xl"
                  inputClassName="h-[25px] mr-[5px] w-[25px]"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                  shape="round"
                  color="white_A700"
                ></CheckBox>
                <a
                  href="javascript:"
                  className="capitalize mt-1 text-[17px] text-pink-A100"
                >
                  <Text size="txtHeeboRegular17">Forgot Password?</Text>
                </a>
              </div>
              <Text
                className="bg-pink-300 capitalize justify-center ml-12 md:ml-[0] mt-8 sm:px-5 px-[35px] py-0.5 rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                size="txtHeeboBold30"
              >
                Login
              </Text>
              <Text
                className="capitalize md:ml-[0] ml-[170px] mt-[19px] text-[15px] text-black-900"
                size="txtHeadlandOneRegular15"
              >
                -OR-
              </Text>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[130px] mt-5 w-[132px]">
                <Img
                  className="h-[30px] w-[29px]"
                  src="images/img_google_black_900.svg"
                  alt="google"
                />
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_facebook_blue_a400_01.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[30px] w-[25px]"
                  src="images/img_appleiconcolour.svg"
                  alt="appleiconcolour"
                />
              </div>
              <Text
                className="capitalize md:ml-[0] ml-[7px] mt-[19px] text-black-900 text-xl"
                size="txtHeeboLight20"
              >
                <span className="text-black-900 font-heebo text-left font-light">
                  Don’t have an account?
                </span>
                <span className="md:text-[21px] sm:text-[19px] text-black-900 font-heebo text-left text-[23px] font-medium">
                  {" "}
                </span>
                <span className="md:text-[21px] sm:text-[19px] text-pink-200 font-heebo text-left text-[23px] font-medium">
                  Create Account
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[14%] h-[522px] left-[24%] object-cover w-[36%]"
          src="images/img_fundraisingfor.png"
          alt="fundraisingfor"
        />
      </div>
    </>
  );
};

export default SurfacePro8SixPage;
