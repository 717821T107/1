import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const EXPORINGBOOKSPAGEPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[33px] w-full">
        <div className="flex flex-col gap-1.5 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1316px] mx-auto md:px-5 w-full">
            <Img
              className="h-[43px] md:mt-0 mt-2"
              src="images/img_call.svg"
              alt="call"
            />
            <div className="flex flex-col justify-start ml-1.5 md:ml-[0]">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.44px]"
                size="txtInterSemiBold22"
              >
                +91 8374902234
              </Text>
              <Text
                className="md:ml-[0] ml-[26px] mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                size="txtManualeRomanBold40"
              >
                Tizen
              </Text>
            </div>
            <div className="md:h-[49px] h-[70px] md:ml-[0] ml-[848px] md:mt-0 mt-1.5 relative w-[4%] md:w-full">
              <Img
                className="absolute h-11 left-[26%] top-[0]"
                src="images/img_facebook_white_a700.svg"
                alt="facebook"
              />
              <Img
                className="absolute bottom-[0] h-[49px] inset-x-[0] mx-auto"
                src="images/img_lock.svg"
                alt="lock"
              />
            </div>
            <Img
              className="h-[34px] md:ml-[0] ml-[21px] md:mt-0 mt-2.5"
              src="images/img_info.svg"
              alt="info"
            />
            <div className="md:h-12 h-[71px] md:ml-[0] ml-[26px] md:mt-0 mt-2.5 relative w-[5%] md:w-full">
              <Img
                className="absolute h-[34px] left-[29%] top-[0]"
                src="images/img_link.svg"
                alt="link"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </div>
            <Img
              className="h-[30px] md:ml-[0] ml-[19px] md:mt-0 mt-3"
              src="images/img_trash.svg"
              alt="trash"
            />
            <div className="md:h-[49px] h-[70px] ml-3.5 md:ml-[0] md:mt-0 mt-3 relative w-[4%] md:w-full">
              <Img
                className="absolute h-[29px] right-[0] top-[0]"
                src="images/img_television.svg"
                alt="television"
              />
              <Img
                className="absolute bottom-[0] h-[49px] inset-x-[0] mx-auto"
                src="images/img_bag.svg"
                alt="bag"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col font-inter md:px-5 relative w-full">
              <div className="flex h-[98px] justify-end mx-auto w-full">
                <Line className="bg-gray-300_01 h-0.5 mb-[45px] mt-auto mx-auto w-[92%]" />
                <div className="absolute bg-gradient1  h-[98px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <Text
                className="mt-[-10.02px] mx-auto text-indigo-800 text-xl z-[1]"
                size="txtInterMedium20"
              >
                HOME / PRODUCTS
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[507px] mt-[69px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtRobotoSlabMedium48"
            >
              {" "}
              Commercial Books
            </Text>
            <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start max-w-[1320px] mt-10 mx-auto md:px-5 w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 p-[42px] md:px-10 sm:px-5 shadow-bs4 w-[22%] md:w-full">
                <Img
                  className="h-[291px] md:h-auto mb-[7px] mt-0.5 object-cover w-[99%]"
                  src="images/img_book34.png"
                  alt="bookThirtyFour"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid md:h-[293px] h-[385px] mb-0.5 ml-14 md:ml-[0] p-[29px] sm:px-5 relative shadow-bs4 w-[22%] md:w-full">
                <div className="absolute h-[291px] inset-[0] justify-center m-auto w-[71%]">
                  <Img
                    className="h-[291px] m-auto object-cover w-full"
                    src="images/img_book54.png"
                    alt="bookFiftyFour"
                  />
                  <div className="absolute bg-indigo-800_63 h-[291px] inset-[0] justify-center m-auto w-full"></div>
                </div>
                <Button
                  className="absolute bottom-[26%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[226px] mx-auto text-base text-center tracking-[2.24px] uppercase"
                  shape="square"
                  color="red_500"
                  size="sm"
                  variant="fill"
                >
                  add to cart
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start mb-0.5 ml-14 md:ml-[0] p-[42px] md:px-10 sm:px-5 shadow-bs4 w-[22%] md:w-full">
                <Img
                  className="h-[291px] md:h-auto my-1 object-cover w-[99%]"
                  src="images/img_book34_291x200.png"
                  alt="bookThirtyFour_One"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid md:h-[293px] h-[385px] mb-0.5 md:ml-[0] ml-[57px] p-1 relative shadow-bs4 w-[22%] md:w-full">
                <Img
                  className="absolute h-[291px] inset-[0] justify-center m-auto object-cover w-[70%]"
                  src="images/img_book161.png"
                  alt="book161"
                />
                <Img
                  className="absolute h-[52px] right-[1%] top-[12%]"
                  src="images/img_thumbsup_red_500.svg"
                  alt="thumbsup"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[1244px] mt-[19px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize sm:mt-0 mt-[7px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                Simple way of piece life
              </Text>
              <Text
                className="capitalize mb-[5px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                Simple way of piece life
              </Text>
              <Text
                className="capitalize mb-[7px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                Great travel at desert
              </Text>
              <Text
                className="capitalize mb-[5px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between max-w-[1133px] mt-[5px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Sanchit Howdy
              </Text>
              <Text
                className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Armor Ramsey
              </Text>
              <Text
                className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Sanchit Howdy
              </Text>
              <Text
                className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
            </div>
            <div className="flex flex-row font-inter items-start justify-between max-w-[1127px] mt-3 mx-auto md:px-5 w-full">
              <Text
                className="capitalize mb-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 40.00
              </Text>
              <Text
                className="capitalize mt-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 40.00
              </Text>
              <Text
                className="capitalize mt-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize mt-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 45.00
              </Text>
            </div>
            <Input
              name="frameTwo"
              placeholder="See all"
              className="font-medium font-poppins leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[615px] mt-7 rounded-[3px] w-[210px]"
              suffix={
                <div className="mt-[17px] mb-[13px] ml-[18px] sm:w-full sm:mx-0 w-[2%] bg-green-900">
                  <Img
                    className="my-auto"
                    src="images/img_line_2.svg"
                    alt="Line 2"
                  />
                </div>
              }
              shape="round"
            ></Input>
            <Text
              className="md:ml-[0] ml-[532px] mt-5 text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtRobotoSlabMedium48"
            >
              {" "}
              Management Books
            </Text>
            <List
              className="sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1321px] mt-[29px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-1 object-cover w-full"
                  src="images/img_book34.png"
                  alt="bookThirtyFour"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[37px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-2.5 object-cover w-[94%]"
                  src="images/img_book34.png"
                  alt="bookThirtyFour"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-1 object-cover w-full"
                  src="images/img_book161_291x200.png"
                  alt="book161"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[34px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[13px] object-cover w-[92%]"
                  src="images/img_book161_1.png"
                  alt="book161"
                />
              </div>
            </List>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1227px] mt-[58px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize mb-1.5 text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                Great travel at desert
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[147px] sm:mt-0 mt-1.5 text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                Great travel at desert
              </Text>
              <Text
                className="capitalize mb-1 sm:ml-[0] ml-[121px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize mb-1 sm:ml-[0] ml-[131px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[1086px] mt-3 mx-auto md:px-5 w-full">
              <Text
                className="capitalize mb-3.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Sanchit Howdy
              </Text>
              <Text
                className="capitalize sm:mt-0 mt-3.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Sanchit Howdy
              </Text>
              <Text
                className="capitalize sm:mt-0 my-1.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
              <Text
                className="capitalize sm:mt-0 my-1.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1102px] mt-2.5 mx-auto md:px-5 w-full">
              <Text
                className="capitalize sm:mt-0 mt-2.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize mb-2.5 sm:ml-[0] ml-[249px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize mb-2 sm:ml-[0] ml-[228px] sm:mt-0 mt-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 45.00
              </Text>
              <Text
                className="capitalize mb-2.5 sm:ml-[0] ml-[269px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 45.00
              </Text>
            </div>
            <Input
              name="frameTwo_One"
              placeholder="See all"
              className="font-medium font-poppins leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[615px] mt-[105px] rounded-[3px] w-[210px]"
              suffix={
                <div className="mt-[17px] mb-[13px] ml-[18px] sm:w-full sm:mx-0 w-[2%] bg-green-900">
                  <Img
                    className="my-auto"
                    src="images/img_line_2.svg"
                    alt="Line 2"
                  />
                </div>
              }
              shape="round"
            ></Input>
            <Text
              className="md:ml-[0] ml-[499px] mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtRobotoSlabMedium48"
            >
              Commercial Books
            </Text>
            <List
              className="sm:flex-col flex-row gap-[47px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1299px] mt-[55px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[37px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto mt-[19px] object-cover w-[94%]"
                  src="images/img_book161_1.png"
                  alt="book166"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[26px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[21px] object-cover w-[86%]"
                  src="images/img_book161_1.png"
                  alt="book161"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[7px] object-cover w-[97%]"
                  src="images/img_book161_1.png"
                  alt="book164"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-1.5 object-cover w-[97%]"
                  src="images/img_book161_1.png"
                  alt="book1612"
                />
              </div>
            </List>
            <div className="flex md:flex-col flex-row font-inter md:gap-10 items-end justify-between max-w-[1234px] mt-[33px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start mb-1 w-[46%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="capitalize sm:mt-0 mt-1.5 text-center text-indigo-800 text-lg"
                    size="txtInterSemiBold18"
                  >
                    The lady beauty Scarlett
                  </Text>
                  <Text
                    className="capitalize mb-1.5 text-center text-indigo-800 text-lg"
                    size="txtInterSemiBold18"
                  >
                    The lady beauty Scarlett
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[77%] md:w-full">
                  <Text
                    className="capitalize mt-1.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                  <Text
                    className="capitalize mb-1.5 text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[5px] items-center justify-start md:mt-0 mt-3 w-[43%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="capitalize text-center text-indigo-800 text-lg"
                    size="txtInterSemiBold18"
                  >
                    The lady beauty Scarlett
                  </Text>
                  <Text
                    className="capitalize text-center text-indigo-800 text-lg"
                    size="txtInterSemiBold18"
                  >
                    The lady beauty Scarlett
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                  <Text
                    className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                  <Text
                    className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1123px] mt-0.5 mx-auto md:px-5 w-full">
              <Text
                className="capitalize mb-1.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[260px] sm:mt-0 my-[3px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[280px] sm:mt-0 my-[3px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[223px] sm:mt-0 mt-1.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
            </div>
            <Input
              name="frameTwo_Two"
              placeholder="See all"
              className="font-medium font-poppins leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[615px] mt-[35px] rounded-[3px] w-[210px]"
              suffix={
                <div className="mt-[17px] mb-[13px] ml-[18px] sm:w-full sm:mx-0 w-[2%] bg-green-900">
                  <Img
                    className="my-auto"
                    src="images/img_line_2.svg"
                    alt="Line 2"
                  />
                </div>
              }
              shape="round"
            ></Input>
            <Text
              className="md:ml-[0] ml-[529px] mt-7 text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtRobotoSlabMedium48"
            >
              Engineering Books
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1307px] mt-1.5 mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[17px] object-cover w-[89%]"
                  src="images/img_book161_1.png"
                  alt="book1617"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-9 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto mb-4 mt-1.5 object-cover w-[94%]"
                  src="images/img_book161_1.png"
                  alt="book169"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-1 object-cover w-full"
                  src="images/img_book161_1.png"
                  alt="book1616"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-center p-[34px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto mb-[7px] mt-[19px] object-cover w-[92%]"
                  src="images/img_book161_1.png"
                  alt="book1618"
                />
              </div>
            </List>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between max-w-[1253px] mt-[22px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1121px] mt-[7px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[278px] text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[259px] text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[233px] text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                size="txtInterRegular14"
              >
                Arthur Doyle
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1139px] mt-0.5 mx-auto md:px-5 w-full">
              <Text
                className="capitalize mb-1 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize mb-1 sm:ml-[0] ml-[267px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[268px] sm:mt-0 my-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
              <Text
                className="capitalize sm:ml-[0] ml-[244px] sm:mt-0 mt-1 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                size="txtInterBold22"
              >
                $ 38.00
              </Text>
            </div>
            <Input
              name="frameThree"
              placeholder="See all"
              className="font-medium font-poppins leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[615px] mt-[46px] rounded-[3px] w-[210px]"
              suffix={
                <div className="mt-[17px] mb-[13px] ml-[18px] sm:w-full sm:mx-0 w-[2%] bg-green-900">
                  <Img
                    className="my-auto"
                    src="images/img_line_2.svg"
                    alt="Line 2"
                  />
                </div>
              }
              shape="round"
            ></Input>
            <Text
              className="md:ml-[0] ml-[507px] mt-[47px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtRobotoSlabMedium48"
            >
              Engineering Books
            </Text>
            <List
              className="sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1321px] mt-[66px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[22px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[25px] object-cover w-[83%]"
                  src="images/img_book161_1.png"
                  alt="book1614"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto mb-3 mt-0.5 object-cover w-[97%]"
                  src="images/img_book161_1.png"
                  alt="book1610"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[17px] object-cover w-[89%]"
                  src="images/img_book161_1.png"
                  alt="book165"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[34px] sm:px-5 shadow-bs4 w-full">
                <Img
                  className="h-[291px] md:h-auto my-[13px] object-cover w-[92%]"
                  src="images/img_book161_1.png"
                  alt="book1611"
                />
              </div>
            </List>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start max-w-[1261px] mt-6 mx-auto md:px-5 w-full">
              <Text
                className="capitalize sm:mt-0 mt-1.5 text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize mb-1.5 sm:ml-[0] ml-[127px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize mb-1.5 sm:ml-[0] ml-[155px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
              <Text
                className="capitalize mb-1.5 sm:ml-[0] ml-[100px] text-center text-indigo-800 text-lg"
                size="txtInterSemiBold18"
              >
                The lady beauty Scarlett
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start max-w-[1133px] mt-0.5 mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-2">
                <Text
                  className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                  size="txtInterRegular14"
                >
                  Arthur Doyle
                </Text>
                <Text
                  className="capitalize mt-1 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                  size="txtInterBold22"
                >
                  $ 38.00
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start md:ml-[0] ml-[248px]">
                <Text
                  className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                  size="txtInterRegular14"
                >
                  Arthur Doyle
                </Text>
                <Text
                  className="capitalize mr-[3px] mt-[3px] text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                  size="txtInterBold22"
                >
                  $ 38.00
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[291px] w-[37%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                  <Text
                    className="capitalize text-blue_gray-400 text-center text-sm tracking-[0.28px]"
                    size="txtInterRegular14"
                  >
                    Arthur Doyle
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="capitalize mb-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                    size="txtInterBold22"
                  >
                    $ 38.00
                  </Text>
                  <Text
                    className="capitalize mt-0.5 text-[22px] text-center sm:text-lg text-red-500 md:text-xl tracking-[0.44px]"
                    size="txtInterBold22"
                  >
                    $ 38.00
                  </Text>
                </div>
              </div>
            </div>
            <Input
              name="frameFour"
              placeholder="See all"
              className="font-medium font-poppins leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[615px] mt-[18px] rounded-[3px] w-[210px]"
              suffix={
                <div className="mt-[17px] mb-[13px] ml-[18px] sm:w-full sm:mx-0 w-[2%] bg-green-900">
                  <Img
                    className="my-auto"
                    src="images/img_line_2.svg"
                    alt="Line 2"
                  />
                </div>
              }
              shape="round"
            ></Input>
            <footer className="flex font-inter items-center justify-center mt-[129px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-green-900 flex flex-col items-center justify-center p-[100px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-center w-[94%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[98px] items-center justify-center w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[87%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-[37%] md:w-full">
                          <Img
                            className="h-[87px] md:h-auto object-cover w-[23%]"
                            src="images/img_samplelogo1.png"
                            alt="samplelogoOne"
                          />
                          <Text
                            className="leading-[34.00px] mt-[9px] text-lg text-white-A700 tracking-[0.36px] w-full"
                            size="txtInterRegular18"
                          >
                            Nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-3 w-full">
                            <Img
                              className="h-11 md:h-auto object-cover w-11"
                              src="images/img_maskgroup.png"
                              alt="maskgroup"
                            />
                            <Img
                              className="h-11 md:h-auto object-cover w-11"
                              src="images/img_maskgroup_44x44.png"
                              alt="maskgroup_One"
                            />
                            <Img
                              className="h-11 md:h-auto object-cover w-11"
                              src="images/img_maskgroup_1.png"
                              alt="maskgroup_Two"
                            />
                            <Img
                              className="h-11 md:h-auto object-cover w-11"
                              src="images/img_maskgroup_2.png"
                              alt="maskgroup_Three"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[38px] items-start justify-start w-[52%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.48px] uppercase"
                              size="txtInterSemiBold24"
                            >
                              Company
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.48px] uppercase"
                              size="txtInterSemiBold24"
                            >
                              Importent Links
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[87%] md:w-full">
                            <Text
                              className="text-lg text-white-A700 tracking-[0.36px]"
                              size="txtInterSemiBold18WhiteA700"
                            >
                              <>
                                HOME
                                <br />
                                ABOUT US
                                <br />
                                BOOKS <br />
                                NEW RELEASE
                                <br />
                                CONTACT US
                                <br />
                                BLOG
                              </>
                            </Text>
                            <Text
                              className="text-lg text-white-A700 tracking-[0.36px]"
                              size="txtInterSemiBold18WhiteA700"
                            >
                              <>
                                Privacy Policy
                                <br />
                                FAQs
                                <br />
                                Terms of Service
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-lg text-white-A700 tracking-[0.36px]"
                        size="txtInterRegular18"
                      >
                        <span className="text-white-A700 font-inter text-left font-normal">
                          <>© 2022 Arihant. All Rights Reserved. </>
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          Privacy | Terms of Service
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default EXPORINGBOOKSPAGEPage;
