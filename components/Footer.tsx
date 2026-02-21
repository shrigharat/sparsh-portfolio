const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white stroke-white inline">
    <g id="SVGRepo_iconCarrier">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 md:px-12 py-8 w-full flex justify-center items-center">
      <div className="w-full md:w-[90%] flex justify-between items-start">
        <div className="text-white text-lg flex flex-col gap-2">
          <h3 className="font-heading font-bold text-lg tracking-widest">SPARSH PATIL</h3>
          <p className="font-body text-sm">2026© All Rights Reserved</p>
        </div>
        <div className="font-body text-white text-sm md:text-md">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            <li>
              <a className="underline" href="#news">
                Recent news
              </a>
              <ArrowIcon />
            </li>
            <li>
              <a className="underline" href="#record">
                Track Record
              </a>
              <ArrowIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
