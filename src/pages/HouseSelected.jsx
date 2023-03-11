import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HouseSelected = () => {
  const [houseInfo, setHouseInfo] = useState(null);
  const { houseId } = useParams();

  const houseDataInfo = async () => {
    try {
      const response = await axios.get(
        `https://wizard-world-api.herokuapp.com/Houses/${houseId}`
      );
      setHouseInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    houseDataInfo();
  }, []);
  return (
    <div>
      {houseInfo && (
        <div>
          <h3>{houseInfo.name}</h3>
          <h4>{houseInfo.founder}</h4>
          <h4>{houseInfo.houseColours}</h4>
          <h4>{houseInfo.element}</h4>
          <ul>
            traits
            {houseInfo.traits.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HouseSelected;
