// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        className="mc-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="mc-name">{competingTeam}</p>
      <p className="mc-result">{result}</p>
      <p className="mc-status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
