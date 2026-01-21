import React, { useState } from "react";

import View from "@/components/icons/photo";
import Carousel from "@/components/main/projects/CarouselPopup";

const RenderPopup = ({
  url,
  n_elements,
  defaultDecorate,
  url_video
}: {
  url: string;
  n_elements: number;
  defaultDecorate: string;
  url_video?: string;
}) => {

  const [test, setTest] = useState<React.ReactNode | null>(null);

  const renderContentPopUp = () => {
    setTest(<Carousel
      path_img={url}
      n_elements={n_elements}
      killContentPopUp={killContentPopUp}
      url_video={url_video}
    />);
    return
  }

  const killContentPopUp = () => {
    setTest(null);
    return
  }

  return (
    <>
      <a
        title="Ver imágenes del proyecto"
        className={defaultDecorate}
        onClick={() => {
          renderContentPopUp()
        }}
      >
        <View size={36} color="white" />
      </a>
      {test}
    </>
  );
}


export default RenderPopup;
