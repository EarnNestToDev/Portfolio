import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Card = () => {
  return (
    <div className="p-2 w-[200px] h-auto aspect-[9/16]">
      <LiteYouTubeEmbed
        aspectHeight={16}
        aspectWidth={9}
        id={"mnJud2eDZqA"}
        title={"VideoDemo"}
      />
    </div>

  );
}


export default Card;
