import "./test.css";
import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("Antwone Adams");
  const [email, setEmail] = useState("adams.antwone@yahoo.com");
  const [dataVisible, setDataVisible] = useState(false);

  const getData = () => {
    if (dataVisible) {
      return (
        <div>
          <h3>{name}</h3>
          <h4>{email}</h4>
        </div>
      );
    } else {
      return <label>Click on the buton</label>;
    }
  };

  const handleClick = () => {
    setDataVisible(true);
  };

  return (
    <div className="test-page">
      {getData()}

      <button onclick={handleClick} className="btn btn-info">See my info</button>
    </div>
  );
};
/* jhsdfhhsdh */
export default Test;
