import {
  HLSVideo,
  Media,
  MediaOutlet,
  MediaPlayer,
  MediaProvider,
} from "@vidstack/react";
import React, { useRef, useState } from "react";
import VideoBuffering from "./Buffering";
import MediaPlayerUI from "./MediaPlayerUi";
import { VideoContainer } from "./styles";
import VideoSubtitles from "./Subtitles";

const VideoPlayer = ({
  poster,
  proxy,
  src,
  title,
  subTitle,
  subtitles,
  skipTimes,
  data,
  currentEpisode,
}) => {
  const mediaPlayerRef = useRef(null);
  const [showSubtitles, setShowSubtitles] = useState(true);

  return (
    <VideoContainer>
      <MediaPlayer
        src={proxy ? `${proxy}/${src}` : src}
        poster={poster || ""}
        userIdleDelay={4000}
        aspectRatio={16 / 9}
        ref={mediaPlayerRef}
      >
        <MediaOutlet />
        <VideoBuffering />
        <VideoSubtitles
          subtitles={subtitles}
          showSubtitles={showSubtitles}
          setShowSubtitles={setShowSubtitles}
        />
        <MediaPlayerUI
          title={title || "??"}
          subTitle={subTitle || "??"}
          showSubtitles={showSubtitles}
          setShowSubtitles={setShowSubtitles}
          skipTimes={skipTimes}
          data={data}
          currentEpisode={currentEpisode}
        />
      </MediaPlayer>
    </VideoContainer>
  );
};

export default VideoPlayer;
