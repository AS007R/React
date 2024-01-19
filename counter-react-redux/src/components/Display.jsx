import { useSelector } from "react-redux";
import PrivacyMessege from "./PrivacyMessege";

const Display = () => {
  const count = useSelector((state) => state.counter);
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      {privacy ? (
        <PrivacyMessege />
      ) : (
        <p className="card-text">Counter value is: {count} </p>
      )}
    </>
  );
};

export default Display;
