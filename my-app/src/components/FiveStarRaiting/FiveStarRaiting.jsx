import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";

function FiveStarRating({ rating }) {
  const starList = [];
  
 
  const starFilledCount = Math.floor(rating / 1.6); 
  const isStarHalf = rating % 1.6 >= 0.8; 
  const starEmptyCount = 5 - starFilledCount - (isStarHalf ? 1 : 0);

  for (let i = 0; i < starFilledCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (isStarHalf) {
    starList.push(<StarHalf key="star-half" />);
  }

  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}

export default FiveStarRating;
