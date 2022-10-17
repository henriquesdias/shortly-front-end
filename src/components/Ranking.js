import RankingStyle from "../styles/RankingStyle";
import trophy from "../styles/ranking.png";
import { getRanking } from "../services/axios";

import { useState, useEffect } from "react";

export default function Ranking() {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    getRanking()
      .then((answer) => {
        setRanking(answer.data);
      })
      .catch((answer) => {
        console.log(answer);
      });
  }, []);
  return (
    <RankingStyle>
      <div>
        <img src={trophy} alt="Trophy" />
        <span>Ranking</span>
      </div>
      <div>
        <ul>
          {ranking.map((e, index) => (
            <li key={index}>
              <span>{index + 1}.</span>
              <span>{e.name}</span> - <span>{e.linksCount} links</span> -
              <span>{e.visitCount} visualizações</span>
            </li>
          ))}
        </ul>
      </div>
    </RankingStyle>
  );
}
