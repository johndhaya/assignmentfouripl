// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img className="tc-img" src={imageUrl} alt={name} />
        <p className="tc-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
