import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatPet} from '../utils/helpers'
import {withRouter} from 'react-router-dom'

class Pet extends Component {
  viewPetDetails = (e,id) => {
    e.preventDefault()
    this.props.history.push(`/pet/${id}`)
  }

  render() {
    const {pet} = this.props

    if(pet === null){
      return <p> There are no such pet details available in store</p>
    }

    const { name, avatar, breed , id, gender, age} = pet

    return (
      <div className='question-details'>
        <div className='author-name'>
          <span>{name}</span>
        </div>
        <div className='question-avatar'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
          />
        </div>
        <div className='question-peek'>
          <span>Age : {age}</span>
          <p>Gender : {gender}</p>
        </div>
        <div className='question-viewpoll'>
          <button
            className='view-poll-btn'
            onClick={(e)=>this.viewPetDetails(e,id)}>
            View Pet Details
          </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({authedUser,users, pets} , props) => {
  const {id} = props
  const pet = pets[id]

  return {
    authedUser,
    pet : pet
      ? formatPet(pet,users,authedUser)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Pet))
