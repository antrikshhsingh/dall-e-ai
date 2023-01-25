import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl cursor-pointer"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#2a2a2dc3] m-2 p-4 rounded-md cursor-pointer">
        <p className="text-white font-mono text-sm overflow-y-auto">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full object-cover bg-green-700 flex justify-center items-center text-xs font-semibold text-white uppercase text-[30px]">
              {name[0]}
            </div>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none border-none bg-transparent"
          >
            <img
              src={download}
              alt={download}
              className="h-6 w-6 invert object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
