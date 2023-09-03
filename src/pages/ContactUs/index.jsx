import { Button, TextArea, TextInput } from "../../components/formComponents";
const ContactUS = () => {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div
          className="relative px-6 pb-20 pt-36 sm:pt-60 lg:static lg:px-8 lg:py-48"
          // className="mx-auto max-w-7xl px-6 pt-36 sm:pt-60 lg:px-0 lg:pt-32"
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#000000] sm:text-4xl font-Poppins_medium">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-Poppins_regular">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4 font-Poppins_regular">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  {/* <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" /> */}
                </dt>
                <dd>
                  269 South Beverly Drive, #1234
                  <br />
                  Beverly Hills, CA 90212
                </dd>
              </div>

              <div className="flex gap-x-4 font-Poppins_regular">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  {/* <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" /> */}
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 font-Poppins_regular"
                    href="mailto:hello@imaginaria.ai"
                  >
                    hello@imaginaria.ai
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              <div>
                <TextInput label="First name" name="first-name" />
              </div>
              <div>
                <TextInput label="Last name" name="last-name" />
              </div>
              <div className="sm:col-span-2">
                <TextInput label="Email" name="email" />
              </div>
              <div className="sm:col-span-2">
                <TextInput label="Phone number" name="phone-number" />
              </div>
              <div className="sm:col-span-2">
                <TextArea label="Message" name="message" />
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <Button
                onClick={() => {}}
                bgColor={"bg-black ring-[black]"}
                textColor={"text-[white]"}
                size="md"
                type="submit"
              >
                Sign Up – It's Free
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
