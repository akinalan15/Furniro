import React from "react";
import s1 from "../assets/images/Group 106.png";
import s2 from "../assets/images/Group 107.png";

const Description = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Tabs */}
      <div className="flex space-x-8 border-b">
        <button className="pb-2 border-b-2 border-black text-black font-medium">
          Description
        </button>
        <button className="pb-2 text-gray-500">Additional Information</button>
        <button className="pb-2 text-gray-500">Reviews [5]</button>
      </div>

      {/* Description */}
      <div className="mt-6 ">
        <p className="text-gray-600 leading-relaxed">
          Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the cords, and takes the show on the road.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage-styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
        <img
          src={s1}
          alt="Sofa 1"
          className="rounded-md shadow-sm ml-40  mt-5 "
        />
        <img
          src={s2}
          alt="Sofa 2"
          className="rounded-md shadow-sm ml-40 mt-5 "
        />
      </div>
    </div>
  );
};

export default Description;
