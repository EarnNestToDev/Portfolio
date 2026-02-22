import React, { useState } from "react";

import Popup from "@/components/ui/PopupFullscreen";

import Carrousel from "@/sections/main/projects/Carrousel";
import LYTEmbed from "@/components/LiteYTEmbed";

const renderPopup = ({
  json,
  defaultDecorate,
  url_video,
  icon,
  name_button: title
}: {
  json: JSON_FORMAT[];
  defaultDecorate: string;
  url_video?: string;
  icon: React.ReactNode;
  name_button: React.ReactNode;
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
          <Carrousel content={setContent(json, url_video)} />
        }
      </Popup>

    </>
  );
}


function setContent(json: JSON_FORMAT[], video?: string) {
  let content = [];

  if (video) {
    content.push(
      insertVideo(video)
    );
  }

  for (let index = 0; index < json.length; index++) {
    content.push(
      <img
        key={index}
        src={json[index].url}
        alt={json[index].title}
        loading="lazy"
        className="rounded-lg h-auto w-full md:h-full md:w-auto"
      />
    );
  }

  return content;
}

function insertVideo(video?: string) {
  if (!video) return null;
  return (
    <div className="rounded-lg w-full h-auto md:w-auto md:h-full md:aspect-video">
      <LYTEmbed
        id={video}
        aspectHeight={9}
        aspectWidth={16}
      />
    </div>
  );
}

type JSON_FORMAT = {
  url: string;
  title: string;
}

export default renderPopup;