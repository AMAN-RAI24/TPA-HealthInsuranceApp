import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const RatingOptions = (props) => {
  const [rating, setRating] = useState(1);
  const handle = (data) => {
    setRating(data.target.value);
    // console.log(data)
    props.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        props.actionProvider.createChatbotMessage(
          "Thank you for your feedback 😃"
        ),
      ],
    }));
  };
  return (
    <Rating
      name="size-large"
      value={rating}
      onChange={handle}
      size="large"
      style={{ display: "flex", justifyContent: "center" }}
    />
  );
};
