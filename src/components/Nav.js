import React,{Component} from 'react'
import {connect} from 'react-redux'
import paw from '../images/paw-hand5.png'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nv = styled.nav`
background: #161616;
height: 150px;
display: flex;
justify-content: space-between;
/*padding: 0.2rem calc((100vw - 1000px) / 2);*/
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

const NvLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
width: 70px;
cursor: pointer;
margin-top: 25px;
font-size: 13px;
&.active {
  color: #fff;
  font-weight: bold;
}
&:hover {
	transition: all 0.2s ease-in-out;
  font-weight: bold;
}
`;


const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: 90px;
margin-right: -24px;
white-space: nowrap;
// @media screen and (max-width: 768px) {
// 	display: none;
// }
`;

const NavBtn = styled.nav`
display: flex;
align-items: center;
font-size: 12px;
margin-right: 40px;
/* Third Nav */
justify-content: flex-end;
width: 100vw;
// @media screen and (max-width: 768px) {
// 	display: none;
// }
`;

const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #ff7f27;
padding: 10px 22px;
margin-top: 10px;
margin-right: 70px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
  font-weight: bold;
}
`;

class Nav extends Component {
  render () {
    const {username,avatar} = this.props
    return (
      <div className='nav-bar'>
        <div className='logo-and-title'>
          <img className='pplogo' src={paw} alt='PawPatron App'/>
          <span className='paw-title'>Paw</span><span className='patron-title'>Patron</span>
        </div>
        <NavMenu>
          <NvLink to='/' activeStyle>
            Home
          </NvLink>
          <NvLink to='/about' activeStyle>
            About
          </NvLink>
          <NvLink to='/adopt' activeStyle>
            Adopt
          </NvLink>
          <NvLink to='/sponsor' activeStyle>
            Sponsor
          </NvLink>
          <NvLink to='/rescues' activeStyle>
            Rescues
          </NvLink>
          <NvLink to='/happypaws' activeStyle>
            Tales
          </NvLink>
        </NavMenu>
        {this.props.username==null ?

          (<NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>) :

          (<nav className='nav'>
              <div className='user-nav'>
                <ul>
                  <li className='user-actions'>
                    <span className='username'>{username}</span>
                    <img
                      src={avatar}
                      alt={`Avatar of ${username}`}
                      className='nav-avatar'/>
                    <Link className='user-logout' to='/' exact activeClassName='active'>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
          </nav>)}
      </div>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  console.log('Nav :: users',users)
  console.log('Nav :: authedUser',authedUser)
  return {
    username: authedUser
      ? users[authedUser].name
      : null,
    avatar : authedUser
      ? users[authedUser].avatarURL
      : null,
  }
}

export default connect(mapStateToProps)(Nav)
