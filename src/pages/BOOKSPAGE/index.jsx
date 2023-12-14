import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

const BOOKSPAGEPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-deep_orange-50 flex flex-col font-inter items-center justify-start pt-[54px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1379px] mx-auto md:px-5 w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                  size="txtManualeRomanBold40"
                >
                  Tizen
                </Text>
                <Text
                  className="md:ml-[0] ml-[372px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[57px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Shop
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Features
                </Text>
                <Text
                  className="md:ml-[0] ml-[46px] text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Contact
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[184px] w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[142px] md:ml-[0] ml-[58px] text-center text-xl uppercase"
                  shape="round"
                  size="sm"
                >
                  Login
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[895px] items-center justify-end mt-0.5 p-[53px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group54.png')" }}
              >
                <div className="flex flex-col items-center justify-start max-w-[1451px] mt-[130px] mx-auto pt-0.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                    <div className="h-12 relative w-[4%] md:w-full">
                      <div className="bg-white-A700 border border-red-500 border-solid h-12 m-auto rounded-[26px] w-full"></div>
                      <Img
                        className="absolute h-[11px] inset-[0] justify-center m-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="h-[654px] relative w-[93%] md:w-full">
                      <div className="absolute h-[654px] inset-y-[0] my-auto right-[0] w-[58%] md:w-full">
                        <Img
                          className="h-[654px] m-auto object-cover w-full"
                          src="images/img_eraamatudjaaudioraamatud.png"
                          alt="eraamatudjaaudi"
                        />
                        <div className="absolute h-12 inset-y-[0] my-auto right-[0] rotate-[180deg] w-[7%]">
                          <div className="bg-white-A700 border border-red-500 border-solid h-12 m-auto rounded-[26px] w-full"></div>
                          <Img
                            className="absolute h-[11px] inset-[0] justify-center m-auto"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[43px] h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[49%]">
                        <div className="flex flex-col gap-7 items-start justify-start w-full">
                          <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                            <Text
                              className="capitalize md:text-5xl text-6xl text-indigo-800 tracking-[-1.20px]"
                              size="txtInterSemiBold60"
                            >
                              TDL
                            </Text>
                            <Text
                              className="leading-[180.00%] text-[22px] text-indigo-800_cc sm:text-lg md:text-xl tracking-[0.88px] w-full"
                              size="txtInterMedium22"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed eu feugiat amet, libero ipsum enim
                              pharetra hac. Urna commodo, lacus ut magna velit
                              eleifend. Amet, quis urna, a eu.
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[213px] rounded-[7px]"
                            rightIcon={
                              <div className="mt-[5px] mb-1 ml-[17px] bg-indigo-800">
                                <Img
                                  src="images/img_arrowright.svg"
                                  alt="arrow_right"
                                />
                              </div>
                            }
                            color="indigo_800"
                            size="lg"
                          >
                            <div className="text-base text-left tracking-[1.60px] uppercase">
                              Read more
                            </div>
                          </Button>
                        </div>
                        <div className="h-[38px] relative w-[22%]">
                          <PagerIndicator
                            className="absolute flex h-3 inset-y-[0] my-auto right-[0] w-32"
                            count={4}
                            activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-red-500 w-3.5 relative"
                            activeIndex={1}
                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-400 w-3.5 relative"
                            selectedWrapperCss="inline-block"
                            unselectedWrapperCss="inline-block"
                          />
                          <div className="absolute border border-red-500 border-solid h-[38px] inset-y-[0] left-[0] my-auto rounded-[21px] w-[30%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[598px] mt-[101px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Top Trending Books
          </Text>
          <Text
            className="md:ml-[0] ml-[476px] mt-[26px] text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            Take a look at the books that the world considered to be the
            greatest of the year.
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[93px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 ml-60 md:ml-[0] mt-[93px] md:px-5 w-[79%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-[34px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mt-0.5 object-cover w-[93%]"
                src="images/img_rectangle47_410x280.png"
                alt="rectangleFortySeven"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[33px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mb-1 object-cover rounded-[3px] w-[93%]"
                src="images/img_rectangle50.png"
                alt="rectangleFifty"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[34px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mb-0.5 object-cover rounded-[3px] w-[93%]"
                src="images/img_rectangle52.png"
                alt="rectangleFiftyTwo"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[77px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1279px] mt-[34px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  The Heaven & Earth Grocery Store
                </Text>
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[81px] w-[67%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[39px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[30px] items-end justify-between ml-[47px] w-[36%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  The Wager | A tale of Mutiny and Murder
                </Text>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[87px] w-[52%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $62.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[39px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      4.9
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  The Lost City of Z:
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $49.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Input
            name="frameTwo"
            placeholder="See all"
            className="!placeholder:text-green-900 !text-green-900 font-medium font-poppins leading-[normal] md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
            wrapClassName="flex md:h-auto md:ml-[0] ml-[773px] mt-[92px] rounded-[3px] w-[210px]"
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
            className="md:ml-[0] ml-[423px] mt-[70px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Best Horrer and Thriller Books
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-36 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1368px] mt-[73px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[30px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mt-2.5 object-cover rounded-[3px] w-[91%]"
                src="images/img_rectangle65.png"
                alt="rectangleSixtyFive"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto object-cover rounded-[3px] w-[94%]"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyThree"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-8 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mt-1.5 object-cover rounded-[3px] w-[92%]"
                src="images/img_rectangle64.png"
                alt="rectangleSixtyFour"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[232px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1219px] mt-[37px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Stephen King Charlie
                </Text>
                <div className="flex flex-row items-center justify-between ml-2.5 md:ml-[0] w-[97%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[30px] items-end justify-between w-[36%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[7px] justify-start w-full">
                <Text
                  className="ml-6 md:ml-[0] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  The Dead Zone
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Black Wind A Dirk Pitt Novel
                </Text>
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[67px] w-3/4 md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[68px] w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] md:ml-[0] ml-[780px] mt-[46px]"
            rightIcon={
              <div className="mt-[17px] mb-[13px] ml-[18px] bg-green-900">
                <Img src="images/img_line_2.svg" alt="Line 2" />
              </div>
            }
            shape="round"
          >
            <div className="font-medium font-poppins leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
              See all
            </div>
          </Button>
          <Text
            className="md:ml-[0] ml-[463px] mt-[31px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Scientific and Fiction Stories
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[147px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1346px] mt-[75px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-7 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mt-3.5 object-cover rounded-[3px] w-[90%]"
                src="images/img_rectangle68.png"
                alt="rectangleSixtyEight"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mb-1.5 object-cover rounded-[3px] w-[92%]"
                src="images/img_rectangle69.png"
                alt="rectangleSixtyNine"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-end justify-end p-7 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mr-2 mt-3.5 object-cover rounded-[3px] w-[90%]"
                src="images/img_rectangle73.png"
                alt="rectangleSeventyThree"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[236px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1195px] mt-[31px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Time is when Novel
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[30px] items-end justify-between w-[36%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[26px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  A Thief in Time
                </Text>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[31px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  {" "}
                  The Time Key
                </Text>
                <div className="flex flex-row items-center justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[68px] w-[30%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] md:ml-[0] ml-[757px] mt-[68px]"
            rightIcon={
              <div className="mt-[17px] mb-[13px] ml-[18px] bg-green-900">
                <Img src="images/img_line_2.svg" alt="Line 2" />
              </div>
            }
            shape="round"
          >
            <div className="font-medium font-poppins leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
              See all
            </div>
          </Button>
          <Text
            className="md:ml-[0] ml-[513px] mt-[63px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Books / Romance novel
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[94px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1339px] mt-[60px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-end p-[30px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto ml-1.5 md:ml-[0] mt-2.5 object-cover rounded-[3px] w-[91%]"
                src="images/img_rectangle71.png"
                alt="rectangleSeventyOne"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto ml-0.5 md:ml-[0] object-cover rounded-[3px] w-[94%]"
                src="images/img_rectangle64_410x280.png"
                alt="rectangleSixtyFour"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-end justify-end p-7 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mb-0.5 mt-3 object-cover rounded-[3px] w-[90%]"
                src="images/img_rectangle65_410x280.png"
                alt="rectangleSixtyFive"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[241px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1168px] mt-[33px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Love Story
                </Text>
                <div className="flex flex-row items-center justify-start mt-1 w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  A tale of two souls
                </Text>
                <div className="flex flex-row items-center justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Again but Better
                </Text>
                <div className="flex flex-row items-center justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] md:ml-[0] ml-[769px] mt-[100px]"
            rightIcon={
              <div className="mt-[17px] mb-[13px] ml-[18px] bg-green-900">
                <Img src="images/img_line_2.svg" alt="Line 2" />
              </div>
            }
            shape="round"
          >
            <div className="font-medium font-poppins leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
              See all
            </div>
          </Button>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1315px] mt-[72px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-11 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-400_01 rounded-[11px] w-[29%] md:w-full">
                    <div className="h-[394px] relative w-full">
                      <Img
                        className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                        src="images/img_gigimage1_394x377.png"
                        alt="gigimageOne"
                      />
                      <Text
                        className="absolute bottom-[10%] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                        size="txtInterExtraBold30WhiteA700"
                      >
                        Higher Education
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-[45px] items-center justify-center outline outline-[1px] outline-gray-400_01 p-[21px] sm:px-5 rounded-[11px] w-[38%] md:w-full">
                    <Text
                      className="capitalize mt-[65px] sm:text-4xl md:text-[42px] text-[46px] text-blue_gray-800 text-center w-[99%] sm:w-full"
                      size="txtInterBold46"
                    >
                      Explore our Top Categories
                    </Text>
                    <Button
                      className="capitalize cursor-pointer font-bold leading-[normal] mb-11 min-w-[200px] rounded-[11px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      color="red_500"
                      variant="fill"
                    >
                      View All
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-400_01 rounded-[11px] w-[29%] md:w-full">
                    <div className="h-[394px] relative w-full">
                      <Img
                        className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                        src="images/img_index1.png"
                        alt="indexOne"
                      />
                      <Text
                        className="absolute bottom-[10%] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                        size="txtInterExtraBold30WhiteA700"
                      >
                        Management Books
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-400_01 rounded-[11px] w-[29%] md:w-full">
                    <div className="h-[394px] relative w-full">
                      <Img
                        className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                        src="images/img_gigimage1_1.png"
                        alt="gigimageOne"
                      />
                      <div className="absolute h-[394px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                          src="images/img_images1.png"
                          alt="imagesOne"
                        />
                        <Text
                          className="absolute bottom-[12%] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                          size="txtInterExtraBold30WhiteA700"
                        >
                          Finance Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-400_01 rounded-[11px] w-[38%] md:w-full">
                    <div className="h-[394px] relative w-full">
                      <Img
                        className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                        src="images/img_gigimage1.png"
                        alt="gigimageOne_One"
                      />
                      <Text
                        className="absolute bottom-[11%] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                        size="txtInterExtraBold30WhiteA700"
                      >
                        Engineering Books
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-400_01 rounded-[11px] w-[29%] md:w-full">
                    <div className="h-[394px] relative w-full">
                      <Img
                        className="h-[394px] m-auto object-cover rounded-[11px] w-full"
                        src="images/img_gigimage1_2.png"
                        alt="gigimageOne_Two"
                      />
                      <Text
                        className="absolute bottom-[12%] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                        size="txtInterExtraBold30WhiteA700"
                      >
                        Commerce books
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[549px] mt-20 md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Children’s Books/Novels
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-44 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[191px] mt-[27px] md:px-5 w-[84%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-[31px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mt-2 object-cover rounded-[3px] w-[91%]"
                src="images/img_rectangle67.png"
                alt="rectangleSixtySeven"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto object-cover rounded-[3px] w-[94%]"
                src="images/img_rectangle72.png"
                alt="rectangleSeventyTwo"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[27px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[410px] md:h-auto mb-4 object-cover rounded-[3px] w-[89%]"
                src="images/img_rectangle70.png"
                alt="rectangleSeventy"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[289px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[280px] mt-8 md:px-5 w-[72%]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Shark School
                </Text>
                <div className="flex flex-row items-center justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Adventure of Pachelot
                </Text>
                <div className="flex flex-row items-center justify-start w-[84%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Upside Down Magic
                </Text>
                <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[17px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[33%]">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                      size="txtPoppinsMedium22Gray800"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 my-1 w-6"
                      src="images/img_fissstar.svg"
                      alt="fissstar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] md:ml-[0] ml-[776px] mt-[58px]"
            rightIcon={
              <div className="mt-[17px] mb-[13px] ml-[18px] bg-green-900">
                <Img src="images/img_line_2.svg" alt="Line 2" />
              </div>
            }
            shape="round"
          >
            <div className="font-medium font-poppins leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
              See all
            </div>
          </Button>
          <footer className="bg-green-900 flex font-robotoslab items-center justify-center mt-[45px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center ml-[171px] mr-[174px] my-[81px] w-[81%]">
              <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[55%] md:w-full">
                  <ul className="flex flex-col items-start justify-start w-[36%] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="ml-0.5 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                      >
                        <Text size="txtBesleyRomanRegular50">TDL</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize ml-0.5 md:ml-[0] mt-[18px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      >
                        <Text size="txtRobotoSlabMedium22">Social Media</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-center justify-start mt-[23px]">
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_facebook_green_a100.svg"
                            alt="facebook"
                          />
                          <Img
                            className="h-[35px] ml-9 w-[35px]"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                          <Img
                            className="h-[38px] ml-[58px] w-[38px]"
                            src="images/img_instagram.svg"
                            alt="instagram"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize font-medium font-robotoslab mt-[35px] text-[22px] sm:text-lg text-white-A700 md:text-xl underline"
                      >
                        <Text>Take our survey External</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[131px] md:mt-0 mt-[22px] w-[13%] md:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase"
                      size="txtRobotoSlabMedium22"
                    >
                      SHOP
                    </Text>
                    <ul className="flex flex-col font-poppins items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Products
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[17px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Overview
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-5 text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Pricing
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[15px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Releases
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[23px] items-start justify-start ml-36 md:ml-[0] md:mt-0 mt-[22px] w-[16%] md:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase"
                      size="txtRobotoSlabMedium22"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col font-poppins items-start justify-start md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[18px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Contact
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-[18px] text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">News</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-5 text-green-A100 text-xl"
                        >
                          <Text size="txtPoppinsMedium20GreenA100">
                            Support
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start ml-1 md:ml-[0] w-full">
                  <Line className="bg-green-A100_01 h-0.5 sm:mt-0 my-3.5 w-[77%]" />
                  <Text
                    className="capitalize ml-9 sm:ml-[0] text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Terms
                  </Text>
                  <a
                    href="javascript:"
                    className="capitalize ml-14 sm:ml-[0] sm:mt-0 mt-0.5 text-white-A700 text-xl"
                  >
                    <Text size="txtPoppinsSemiBold20">Privacy</Text>
                  </a>
                  <Text
                    className="capitalize mb-0.5 ml-3.5 sm:ml-[0] text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Cookies
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BOOKSPAGEPage;
