import {Component} from 'react'
import UserProfile from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    usersDetailslist: initialTodosList,
  }

  deleteUser = uniqueNo => {
    const {usersDetailslist} = this.state
    const filteredUserData = usersDetailslist.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({usersDetailslist: filteredUserData})
  }

  render() {
    const {usersDetailslist} = this.state

    return (
      <div className="container">
        <ul className="list-container">
          <h1 className="heading">Simple Todos</h1>
          {usersDetailslist.map(eachUser => (
            <UserProfile
              usersDetails={eachUser}
              key={eachUser.id}
              daleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos

