import './index.css'

const UserProfile = props => {
  const {usersDetails, daleteUser} = props

  const {title, uniqueNo} = usersDetails
  const onDelete = () => {
    daleteUser(uniqueNo)
  }

  return (
    <li className="container">
      <p className="title">{title}</p>
      <button className="button" onClick={onDelete} alt="delete">
        Delete
      </button>
    </li>
  )
}

export default UserProfile
