
import React, { useState, useEffect } from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput"; // Assuming there's an input component
import UserIcon from '@mui/icons-material/Person'; // Example icon from Material-UI

function Vlog() {
  // Initialize main card comments from local storage
  const initializeMainComments = () => {
    const savedMainComments = localStorage.getItem("mainCardComments");
    return savedMainComments ? JSON.parse(savedMainComments) : [];
  };

  const [mainComments, setMainComments] = useState(initializeMainComments);
  const [newMainComment, setNewMainComment] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); // State to hold selected post

  // Save main card comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("mainCardComments", JSON.stringify(mainComments));
  }, [mainComments]);

  // Handle adding a new comment to the main card
  const handleAddMainComment = () => {
    if (newMainComment.trim()) {
      setMainComments([...mainComments, { user: "User", comment: newMainComment }]);
      setNewMainComment(""); // Clear the input after adding the comment
    }
  };

  // Blog posts for the four small cards
  const blogPosts = [
    { 
      title: "Importance of Marine Life", 
      content: "Marine life is crucial for the balance of the ocean ecosystem and human life.",
      fullContent: "Marine life, ranging from microscopic plankton to giant whales, plays an essential role in maintaining the ocean's health. These organisms support ecosystems that regulate the Earth's climate, produce oxygen, and provide food for billions of people globally. Protecting marine life ensures the sustainability of both ocean and human life.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/12/17/14/33/wave-1913559_1280.jpg",
      imageLink: "https://wave-wise-dasboard.vercel.app/blog"
    },
    { 
      title: "Ocean Acidification", 
      content: "Rising CO2 levels are leading to the acidification of our oceans, harming marine life.",
      fullContent: "Ocean acidification occurs as the ocean absorbs excess CO2 from the atmosphere, leading to a lower pH and harming marine life, especially shellfish and corals. This process disrupts food chains and weakens marine biodiversity. Combatting acidification requires reducing carbon emissions and promoting conservation efforts.",
      imageUrl: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",
      imageLink: "https://wave-wise-dasboard.vercel.app/blog"
    },
    { 
      title: "Coral Reef Conservation", 
      content: "Efforts to protect and restore coral reefs are essential for biodiversity.",
      fullContent: "Coral reefs, often called the 'rainforests of the sea', are vital ecosystems supporting thousands of marine species. They protect coastlines, provide food and income, and are sources of new medicines. Threatened by climate change and pollution, their conservation involves reducing local stressors and promoting sustainable practices.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/12/17/14/33/wave-1913559_1280.jpg",
      imageLink: "https://wave-wise-dasboard.vercel_1280..app/blog"
    },
    { 
      title: "Sustainable Fishing", 
      content: "Sustainable fishing practices are necessary to protect fish populations and ocean health.",
      fullContent: "Overfishing disrupts marine ecosystems and depletes fish populations, threatening food security and livelihoods. Sustainable fishing includes catch limits, protecting breeding grounds, and avoiding endangered species. These practices help maintain fish stocks, ensuring a healthy ocean and thriving communities for generations to come.",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/fishing-729481_1280.jpg",
      imageLink: "https://wave-wise-dasboard.vercel.app/blog"
    }
  ];

  // Handle when a small card is clicked
  const handleCardClick = (index) => {
    setSelectedPost(blogPosts[index]);
    setMainComments([]); // Clear the comments for new post
  };

  return (
    <VuiBox p={3}>
      {/* Main Container for Ocean Sustainability Info with Comment Section */}
      <VuiBox display="flex" flexDirection="column" mb={6} p={3} sx={{ backgroundColor: "#212121", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", color: "white" }}>
        {/* Content Section */}
        <VuiBox display="flex">
          {/* Left-side Image */}
          <VuiBox mr={3} width="30%">
            <img 
              src={selectedPost ? selectedPost.imageUrl : "https://cdn.pixabay.com/photo/2016/12/17/14/33/wave-1913559_1280.jpg"} 
              alt="Ocean" 
              style={{ width: "100%", height: "67vh", borderRadius: "8px" }} 
            />
          </VuiBox>

          {/* Ocean Sustainability Info */}
          <VuiBox width="70%">
            <VuiTypography variant="h4" color="white" mb={3}>
              {selectedPost ? selectedPost.title : "Ocean Sustainability: Preserving Our Blue Planet"}
            </VuiTypography>
            <VuiTypography variant="body1" color="white" mb={2}>
              {selectedPost ? selectedPost.fullContent : (
                <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                  <li>The ocean is a vital part of Earth's ecosystem, providing essential services like climate regulation, food, and oxygen.</li>
                  <li>Overfishing, pollution, and climate change threaten the sustainability of our oceans.</li>
                  <li>Marine ecosystems are crucial for biodiversity, supporting a vast array of species.</li>
                  <li>Sustainable practices are needed to protect these environments for future generations.</li>
                  <li>Conservation efforts, including reducing plastic waste and promoting renewable energy, are key to protecting the ocean.</li>
                  <li>The time to act is now – preserving the ocean is not only for the environment but for humanity's future.</li>
                </ul>
              )}
            </VuiTypography>
            {/* Image Link Button */}
            {selectedPost && (
              <VuiButton 
                color="info" 
                href={selectedPost.imageLink} 
                target="_blank"
                sx={{ mt: 2 }}
              >
                View Source
              </VuiButton>
            )}
          </VuiBox>
        </VuiBox>

        {/* Comment Section */}
        <VuiBox mt={4}>
          <VuiTypography variant="h5" color="white" mb={2}>
            Comments
          </VuiTypography>
          {mainComments.map((commentData, index) => (
            <VuiBox key={index} display="flex" alignItems="center" mb={1}>
              <UserIcon sx={{ color: "white", mr: 1 }} />
              <VuiTypography variant="body2" color="white">
                <strong>{commentData.user}: </strong>{commentData.comment}
              </VuiTypography>
            </VuiBox>
          ))}
          <VuiInput
            placeholder="Add a comment..."
            value={newMainComment}
            onChange={(e) => setNewMainComment(e.target.value)}
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <VuiButton color="info" onClick={handleAddMainComment}>
            Add Comment
          </VuiButton>
        </VuiBox>
      </VuiBox>

      {/* Blog Post Cards */}
      <VuiBox display="flex" justifyContent="space-between">
        {blogPosts.map((post, index) => (
          <VuiBox
            key={index}
            width="23%"
            p={3}
            sx={{
              backgroundColor: "#333",
              borderRadius: "8px",
              color: "white",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(index)} // Click handler to select a post
          >
            <VuiTypography variant="h6" color="white" mb={2}>
              {post.title}
            </VuiTypography>
            <VuiTypography variant="body2" color="white" mb={2}>
              {post.content}
            </VuiTypography>
            <VuiButton color="info">View</VuiButton>
          </VuiBox>
        ))}
      </VuiBox>
    </VuiBox>
  );
}

export default Vlog;
