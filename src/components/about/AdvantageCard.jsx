import React from "react";

const AdvantageCard = ({ gradient, content, textColor, delay }) => {
  const gradientClass = `${gradient} w-40 h-24 rounded-lg relative m`;

  return (
    <div className=" w-1/4">
      <div
        className=""
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay={delay}
      >
        <div className={gradientClass}>
          <div className="bg-[#1c2222] absolute top-[0.17rem] left-[0.17rem] right-[0.17rem] bottom-0 rounded-md flex justify-center items-center">
            <p className={`${textColor} text-center`}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
