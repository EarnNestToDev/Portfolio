import React, { useState } from "react";

import View from "@/components/icons/photo";

import Carousel from "@/components/main/projects/CarouselPopup";

const RenderPopup = ({
  json,
  defaultDecorate,
  url_video
}: {
  json: JSON_PATH[];
  defaultDecorate: string;
  url_video?: string;
}) => {

  const [test, setTest] = useState<React.ReactNode | null>(null);

  const renderContentPopUp = () => {
    setTest(
      <Carousel
        json_url_img={json}
        killContentPopUp={killContentPopUp}
        url_video={url_video}
      />
    );
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
        <View width={36} height={36} fill="white" />
      </a>
      {test}
    </>
  );
}

type JSON_PATH = {
  url: string;
  title: string;
}


export default RenderPopup;
