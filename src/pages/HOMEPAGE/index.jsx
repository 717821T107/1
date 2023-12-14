import React from "react";

import { Button, Img, Line, List, Text } from "components";

import { handleSectionNavigation } from "utils";

const HOMEPAGEPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-green-A100 flex flex-col items-center justify-start p-[54px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1379px] mb-28 mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Text
                  className="common-pointer md:mt-0 mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                  size="txtManualeRomanBold40"
                  id="block1"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                >
                  AGAZINES
                </Text>
                <Text
                  className="md:ml-[0] ml-[294px] md:mt-0 mt-2 text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[57px] md:mt-0 mt-2 text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Shop
                </Text>
                <Text
                  className="md:ml-[0] ml-[52px] md:mt-0 mt-2 text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Features
                </Text>
                <Text
                  className="md:ml-[0] ml-[47px] md:mt-0 mt-2 text-[22px] text-green-900 sm:text-lg md:text-xl uppercase"
                  size="txtPoppinsMedium22"
                >
                  Contact
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[184px] md:mt-0 mt-2.5 w-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[142px] md:ml-[0] ml-[57px] text-center text-xl uppercase"
                  shape="round"
                  size="sm"
                >
                  Login
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[22px] w-[48%] md:w-full">
                  <Text
                    className="md:text-5xl text-[86px] text-green-900 w-full"
                    size="txtRufinaBold86"
                  >
                    Discover and Find Your Own Path!
                  </Text>
                  <Text
                    className="leading-[220.00%] mt-[26px] text-2xl md:text-[22px] text-green-800 sm:text-xl w-[88%] sm:w-full"
                    size="txtPoppinsMedium24"
                  >
                    Investigate Your Knowledge with the Featured Books and
                    Accomplish Something9 Information{" "}
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[258px] mt-[54px] text-center text-xl uppercase"
                    shape="round"
                    color="green_900_01"
                    size="lg"
                    variant="fill"
                  >
                    Explore Now
                  </Button>
                </div>
                <div className="h-[717px] relative rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] shadow-bs3 w-[42%] md:w-full">
                  <Img
                    className="h-[717px] m-auto object-cover rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] w-full"
                    src="images/img_rectangle26.png"
                    alt="rectangleTwentySix"
                  />
                  <div className="absolute backdrop-opacity-[0.5] bg-black-900_7f blur-[44.00px] bottom-[0] h-[138px] right-[27%] rounded-[69px] w-[16%]"></div>
                  <Img
                    className="absolute bottom-[12%] h-[110px] left-[4%]"
                    src="images/img_group37.svg"
                    alt="groupThirtySeven"
                  />
                  <Img
                    className="absolute h-[110px] right-[2%] top-[22%]"
                    src="images/img_group37.svg"
                    alt="groupThirtyEight"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[688px] mt-[120px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Best selling
          </Text>
          <Text
            className="md:ml-[0] ml-[493px] mt-[31px] text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            Take a look at the books that the world considered to be the
            greatest of the year.
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[87px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1409px] mt-[70px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-end justify-end p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[450px] md:h-auto mr-1 mt-[30px] object-cover w-[91%]"
                src="images/img_rectangle47.png"
                alt="rectangleFortySeven"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[450px] md:h-auto mt-[30px] object-cover rounded-[3px] w-[91%]"
                src="images/img_rectangle50.png"
                alt="rectangleFifty"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-center p-12 md:px-10 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[450px] md:h-auto my-0.5 object-cover rounded-[3px] w-[99%]"
                src="images/img_rectangle52.png"
                alt="rectangleFiftyTwo"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row font-poppins md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1305px] mt-[54px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  The Heaven & Earth Grocery Store
                </Text>
                <div className="flex flex-row items-center justify-center w-[61%] md:w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                    size="txtPoppinsMedium22Gray800"
                  >
                    $38.99
                  </Text>
                  <Line className="bg-gray-800 h-[27px] ml-[39px] my-0.5 w-px" />
                  <div className="flex flex-row gap-[9px] items-end justify-between ml-[47px] w-[30%]">
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
                  The Heaven & Earth Grocery Store
                </Text>
                <div className="flex flex-row items-center justify-center w-[61%] md:w-full">
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
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[224px] md:ml-[0] ml-[752px] mt-20"
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
            className="md:ml-[0] ml-[710px] mt-[185px] md:text-5xl text-[64px] text-green-900"
            size="txtRobotoSlabMedium64"
          >
            Our Services
          </Text>
          <List
            className="sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1593px] mt-[92px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-9 sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto my-1 object-cover w-[98%]"
                src="images/img_rectangle16.png"
                alt="rectangleSixteen"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[34px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto my-1.5 object-cover w-[96%]"
                src="images/img_rectangle54.png"
                alt="rectangleFiftyFour"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[25px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mb-[30px] object-cover w-[90%]"
                src="images/img_rectangle54_420x270.png"
                alt="rectangleFiftyFour"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[25px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mt-[30px] object-cover rounded-[11px] w-[90%]"
                src="images/img_gigimage1.png"
                alt="gigimageOne"
              />
            </div>
          </List>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-end md:ml-[0] ml-[175px] mt-8 md:px-5 w-[85%] md:w-full">
            <Text
              className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              BOOKS
            </Text>
            <Text
              className="capitalize md:ml-[0] ml-[282px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              MAGAZINES
            </Text>
            <Text
              className="capitalize md:ml-[0] ml-[231px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              ARTICLES
            </Text>
            <Text
              className="capitalize md:ml-[0] ml-[238px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              DOCUMENTARIES
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1612px] mt-[142px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[35px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mb-0.5 mt-2 object-cover w-[97%]"
                src="images/img_rectangle57.png"
                alt="rectangleFiftySeven"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[37px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mt-1.5 object-cover w-[98%]"
                src="images/img_rectangle59.png"
                alt="rectangleFiftyNine"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[37px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mt-1.5 object-cover rounded-[3px] w-[98%]"
                src="images/img_rectangle61.png"
                alt="rectangleSixtyOne"
              />
            </div>
            <div className="bg-gray-400_ad border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-[34px] sm:px-5 shadow-bs4 w-full">
              <Img
                className="h-[420px] md:h-auto mb-[3px] mt-[9px] object-cover w-[96%]"
                src="images/img_rectangle58.png"
                alt="rectangleFiftyEight"
              />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-end max-w-[1427px] mt-[34px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              NEWSLETTER
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[147px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              EXAM PREPARATION
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[161px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              LITERATURE
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[251px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterExtraBold30"
            >
              KIDS ZONE
            </Text>
          </div>
          <div className="bg-green-A100 flex md:flex-col flex-row md:gap-10 gap-[94px] items-center justify-center max-w-[1377px] mt-[202px] mx-auto p-[41px] md:px-5 rounded-[3px] w-full">
            <div className="md:h-[462px] h-[505px] md:ml-[0] ml-[127px] md:mt-0 mt-[7px] relative shadow-bs3 w-[32%] md:w-full">
              <Img
                className="absolute h-[462px] inset-x-[0] mx-auto object-cover rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] top-[0] w-full"
                src="images/img_rectangle26_462x404.png"
                alt="rectangleTwentySix_One"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_7f blur-[44.00px] bottom-[0] h-[121px] left-[14%] rounded-[60px] w-[16%]"></div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start mr-[79px] w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-green-900"
                  size="txtRobotoSlabBold46"
                >
                  Exclusive offer
                </Text>
                <Text
                  className="mt-5 text-[22px] text-green-900 sm:text-lg md:text-xl w-full"
                  size="txtPoppinsMedium22"
                >
                  Get a Premium Membership to access all the services available
                  in the Tizen Digital Library to enhance your knowledge
                </Text>
                <div className="flex flex-row font-poppins gap-[35px] items-center justify-start mt-10 w-[63%] md:w-full">
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-end p-3.5 rounded-[3px] shadow-bs1 w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      06
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-end p-[15px] rounded-[3px] shadow-bs1 w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      18
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Hours
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start p-[15px] rounded-[3px] shadow-bs1 w-[100px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-900"
                      size="txtPoppinsSemiBold32"
                    >
                      48
                    </Text>
                    <Text
                      className="text-base text-green-900"
                      size="txtPoppinsMedium16"
                    >
                      Min
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[235px] mt-[41px] text-center text-xl uppercase"
                  shape="round"
                  size="lg"
                  variant="fill"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[566px] mt-[49px] sm:text-[40px] md:text-[46px] text-[50px] text-green-900"
            size="txtRobotoSlabMedium50"
          >
            You might also like
          </Text>
          <Text
            className="md:ml-[0] ml-[308px] mt-10 text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            Immerse yourself in the world of international and intercultural
            understanding, expand the volume and{" "}
          </Text>
          <Text
            className="md:ml-[0] ml-[633px] mt-2 text-[22px] text-green-900 sm:text-lg md:text-xl"
            size="txtPoppinsMedium22"
          >
            variety of cultural content on the Internet
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1377px] mt-[35px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[566px] md:h-auto object-cover rounded-[3px] w-[32%] sm:w-full"
              src="images/img_rectangle61.png"
              alt="rectangleSixtyOne"
            />
            <Img
              className="sm:flex-1 h-[566px] md:h-auto sm:ml-[0] ml-[43px] object-cover rounded-[3px] w-[32%] sm:w-full"
              src="images/img_rectangle61.png"
              alt="rectangleSixtyTwo"
            />
            <Img
              className="sm:flex-1 h-[566px] md:h-auto ml-11 sm:ml-[0] object-cover rounded-[3px] w-[32%] sm:w-full"
              src="images/img_rectangle60.png"
              alt="rectangleSixty"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start max-w-[1354px] mt-[35px] mx-auto md:px-5 w-full">
            <Text
              className="leading-[143.00%] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
              size="txtPoppinsMedium22Bluegray900"
            >
              <span className="md:text-[22px] sm:text-xl text-black-900 font-poppins text-2xl font-bold">
                <>
                  BOOK/PRINTED MATERIAL
                  <br />
                </>
              </span>
              <a
                href="javascript:"
                className="text-cyan-400 font-poppins font-medium underline"
              >
                <>
                  The condition of the South, and the duty of the North.
                  <br />
                </>
              </a>
              <span className="text-blue_gray-900 font-poppins font-medium">
                Also available in digital form.
              </span>
            </Text>
            <Text
              className="leading-[143.00%] sm:ml-[0] ml-[69px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
              size="txtPoppinsMedium22Bluegray900"
            >
              <span className="md:text-[22px] sm:text-xl text-black-900 font-poppins text-2xl font-bold">
                <>
                  BOOK/PRINTED MATERIAL
                  <br />
                </>
              </span>
              <a
                href="javascript:"
                className="text-cyan-600 font-poppins font-medium underline"
              >
                <>
                  A comprehensive and popular history of the United States,
                  <br />
                </>
              </a>
              <span className="text-blue_gray-900 font-poppins font-medium">
                Also available in digital form.
              </span>
            </Text>
            <Text
              className="leading-[143.00%] ml-16 sm:ml-[0] sm:mt-0 mt-3 text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl"
              size="txtPoppinsMedium22Bluegray900"
            >
              <span className="md:text-[22px] sm:text-xl text-black-900_01 font-poppins text-2xl font-bold">
                <>
                  BOOK/PRINTED MATERIAL
                  <br />
                </>
              </span>
              <a
                href="javascript:"
                className="text-teal-700 font-poppins font-medium underline"
              >
                <>
                  American military biography; containing the lives and
                  characters of the officers of the Revolution who were ...
                  <br />
                </>
              </a>
              <span className="text-blue_gray-900 font-poppins font-medium">
                Also available in digital form.
              </span>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[664px] mt-[181px] sm:text-[40px] md:text-[46px] text-[50px] text-green-900"
            size="txtRobotoSlabMedium50"
          >
            Feedback Corner
          </Text>
          <List
            className="sm:flex-col flex-row font-actor gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1377px] mt-[97px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="md:h-[252px] h-[264px] relative w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[27px] inset-x-[0] items-start justify-center mx-auto p-[19px] rounded-[3px] shadow-bs1 w-full">
                <Text
                  className="mt-[55px] text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Emily Wilson
                </Text>
                <Text
                  className="mb-2.5 text-base text-gray-600 w-[99%] sm:w-full"
                  size="txtPoppinsMedium16Gray600"
                >
                  The Library has several shining stars on the collections that
                  would be helpful, courteous, conscientious and knowledgeable,
                  with a love for books and learning…
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtActorRegular60"
              >
                “
              </Text>
            </div>
            <div className="md:h-[252px] h-[264px] relative w-full">
              <div className="absolute bg-green-A100 bottom-[0] flex flex-col gap-[27px] inset-x-[0] items-start justify-center mx-auto p-4 rounded-[3px] shadow-bs1 w-full">
                <Text
                  className="mt-[58px] text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Sarah Thompson
                </Text>
                <Text
                  className="mb-[13px] text-base text-green-900 w-full"
                  size="txtPoppinsMedium16"
                >
                  I think the library is very helpful to students who choose to
                  take advantage of it.The collections that the library has
                  which made the students excited ...
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtActorRegular60"
              >
                “
              </Text>
            </div>
            <div className="md:h-[252px] h-[264px] relative w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[26px] inset-x-[0] items-start justify-center mx-auto p-[19px] rounded-[3px] shadow-bs1 w-full">
                <Text
                  className="mt-14 text-[22px] text-green-900 sm:text-lg md:text-xl"
                  size="txtRobotoSerifSemiBold22"
                >
                  Olivia Martinez
                </Text>
                <Text
                  className="mb-2.5 text-base text-gray-600 w-full"
                  size="txtPoppinsMedium16Gray600"
                >
                  Articles and the Documentaries are te best in the Library
                  Point of view.Apart from it the Kids Zone which had paid more
                  Attention from the Students to play attractive games
                </Text>
              </div>
              <Text
                className="absolute left-[4%] md:text-5xl text-6xl text-green-900 top-[0]"
                size="txtActorRegular60"
              >
                “
              </Text>
            </div>
          </List>
          <a
            href="javascript:"
            className="bg-green-900 h-[74px] justify-center md:ml-[0] ml-[757px] mr-[736px] mt-[142px] sm:px-5 px-[35px] py-[21px] rounded-[3px] text-shadow-ts text-white-A700 text-xl uppercase w-[235px]"
          >
            <Text size="txtPoppinsMedium20">View More</Text>
          </a>
          <footer className="bg-green-900 flex font-robotoslab items-center justify-center mt-[142px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center ml-[172px] mr-[175px] my-[81px] w-4/5">
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
                        <div className="flex flex-row gap-9 items-center justify-start mt-[23px]">
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_facebook_green_a100.svg"
                            alt="facebook"
                          />
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                          <Img
                            className="h-[38px] w-[38px]"
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
                  <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[130px] md:mt-0 mt-[22px] w-[13%] md:w-full">
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
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between ml-1 md:ml-[0] w-full">
                  <Line className="bg-green-A100_01 h-0.5 sm:mt-0 my-3.5 w-[77%]" />
                  <Text
                    className="capitalize text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Terms
                  </Text>
                  <a
                    href="javascript:"
                    className="capitalize sm:mt-0 mt-0.5 text-white-A700 text-xl"
                  >
                    <Text size="txtPoppinsSemiBold20">Privacy</Text>
                  </a>
                  <Text
                    className="capitalize mb-0.5 text-white-A700 text-xl"
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

export default HOMEPAGEPage;
