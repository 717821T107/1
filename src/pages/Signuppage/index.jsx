import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const SignuppagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1314px] mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[1024px] items-center justify-start p-[38px] sm:px-5 w-[55%] md:w-full"
            style={{ backgroundImage: "url('images/img_group28.png')" }}
          >
            <div className="flex flex-col gap-[25px] justify-start mb-6 mt-4 w-[98%] md:w-full">
              <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-start w-[36%] md:w-full">
                    <Img
                      className="h-[47px]"
                      src="images/img_thumbsup_white_a700.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtMontserratExtraBold24"
                    >
                      TDL
                    </Text>
                  </div>
                  <Text
                    className="mt-11 text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratSemiBold36"
                  >
                    Welcome to TDL
                  </Text>
                  <Text
                    className="ml-2 md:ml-[0] mt-[21px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtMontserratSemiBold36"
                  >
                    Join Us Now !{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[133px] w-[79%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[682px] md:h-auto object-cover w-full"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[65px] items-center justify-start md:mt-0 mt-[168px] w-[36%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratSemiBold36Black900"
            >
              Create New Account
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-3.5 justify-start w-full">
                <Text
                  className="ml-2 md:ml-[0] text-black-900 text-lg"
                  size="txtMontserratRegular18"
                >
                  Full Name
                </Text>
                <Input
                  name="groupTwentyThree"
                  placeholder="Enter Your Full Name"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-lg w-full"
                  wrapClassName="rounded-[10px] w-full"
                  type="text"
                  color="blue_gray_100"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-3.5 justify-start mt-[27px] w-full">
                <Text
                  className="ml-2 md:ml-[0] text-black-900 text-lg"
                  size="txtMontserratRegular18"
                >
                  Email
                </Text>
                <Input
                  name="email_One"
                  placeholder="itshaghighi@yahoo.com"
                  className="leading-[normal] p-0 placeholder:text-deep_purple-300 text-left text-lg w-full"
                  wrapClassName="rounded-[10px] w-full"
                  type="email"
                  color="deep_purple_300"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-3.5 justify-start mt-[27px] w-full">
                <Text
                  className="ml-2 md:ml-[0] text-black-900 text-lg"
                  size="txtMontserratRegular18"
                >
                  Password
                </Text>
                <Input
                  name="groupTwentySeven"
                  placeholder="Enter Your Password"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-lg w-full"
                  wrapClassName="flex rounded-[10px] w-full"
                  type="password"
                  suffix={
                    <div className="mt-0.5 mb-px ml-3 sm:w-full sm:mx-0 w-[5%] bg-blue_gray-100">
                      <Img
                        className="my-auto"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  }
                  color="blue_gray_100"
                  size="md"
                ></Input>
              </div>
              <CheckBox
                className="leading-[normal] mt-10 text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="iagreewiththe"
                id="iagreewiththe"
                label="I agree with the Terms of services and Privacy Policy"
                size="xs"
              ></CheckBox>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[463px] sm:min-w-full mt-[38px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_700"
                size="lg"
                variant="fill"
              >
                Sign Up
              </Button>
              <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-between mt-[42px] w-full">
                <Input
                  name="groupTwentyFive"
                  placeholder="Login with Google"
                  className="font-semibold leading-[normal] p-0 placeholder:text-red-600 text-left text-xs w-full"
                  wrapClassName="flex sm:flex-1 sm:w-full"
                  prefix={
                    <Img
                      className="h-6 mr-[19px] my-auto"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  }
                  shape="round"
                  color="red_400_19"
                  size="xs"
                  variant="fill"
                ></Input>
                <Input
                  name="groupTwentySix"
                  placeholder="Login with Facebook"
                  className="font-semibold leading-[normal] p-0 placeholder:text-blue-A400 text-left text-xs w-full"
                  wrapClassName="flex sm:flex-1 sm:w-full"
                  prefix={
                    <div className="h-6 mr-[19px] w-6 bg-blue-A400">
                      <Img
                        className="h-6 my-auto"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                  }
                  shape="round"
                  color="indigo_400_16"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignuppagePage;
