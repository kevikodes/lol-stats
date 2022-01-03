import React from "react";
import styled from "styled-components";

const ChampionCard = ({ champion }) => {
  return (
    <Container>
      <ChampionName>{champion.name}</ChampionName>
      <ChampionImage
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.key}
      />
      <ChampionBlurb>{champion.blurb}</ChampionBlurb>
    </Container>
  );
};

export default ChampionCard;
const Container = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChampionName = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const ChampionImage = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
`;

const ChampionBlurb = styled.div`
  font-size: 1.1rem;
  line-height: 1.3rem;
  margin: 10px;
  width: 400px;
`;
