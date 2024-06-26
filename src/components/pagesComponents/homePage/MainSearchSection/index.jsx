import React, { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Videos } from "../../../../assets/videos";

const { homePageVideo } = Videos;
const MainSearchSection = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div className="relative isolate overflow-hidden pt-14">
      <video
        ref={vidRef}
        muted
        autoPlay
        loop
        poster="https://v4.cdnpk.net/videvo_files/video/free/video0469/thumbnails/_import_6176afda04a180.89007747_large.jpg?ga=GA1.1.133694367.1682534327&item_id=171562"
        className="absolute inset-0 -z-10 h-full w-full object-cover "
      >
        <source src={homePageVideo} type="video/mp4" />
      </video>

      <div
        src="https://v4.cdnpk.net/videvo_files/video/free/video0469/thumbnails/_import_6176afda04a180.89007747_large.jpg?ga=GA1.1.133694367.1682534327&item_id=171562"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover bg-black bg-opacity-30"
      />

      <div className="mx-auto max-w-2xl sm:py-48 lg:py-56 px-3 pt-40 pb-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-Poppins_bold">
            Imaginaria
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-Poppins_regular">
            Where AI meets human creativity.
            <br />
            Your source for inspiration and AI-generated images.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          <div className="w-full relative h-12">
            <input
              className="p-4 h-12 bg-white w-full rounded outline-none font-Poppins_regular bg-opacity-90"
              placeholder="Look for AI-generated visuals."
            />
            <div className="absolute right-0 h-12 inset-y-0 flex items-center p-3">
              <BsSearch className="cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
    </div>
  );
};

export default MainSearchSection;
