import React, { useState } from "react";
import { AiFillHeart, AiOutlineDownload } from "react-icons/ai";

const ImageComponent = ({ imageDataItem }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover && (
          <div className="flex flex-col justify-between absolute p-2 w-full z-20 h-full hover:bg-gradient-to-b from-[#00000016]  via-[#ffffff0d] to-[#00000016] ">
            <div className=" w-full">
              <div className="bg-white w-[30px] h-[30px] rounded flex justify-center items-center cursor-default">
                <AiFillHeart size={20} />
              </div>
            </div>
            <div className=" w-full flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={imageDataItem?.userImageURL}
                    alt={imageDataItem?.user}
                  />
                </div>
                <div>
                  <span className="text-white font-Poppins_semiBold">
                    {imageDataItem?.user}
                  </span>
                </div>
              </div>
              <div className="bg-white w-[30px] h-[30px] rounded flex justify-center items-center cursor-default">
                <AiOutlineDownload size={20} />
              </div>
            </div>
          </div>
        )}
        <img
          src={imageDataItem?.largeImageURL}
          className=" object-cover transition duration-300 ease-in-out hover:scale-110  hover:opacity-90 rounded-md"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
