// @ts-expect-error TS(2307): Cannot find module '../images/star.svg' or its cor... Remove this comment to see the full error message
import { ReactComponent as Star } from "../images/star.svg";

export default function Stars({ rating }: any) {
  return (
    <>
      <Star fill={rating > 0 ? "gold" : "lightgray"} />
      <Star fill={rating > 1 ? "gold" : "lightgray"} />
      <Star fill={rating > 2 ? "gold" : "lightgray"} />
      <Star fill={rating > 3 ? "gold" : "lightgray"} />
      <Star fill={rating > 4 ? "gold" : "lightgray"} />
    </>
  );
}
