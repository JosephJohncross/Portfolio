import React from "react";

const Button = ({ shade, content, icon }) => {
  const buttonStyle = (shade) => {
    var classStyle = "";

    switch (shade) {
      case "green":
        classStyle =
          "rounded-full px-8 py-2 font-mont text-lg  text-[#F2F2F2] bg-[#41B362] shadow-md hover:bg-dark1 hover:shadow-sm text-sm md:text-sm flex justify-center items-center";
        break;
      case "bordered-green":
        classStyle = `rounded-full px-6 py-2 font-mont font-semibold text-lg border border-[#41B362] text-[#41B362] hover:text-[#F2F2F2] hover:bg-[#41B362] hover:shadow-sm transition-colors text-sm md:text-sm flex justify-center items-center`;
        break;
      case "bordered-white":
        classStyle = `rounded-full px-8 py-2 bg-transparent font-mont text-lg border border-[#F2F2F2] text-[#F2F2F2] hover:text-pri hover:bg-[#F2F2F2] hover:shadow-sm transition-colors text-sm md:text-sm flex justify-center items-center`;
        break;
      default:
        classStyle = "";
    }
    return classStyle;
  };

  return (
    <button className={buttonStyle(shade)}>
      {icon ? (
        <div className="flex justify-center items-center space-x-3">
          <span>{content}</span>
          <svg
          className="w-2"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.22559 16.8285L7.74559 10.3085C8.51559 9.53853 8.51559 8.27853 7.74559 7.50853L1.22559 0.988525"
              stroke="#329868"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ) : (
        <>{content}</>
      )}
    </button>
  );
};

export default Button;
