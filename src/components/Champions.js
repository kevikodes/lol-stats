import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChampionCard from "./ChampionCard";

const Champions = () => {
  const [champions, setChampions] = useState(null);
  const fetchChampions = async () => {
    await axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json"
      )
      .then((res) => {
        const championList = Object.values(res.data.data);

        console.log(championList);
        setChampions(championList);
      });
  };

  useEffect(() => {
    fetchChampions();
    console.log(champions);
  }, []);
  return (
    <Container>
      {champions &&
        champions.map((champion) => {
          return <ChampionCard key={champion.key} champion={champion} />;
        })}
    </Container>
  );
};

export default Champions;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
