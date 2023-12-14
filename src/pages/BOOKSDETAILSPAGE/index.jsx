import React from "react";

import { Button, Img, Line, Text } from "components";

const BOOKSDETAILSPAGEPage = () => {
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-manuale items-center justify-start mx-auto w-full">
        <div className="h-[1368px] sm:h-[1470px] md:h-[1752px] md:px-5 relative w-full">
          <Img
            className="h-[1368px] m-auto object-cover w-full"
            src="images/img_libimg21.png"
            alt="libimgTwentyOne"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[90px] h-max inset-[0] justify-center m-auto w-[90%]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Text
                className="mb-[3px] sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                size="txtManualeRomanBold40"
              >
                Tizen
              </Text>
              <Text
                className="sm:ml-[0] ml-[979px] sm:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                size="txtManualeRomanBold40"
              >
                Home
              </Text>
              <Text
                className="sm:ml-[0] ml-[69px] sm:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                size="txtManualeRomanBold40"
              >
                Contact us
              </Text>
              <Text
                className="sm:ml-[0] ml-[52px] sm:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-green-900"
                size="txtManualeRomanBold40"
              >
                Account
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[166px] mr-[47px] p-[88px] md:px-10 sm:px-5 w-[88%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[63px] w-[96%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[81px] justify-start w-[35%] md:w-full">
                  <div className="h-[462px] relative w-full">
                    <div className="absolute border border-blue_gray-50 border-solid h-[400px] inset-x-[0] mx-auto rounded-[12px] top-[4%] w-[400px]"></div>
                    <Img
                      className="absolute h-[462px] inset-y-[0] left-[0] my-auto object-cover w-[78%]"
                      src="images/img_image2.png"
                      alt="imageTwo"
                    />
                  </div>
                  <div className="flex flex-row gap-[71px] items-start justify-start md:ml-[0] ml-[11px] w-[71%] md:w-full">
                    <Img
                      className="h-[33px] md:h-auto object-cover w-[39%]"
                      src="images/img_screenshot20231213.png"
                      alt="screenshot20231"
                    />
                    <Img
                      className="h-[35px] md:h-auto object-cover w-[38%]"
                      src="images/img_screenshot20231213_35x108.png"
                      alt="screenshot20231_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[7px] w-[55%] md:w-full">
                  <div className="font-inter h-20 relative w-[86%] sm:w-full">
                    <div className="absolute bottom-[3%] flex flex-col items-center justify-between right-[0] w-[443px] sm:w-full">
                      <div className="flex flex-row gap-[9.91px] items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[57px] rounded-[7px]"
                          leftIcon={
                            <Img
                              className="h-[15px] mr-[5px]"
                              src="images/img_frame.svg"
                              alt="Frame"
                            />
                          }
                          color="red_50"
                          size="xs"
                          variant="fill"
                        >
                          <div className="font-semibold leading-[normal] text-[12.2px] text-left">
                            109
                          </div>
                        </Button>
                        <Button
                          className="flex h-[25px] items-center justify-center rounded-[7px] w-[25px]"
                          color="blue_gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_bookmark.svg" alt="bookmark" />
                        </Button>
                        <Button
                          className="flex h-[25px] items-center justify-center rounded-[7px] w-[25px]"
                          color="blue_gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_send.svg" alt="send" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[8.39px] h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                        size="txtTelexRegular36"
                      >
                        The Raging Storm
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-auto"
                        size="txtSenBold24"
                      >
                        Ann Cleeves
                      </Text>
                    </div>
                  </div>
                  <div className="font-sen h-[29px] md:h-[46px] mt-[17px] relative w-[86%] sm:w-full">
                    <Line className="absolute bg-gray-300_02 bottom-[0] h-px right-[0] w-[79%]" />
                    <Text
                      className="absolute h-full inset-y-[0] left-[0] my-auto text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtSenBold24"
                    >
                      Originally published: 5 September 2023
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                    size="txtSenBold24"
                  >
                    Genres: Mystery, Fiction
                  </Text>
                  <div className="font-sen h-7 md:h-[55px] ml-2 md:ml-[0] mt-[26px] relative w-[85%] sm:w-full">
                    <Line className="absolute bg-gray-300_02 bottom-1/4 h-px right-[0] w-[81%]" />
                    <Text
                      className="absolute h-max inset-y-[0] left-[0] my-auto text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtSenBold24"
                    >
                      Plot of the Book/Novel
                    </Text>
                  </div>
                  <Line className="bg-gray-300_02 h-px md:ml-[0] ml-[118px] mt-[111px] w-[68%]" />
                  <div className="h-44 md:h-[231px] mt-[55px] relative w-full">
                    <div className="absolute flex flex-col font-sen h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[86%]">
                      <div className="flex flex-col md:gap-10 gap-[74px] justify-start w-full">
                        <Line className="bg-gray-300_02 h-px md:ml-[0] ml-[118px] w-[79%]" />
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                          size="txtSenBold24"
                        >
                          About the Author
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[98%] sm:w-full"
                      size="txtSpectralBold24"
                    >
                      <>
                        {" "}
                        &quot;Jack Holden demonstrates his full talents in this
                        mystery, bringing the extensive cast of characters in
                        this small and close-knit community in Devon to life
                        with his strong narration...His spot-on timing helps
                        keep the story moving toward its surprising end,
                        resulting in a thoroughly enjoyable listen.&quot;
                      </>
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[21px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[84%] sm:w-full"
                    size="txtSpectralBold24"
                  >
                    {" "}
                    Ann Cleeves OBE is a British mystery crime writer. She wrote
                    the Vera Stanhope, Jimmy Perez, and Matthew Venn series, all
                    three of which have been adapted into TV shows. In 2006 she
                    won the Duncan Lawrie Dagger for her novel Raven Black, the
                    first novel in the Jimmy Perez series.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-inter items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-0.5 w-full">
            <div className="bg-green-900 flex flex-col items-center justify-center p-[116px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[3px] md:ml-[0] ml-[65px] w-[76%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-center w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[39%] md:w-full">
                      <Img
                        className="h-[101px] md:h-auto object-cover w-[23%]"
                        src="images/img_samplelogo1.png"
                        alt="samplelogoOne"
                      />
                      <Text
                        className="leading-[34.00px] mt-2.5 text-lg text-white-A700 tracking-[0.36px] w-full"
                        size="txtInterRegular18"
                      >
                        Nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.{" "}
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                        <Img
                          className="h-[51px] md:h-auto object-cover"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
                        <Img
                          className="h-[51px] md:h-auto object-cover"
                          src="images/img_maskgroup_44x44.png"
                          alt="maskgroup_One"
                        />
                        <Img
                          className="h-[51px] md:h-auto object-cover"
                          src="images/img_maskgroup_1.png"
                          alt="maskgroup_Two"
                        />
                        <Img
                          className="h-[51px] md:h-auto object-cover"
                          src="images/img_maskgroup_2.png"
                          alt="maskgroup_Three"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[49px] items-start justify-start w-1/2 md:w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
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
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[207px] items-start justify-start w-[96%] md:w-full">
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
    </>
  );
};

export default BOOKSDETAILSPAGEPage;
