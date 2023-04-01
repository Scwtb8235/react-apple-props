import React, { useEffect, useState } from "react";
//import YouTube from "react-youtube";
//import axios from "axios";
import "../../App.css";
function Youtube() {
  const [Youtube, setYoutube] = useState([]);
  // const fetchVideos = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyAyP7lFaBzd1cZfgu1GruSIgaXCR48T3k8"
  //     );
  //     setYoutube(response.data.items);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // fetchVideos()
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyAyP7lFaBzd1cZfgu1GruSIgaXCR48T3k8"
    )
      .then((res) => res.json())
      .then((data) => setYoutube(data.items))
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {Youtube.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt={singleVideo.snippet.title}
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
            
      </div>
    </>
  );
  // const opts = {
  //   height:"190",
  //   width:"350",
  //   playerVars:{
  //     autoplay:0,
  //   },

  // };
  // return (
  //   <div className="container">
  //     <h1 className="text-center m-3"> Recent Apple Videos </h1>
  //     <div className="row">
  //       {Youtube.map((video) => (
  //         <div key={video.id} className="col-md-4 p-3 mx-auto">
  //           <YouTube videoId={video.id} opts={opts} />
  //           <h5 className="fw-bold">{video.snippet.title}</h5>
  //           <p>{video.snippet.description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default Youtube;


