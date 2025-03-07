import React from "react";
import "./AppDownload.css";

// Import images
import mobileApp1 from "../../assets/Phone.png";
import mobileApp2 from "../../assets/Screen.png";
import appStoreBadge from "../../assets/google.png";
import googlePlayBadge from "../../assets/google.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="app-download-content">
        <h2>Manage Your Services by your Mobile Phone</h2>
        <p>
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <div className="app-buttons">
          <a href="#" className="store-badge">
            <img src={appStoreBadge} alt="Download on the App Store" />
          </a>
          <a href="#" className="store-badge">
            <img src={googlePlayBadge} alt="Get it on Google Play" />
          </a>
        </div>
      </div>
      <div className="app-download-images">
        <img
          src={mobileApp1}
          alt="Mobile App Preview 1"
          className="mobile-image"
        />
        <img
          src={mobileApp2}
          alt="Mobile App Preview 2"
          className="mobile-image"
        />
      </div>
    </section>
  );
};

export default AppDownload;
