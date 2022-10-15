import RankingStyle from "../styles/RankingStyle";
import trophy from "../styles/ranking.png";
export default function Ranking() {
  return (
    <RankingStyle>
      <div>
        <img src={trophy} alt="Trophy" />
        <span>Ranking</span>
      </div>
      <div>
        <ul>
          <li>
            <span>1.</span>
            <span>Fulaninha</span> - <span>32 links</span> -
            <span>1.703.584</span>
          </li>
          <li>
            <span>1.</span>
            <span>Fulaninha</span> - <span>32 links</span> -
            <span>1.703.584</span>
          </li>
          <li>
            <span>1.</span>
            <span>Fulaninha</span> - <span>32 links</span> -
            <span>1.703.584</span>
          </li>
          <li>
            <span>1.</span>
            <span>Fulaninha</span> - <span>32 links</span> -
            <span>1.703.584</span>
          </li>
          <li>
            <span>1.</span>
            <span>Fulaninha</span> - <span>32 links</span> -
            <span>1.703.584</span>
          </li>
        </ul>
      </div>
    </RankingStyle>
  );
}
