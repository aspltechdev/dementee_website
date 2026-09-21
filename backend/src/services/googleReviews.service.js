const getGoogleReviews = async () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is missing");
  }

  if (!placeId) {
    throw new Error("GOOGLE_PLACE_ID is missing");
  }

  const url =
    `https://places.googleapis.com/v1/places/${placeId}` +
    `?fields=id,displayName,rating,userRatingCount,reviews,googleMapsUri`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "id,displayName,rating,userRatingCount,reviews,googleMapsUri"
    }
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Google Places API error:", errorText);

    throw new Error("Failed to fetch Google reviews");
  }

  const data = await response.json();

  const reviews = (data.reviews || []).map((review) => ({
    author:
      review.authorAttribution?.displayName || "Google User",

    authorPhoto:
      review.authorAttribution?.photoUri || null,

    rating:
      review.rating || 0,

    text:
      review.text?.text ||
      review.originalText?.text ||
      "",

    relativeTime:
      review.relativePublishTimeDescription || "",

    publishTime:
      review.publishTime || null
  }));

  return {
    placeId: data.id || null,

    placeName:
      data.displayName?.text || "De mentee Academy",

    rating:
      data.rating || 0,

    totalReviews:
      data.userRatingCount || 0,

    reviews,

    googleMapsUri:
      data.googleMapsUri || null
  };
};

module.exports = {
  getGoogleReviews
};