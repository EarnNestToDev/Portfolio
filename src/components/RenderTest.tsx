import React, { useState } from "react";

import Card from "@/components/CardTest1";
import Carousel from "@/components/main/projects/CarouselPopup";

const RenderTest = () => {

  const [test, setTest] = useState<React.ReactNode | null>(null);

  const renderContentPopUp = () => {
    setTest(<Carousel path_img="image/projects/6/" n_elements={10} />);
    document.getElementById("popUp")?.classList.replace("hidden", "fixed");
    return
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{test}</h1>
      <button onClick={() => renderContentPopUp()}>Update</button>
    </div>
  );
}


export default RenderTest;
