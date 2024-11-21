// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatch

  return (
    <div className="lm-card-cont">
      <h1 className="lm-head">Latest Match</h1>
      <div className="lm-card">
        <div className="lm-logo-cont">
          <div className="lm-details-main">
            <p className="lm-team-name">{competingTeam}</p>
            <p className="lm-date">{date}</p>
            <p className="lm-venue">{venue}</p>
            <p className="lm-status">{result}</p>
          </div>
          <img
            className="lm-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="lm-details-info">
          <div className="match-info-item">
            <p className="lm-label">First Innings</p>
            <p className="lm-value">{firstInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="lm-label">Second Innings</p>
            <p className="lm-value">{secondInnings}</p>
          </div>
          <div className="match-info-item">
            <p className="lm-label">Man Of The Match</p>
            <p className="lm-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info-item">
            <p className="lm-label">Umpires</p>
            <p className="lm-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
