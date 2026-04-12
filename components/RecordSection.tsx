import dynamic from 'next/dynamic';

const RankingChart = dynamic(() => import('./RankingChart'), { ssr: true });

export default function RecordSection() {
  return (
    <section
      id="record"
      className="flex flex-col justify-start items-center py-12 gap-4 min-h-screen md:h-screen"
    >
      <h2 className="font-heading underline text-3xl font-bold text-center w-[90%]">
        Sparsh&apos;s Past 2 years on the court
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center w-[90%] h-[80%] py-4 gap-8">
        <div className="left flex-1 h-full">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full h-full">
            {/* Tournaments */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading z-10 text-left">37</div>
              <div className="text text-lg font-semibold z-10 text-left">
                Tournaments participated
              </div>
              <svg
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#fff"
                className="absolute bottom-2 -right-4 md:right-1 w-48 h-48 z-0 fill-[#fff]/40"
              >
                <g>
                  <path
                    className="st0"
                    d="M386.386,313.5c-12.187-27.904-21.226-60.357-24.932-95.871c0.347-17.457-2.033-35.289-7.086-52.89 c-9.623-33.542-28.849-66.349-57.256-94.762c-18.722-18.716-39.213-34.134-60.683-45.729c-16.111-8.692-32.774-15.234-49.66-19.328 c-25.306-6.142-51.196-6.747-75.904-0.612C86.164,10.402,62.811,23.344,43.102,43.1c-17.559,17.526-29.746,37.907-36.5,59.582 c-5.08,16.247-7.141,33.18-6.481,50.155c0.992,25.49,8.018,51.067,19.96,75.489c11.956,24.422,28.842,47.722,49.897,68.784 c37.881,37.867,83.582,59.44,128.399,63.648c7.352,0.688,14.676,0.864,21.94,0.599c37.547,2.53,68.946,11.405,95.422,23.633 c15.839,7.324,29.923,15.88,42.416,25.054l67.172-33.229C411.039,360.229,397.404,338.759,386.386,313.5z M250.989,315.65 c-22.518,7.494-48.585,7.8-75.19,0.163c-26.578-7.616-53.576-23.177-77.461-47.062c-16.152-16.144-29.21-33.609-38.799-51.38 c-7.195-13.323-12.432-26.816-15.642-40.05c-4.808-19.872-5.06-39.07-0.66-56.807c4.427-17.744,13.397-34.188,28.223-49.054 c13.207-13.187,27.686-21.715,43.192-26.578c11.629-3.638,23.884-5.175,36.636-4.686c19.11,0.728,39.35,6.087,59.412,15.907 c20.05,9.807,39.88,24.062,58.052,42.233c31.862,31.848,48.864,69.219,52.08,103.774c1.619,17.288-0.184,33.854-5.176,48.877 c-5.012,15.03-13.159,28.55-24.632,40.03C279.532,302.49,266.019,310.644,250.989,315.65z M332.571,348.593 c-10.65-4.93-21.708-9.079-33.344-12.521c7.134-4.876,13.894-10.425,20.15-16.696c6.984-6.971,13.058-14.581,18.314-22.633 c3.346,11.275,7.297,22.177,11.936,32.807c6.345,14.506,13.458,28.019,21.17,40.424 C359.163,362.248,346.452,355.012,332.571,348.593z"
                  ></path>
                  <path
                    className="st0"
                    d="M438.821,391.022l-64.526,31.917c3.686,3.203,7.208,6.434,10.562,9.691c1.02,0.992,2.04,1.999,3.06,3.02 c1.591,1.591,3.19,3.223,4.774,4.876l65.124-32.209C451.416,402.815,444.928,396.96,438.821,391.022z"
                  ></path>
                  <path
                    className="st0"
                    d="M508.495,451.693l-75.231,37.214c1.136,1.51,2.17,2.904,3.068,4.114c1.4,1.898,2.489,3.4,3.223,4.414 c0.368,0.51,0.639,0.898,0.816,1.15l0.198,0.272l0.04,0.062l0.007,0.007l0.074,0.102l0.075,0.102 c0.972,1.346,2.047,2.605,3.203,3.761c5.183,5.182,12.072,8.406,19.485,9.011l0.074,0.006c9.039,0.7,17.968-2.57,24.428-9.018 l14.935-14.934c6.447-6.447,9.725-15.39,9.011-24.449v-0.014C511.569,459.316,510.379,455.324,508.495,451.693z"
                  ></path>
                  <path
                    className="st0"
                    d="M476.986,424.081c-1.102-0.863-2.244-1.781-3.387-2.693l-67.797,33.534 c5.692,6.523,11.044,12.99,15.758,18.893l73.197-36.207C490.867,434.759,484.535,430.039,476.986,424.081z"
                  ></path>
                  <path
                    className="st0"
                    d="M185.858,431.739c-16.996,16.07-17.757,42.886-1.694,59.888c16.07,17.009,42.886,17.764,59.888,1.694 c17.009-16.07,17.764-42.879,1.694-59.888C229.682,416.431,202.866,415.676,185.858,431.739z"
                  ></path>
                </g>
              </svg>
            </div>

            {/* Winner Trophies */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading z-10 text-left">11</div>
              <div className="text text-lg font-semibold z-10 text-left">Winner Trophies</div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute bottom-2 -right-8 md:right-1 w-48 h-48 z-0 fill-[#fff]/40"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 4.99612C11 4.59166 10.7564 4.22702 10.3827 4.07224C10.009 3.91746 9.57889 4.00302 9.29289 4.28902L8.29289 5.28902C7.90237 5.67954 7.90237 6.31271 8.29289 6.70323C8.48816 6.89849 8.74408 6.99612 9 6.99612V9.99612C8.44772 9.99612 8 10.4438 8 10.9961C8 11.5484 8.44772 11.9961 9 11.9961H9.9986C9.99907 11.9961 9.99953 11.9961 10 11.9961C10.0005 11.9961 10.0009 11.9961 10.0014 11.9961H11C11.5523 11.9961 12 11.5484 12 10.9961C12 10.4438 11.5523 9.99612 11 9.99612V4.99612Z"
                  fill="white"
                  fillOpacity="0.4"
                />
              </svg>
            </div>

            {/* Runner up trophies */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading z-10 text-left">10</div>
              <div className="text text-lg font-semibold z-10 text-left">Runner up trophies</div>
            </div>

            {/* Bronze medals */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading text-left z-10">5</div>
              <div className="text text-lg font-semibold text-left z-10">Bronze medals</div>
            </div>

            {/* Semifinalist */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading text-left z-10">11</div>
              <div className="text text-lg font-semibold text-left z-10">Times Semifinalist</div>
            </div>

            {/* Doubles wins */}
            <div className="text-center w-full h-full flex flex-col justify-center text-primary bg-[#00B1CA]/15 relative overflow-hidden p-8">
              <div className="count text-5xl font-bold font-heading text-left z-10">4/7</div>
              <div className="text text-lg font-semibold text-left z-10">Wins in Doubles</div>
            </div>
          </div>
        </div>
        <div className="right flex-1 w-full h-full flex flex-col justify-center items-center">
          <RankingChart />
        </div>
      </div>
    </section>
  );
}
