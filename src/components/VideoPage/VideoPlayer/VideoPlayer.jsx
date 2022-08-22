import "../css/VideoPage.css";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ id, title }) => {
  return (
    <div className="video-player-container">
      <h2 className="h2">{title}</h2>
      <div className="video-player">
        <ReactPlayer
          url={`https://youtu.be/${id}`}
          width="100%"
          height="30rem"
          controls={true}
        />
      </div>
    </div>
  );
};

export { VideoPlayer };