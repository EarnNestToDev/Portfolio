import React, { useState } from "react";

import CarouselPopup from "@/sections/main/projects/CarouselPopup";

import Popup from "@/components/ui/PopupFullscreen";

const RenderPopup = ({
  json,
  defaultDecorate,
  url_video,
  icon,
  title
}: {
  json: JSON_PATH[];
  defaultDecorate: string;
  url_video?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <button
        title="Ver imágenes del proyecto"
        className={defaultDecorate}
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {icon}
        {title}
      </button>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {
          <CarouselPopup
            json_url_img={json}
            url_video={url_video}
          />
        }
      </Popup>

    </>
  );
}

type JSON_PATH = {
  url: string;
  title: string;
}


export default RenderPopup;
