const {
  getGoogleReviews
} = require("../services/googleReviews.service");

const getReviews = async (req, res) => {
  try {
    const data = await getGoogleReviews();

    res.status(200).json(data);
  } catch (error) {
    console.error("Reviews controller error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load Google reviews"
    });
  }
};

module.exports = {
  getReviews
};