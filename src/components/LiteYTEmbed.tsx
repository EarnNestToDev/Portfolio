import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YTLite({
    id,
    aspectHeight,
    aspectWidth
}: {
    id: string,
    aspectHeight: number,
    aspectWidth: number
}) {
    return (
        <LiteYouTubeEmbed
            id={id}
            title={"VideoDemo"}
            aspectHeight={aspectHeight}
            aspectWidth={aspectWidth}
            lazyLoad={true}
            noCookie={true}
        />
    )
}