import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="bg-[#ffff] min-h-[80vh]">
        <main className="isolate py-10">
          {/* Hero section */}
          <div className="relative isolate -z-10">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-Poppins_bold">
                      Imaginaria
                      <br />
                      Where Imagination Meets Innovation
                    </h1>
                    <p className="relative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                      Taking inspiration from visionaries like Walt Disney, who
                      dared to dream and brought those dreams to life, we too
                      champion the power of imagination. Just as Disney
                      transformed hand-drawn art into animated works of art, we
                      celebrate the imaginative power in all of us. At
                      Imaginaria, we curate and showcase a collection of
                      AI-generated images, created by transforming text-based
                      prompts into stunning visuals.
                    </p>
                    <p className="relative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                      Our platform is more than an image library—it's a creative
                      playground and a vibrant community. Here, you can explore
                      the extraordinary capabilities of AI and spark your own
                      creativity.
                    </p>
                    <p className="relative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                      Imaginaria serves as a hub for sharing and collaboration.
                      We connect imagemakers from all corners of the globe,
                      fostering a space where they can share their creations,
                      exchange ideas, and engage in the evolution of art and
                      storytelling in this digital era.
                    </p>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://imaginaria.onrender.com/assets/Imaginaria-about-1-57f801e7.jpg"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://img.freepik.com/free-photo/person-choosing-where-they-work-from-hybrid-working-model_23-2149483823.jpg?w=740&t=st=1692735163~exp=1692735763~hmac=f7346fe8930214355fb2bd967ad22c2113d8f27a133d4b792fc48e2540545e04"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=1060&t=st=1692735318~exp=1692735918~hmac=d96e0c678118e0f61a5f119264ec503f497a496d00a04b8fb85a2e590a8ee372"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://img.freepik.com/free-photo/3d-rendering-holographic-layering_23-2150491103.jpg?w=826&t=st=1692735002~exp=1692735602~hmac=0caeaa8ec1ab59fa939e9706a79b49fd2ff038cd5b83f216c1ab468d0b82ba70"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://img.freepik.com/free-photo/medium-shot-man-city-double-exposure_23-2149303230.jpg?size=626&ext=jpg&ga=GA1.2.133694367.1682534327&semt=ais"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src="https://img.freepik.com/free-photo/poster-movie-vr-neon-colors_188544-22011.jpg?t=st=1692735844~exp=1692739444~hmac=8a2bafad3b907f5ebfadb7f40c512d19a9a7db600ed3d30d706cd8267242a695&w=1380"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          <div className="mt-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Unlock Your Creativity with AI
                  </h2>
                  <p className="mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                    Imaginaria is a complimentary service committed to inspiring
                    creativity through AI-generated imagery. Unlock the
                    remarkable creative potential of AI with our extensive image
                    library, crafted by advanced text-to-image tools including
                    Midjourney AI, DALL-E, Leonardo, Night Café, Stable
                    Diffusion, and many others.
                  </p>
                  <p className="mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                    Each image in our collection stands as a testament to the
                    extraordinary capabilities of AI, serving as a dynamic
                    co-pilot in the realm of creativity. We offer this service
                    not only as a source of inspiration, but also as a community
                    platform to share stunning images and prompts from
                    imagemakers worldwide.
                  </p>
                  <p className="mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-Poppins_regular">
                    Here, you're invited to not just appreciate art but interact
                    with it. Download an image that catches your eye or seize a
                    prompt from any image to craft your very own version using
                    whichever AI platform you want to use.
                  </p>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-woman-with-fire_71767-120.jpg?w=826&t=st=1692735591~exp=1692736191~hmac=1bb844d1d1d42ad9d4430facde7a919823473099fcd19dbb661081384e6269b1"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        src="https://imaginaria.onrender.com/assets/heroImage-ed0ff50d.jpg"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        src="https://imaginaria.onrender.com/assets/Imaginaria-about-3-b726c0a8.jpg"
                        alt=""
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        src="https://imaginaria.onrender.com/assets/Imaginaria-about-2-4fd14296.jpg"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default About;
