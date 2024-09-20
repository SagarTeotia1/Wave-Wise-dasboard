import React, { useState, useEffect } from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

// Importing local videos
import video2 from "assets/videos/video1.mp4";
import video3 from "assets/videos/video2.mp4";
import video4 from "assets/videos/video3.mp4";
import video5 from "assets/videos/video4.mp4";
import video6 from "assets/videos/video5.mp4";

function Games() {
  const videos = [
    { title: "Game 1", src: video2, link: "https://www.spatial.io/s/Players-Home-6619708170f7d10e5463d1da" },
    { title: "Game 2", src: video3, link: "https://www.spatial.io/s/Candy-Ocean-Island-66ad986db897b3c7ab62d2a4?share=6104731384507341487" },
    { title: "Game 3", src: video4, link: "https://www.spatial.io/s/Speed-Boat-63f92f5a8170f13702bcf39f?share=8559979261193162016" },
    { title: "Game 4", src: video5, link: "https://external-link-to-game-4.com" },
    { title: "Game 5", src: video6, link: "https://external-link-to-game-5.com" },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleNextVideo = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const games = [
    { title: "Game A", description: "A thrilling action game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-a.com" },
    { title: "Game B", description: "An exciting adventure game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-b.com" },
    { title: "Game C", description: "A captivating puzzle game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-c.com" },
    { title: "Game D", description: "A fast-paced racing game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-d.com" },
    { title: "Game E", description: "An immersive RPG game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-e.com" },
    { title: "Game F", description: "A strategic board game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-f.com" },
    { title: "Game G", description: "A fun educational game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-g.com" },
    { title: "Game H", description: "A sports simulation game.", image: "https://img.freepik.com/premium-photo/underwater-seafloor-scene-with-treasure-chest-cartoon-game-background-ocean-underwater-world-with-fish-algae-coral-weed-oceanic-wildlife-painting_76964-404517.jpg?w=996", link: "https://external-link-to-game-h.com" },
  ];

  return (
    <VuiBox p={3}>
      {/* Video Slider (Top Section) */}
      <VuiBox mb={4} textAlign="center" position="relative">
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              display: index === activeVideoIndex ? "block" : "none",
              position: "relative",
            }}
          >
            <video
              width="100%"
              height="300" // Reduced height for video slideshow
              autoPlay
              muted
              loop
              style={{
                borderRadius: "12px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay Text and Play Now Button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                padding: "10px 20px",
              }}
            >
              <VuiTypography variant="h4">{video.title}</VuiTypography>
              <Button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => window.open(video.link, "_blank")}
              >
                Play Now
              </Button>
            </div>
          </div>
        ))}

        {/* Slider Navigation Controls */}
        <button
          onClick={handlePrevVideo}
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#10094; {/* Left arrow symbol */}
        </button>
        <button
          onClick={handleNextVideo}
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#10095; {/* Right arrow symbol */}
        </button>
      </VuiBox>

      {/* Game Cards Section with 4 cards */}
      <VuiBox display="flex" justifyContent="space-between" flexWrap="wrap" mb={3}>
        {games.slice(0, 4).map((game, index) => (
          <Card
            key={index}
            style={{
              width: "22%",
              margin: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={game.image}
              alt={game.title}
            />
            <CardContent>
              <VuiTypography
                variant="h5"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                {game.title}
              </VuiTypography>
              <VuiTypography variant="body2" color="textSecondary">
                {game.description}
              </VuiTypography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px", width: "100%" }}
                onClick={() => window.open(game.link, "_blank")}
              >
                Play Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </VuiBox>

      {/* Game Cards Section with remaining cards */}
      <VuiBox display="flex" justifyContent="space-between" flexWrap="wrap">
        {games.slice(4).map((game, index) => (
          <Card
            key={index}
            style={{
              width: "22%",
              margin: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={game.image}
              alt={game.title}
            />
            <CardContent>
              <VuiTypography
                variant="h5"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                {game.title}
              </VuiTypography>
              <VuiTypography variant="body2" color="textSecondary">
                {game.description}
              </VuiTypography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px", width: "100%" }}
                onClick={() => window.open(game.link, "_blank")}
              >
                Play Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </VuiBox>
    </VuiBox>
  );
}

export default Games;
