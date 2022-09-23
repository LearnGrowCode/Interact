export default function SideAdvL({
  Position,
  HackName,
  SDate,
  EDate,
  Location,
  HLink,
}) {
  return (
    <div>
      <div className="fixed top-[40vh] z-2 transition ease-in-out delay-150 duration-700 -translate-x-[40vw] hover:-translate-x-[0vw] hover:duration-1000 sm:-translate-x-[45vw] lg:-translate-x-[46vw]">
        <div className="h-[30vh] w-[50vw] bg-red-300 flex flex-row-reverse px-2 py-4 items-center rounded-tr rounded-br   ">
          <div className="w-[20vw] vtextL tracking-[0.3rem] font-bold text-xl mb-2   ">
            {HackName}
          </div>
          <div className="flex flex-col justify-center gap-2 h-[100%] text-gray-700 text-base mb-4">
            <div className="flex w-[100%] justify-between   h-20vh items-center ">
              <div className="text-3xl  font-bold ">{HackName}</div>
              <div className="">
                <a href="#">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 100 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="white" />
                    <g clip-path="url(#clip0_329_16)">
                      <path
                        d="M57.2146 45.8838C55.1782 43.7004 52.4167 42.4738 49.5374 42.4738C46.6581 42.4738 43.8966 43.7004 41.8602 45.8838L34.1805 54.1186C32.1441 56.3029 31 59.2655 31 62.3547C31 65.4438 32.1441 68.4064 34.1805 70.5908C36.217 72.7752 38.979 74.0023 41.8589 74.0023C44.7389 74.0023 47.5009 72.7752 49.5374 70.5908L53.376 66.4734"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M49.5374 54.1185C51.5738 56.3019 54.3352 57.5285 57.2145 57.5285C60.0939 57.5285 62.8553 56.3019 64.8917 54.1185L72.5714 45.8838C74.6079 43.6994 75.7519 40.7368 75.7519 37.6476C75.7519 34.5585 74.6079 31.5959 72.5714 29.4115C70.535 27.2272 67.7729 26 64.893 26C62.013 26 59.251 27.2272 57.2145 29.4115L53.3759 33.5289"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_329_16">
                        <rect
                          width="77"
                          height="92"
                          fill="white"
                          transform="translate(23 26)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="text-xl  font-bold ">Theme</div>
              <div className="flex gap-2">
                <span class="px-4 py-2 rounded-full text-black bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  No Restriction
                </span>
               
              </div>
              <div className="flex gap-2 flex-col">
              <div className="text-xl  font-bold ">Venue</div>
              <div className="flex gap-2  flex-row">
              <span class="px-4 py-2 rounded-full text-black bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Online
            </span>
                <span class="px-4 py-2 rounded-full text-black bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Starts : {SDate}
                </span>
                <span class="px-4 py-2 rounded-full text-black bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Ends : {EDate}
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
