import React from "react";
import "./VideoIntroduction.css";
import { FaLightbulb } from "react-icons/fa";
import Video from "../../assets/video.png";

const VideoIntroduction = () => {
  return (
    <section className="video-introduction">
      <div className="video-text">
        <h2 className="section-title">Our Video Introductions</h2>
        <p className="section-description">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>

        <div className="video-points">
          <div className="point">
            <FaLightbulb className="icon" />
            <div>
              <h3>Explore ideas together</h3>
              <p>
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
          </div>

          <div className="point">
            <FaLightbulb className="icon" />
            <div>
              <h3>Bring those ideas to life</h3>
              <p>
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-container">
        <img src={Video} alt="" />
        <div className="video-thumbnail">
          <img src="/assets/video-thumbnail.jpg" alt="Video Thumbnail" />
          <div className="play-button">▶</div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
