import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [houses, setHouses] = useState([]);

  const dataHouse = async () => {
    try {
      const response = await axios.get(
        "https://wizard-world-api.herokuapp.com/Houses"
      );
      setHouses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataHouse();
  }, []);

  return (
    <div>
      {houses.map((elem) => {
        return (
          <div>
            <h2>{elem.name}</h2>
            <h3>founder: {elem.founder}</h3>
            <Link to={`/house/${elem.id}`}>See more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
