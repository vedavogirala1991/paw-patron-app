import React, {Component} from 'react'
import happypet from '../images/happy-pet.png'
import tickspet from '../images/ticks-pet.png'
import vet from '../images/vet.png'
import recordspet from '../images/records-pet.png'
import paw from '../images/paw-hand6.png'
import bone from '../images/bone-cream.png'
import collar from '../images/collar.png'
import findpet1 from '../images/find-pet1.png'
import findpets from '../images/find-pets1.png'
import findpet2 from '../images/find-pet2.png'
import lovecomm1 from '../images/love-comm1.png'
import lovecomm2 from '../images/love-comm2.png'
import lovecomm3 from '../images/love-comm3.png'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/product5.png'
import product6 from '../images/product6.png'

class Home extends Component {
  login = (e) => {
    e.preventDefault()
    this.props.history.push(`/signin`)
  }

  render() {
    return (
      <div className='pphomepage'>
        <div className='welcomepp'>
          <h1 className='care-text-heading'>Welcome to <img className='pplogo-intro' src={paw} alt='PawPatron App'/><span className='paw-heading'>Paw</span>Patron!!</h1>
          <div className='petcare-container'>
            <div className='petcare-text'>
              <h1 className='care-text'>We'll take care of your <span className='rainbow-pets'>PETS<sup>*</sup></span></h1>
              <p className='pp-intro'>
              We are an interactive platform between <span className='intro-highlight'>pet owner</span>,<br/>
              <span className='intro-highlight'>sitters</span> and <span className='intro-highlight'>clinics</span> to make it easier to use the adoption<br/>
              services, finding the right sitter for your little family, <br/>
              along with pet clinic services as well as the treatment<br/>
              process and clinic administration</p>
              <div className='login-container'>
                <img className='intro-bone' src={bone} alt='PawPatron App'/>
                <button className='register-btn' onClick={(e)=>this.login(e)}>Register here</button>
                <button className='services-btn'>Our Services</button>
                <img className='intro-bone' src={collar} alt='PawPatron App'/>
              </div>
            </div>
            <div className='petcare-bg'>
              <img className='happy-pets' src={happypet} alt='Happy Pets'/>
            </div>
          </div>
        </div>
        <div className='services-container'>
          <div className='dreampet-flex'>
            <div className='dreampet-container'>
              <div className='petcare-text'>
                <img className='find-pet-1' src={findpet2} alt='Ticks Pets'/>
                <button className='adopt-btn' onClick={(e)=>this.login(e)}>Adopt a pet</button>
                <p className='pp-intro'>
                  If you are looking for a means to adopt helpless animals who need
                  a new home, the PawPatron is perfect for you. We will help you
                  find the perfect forever furry companion, and provide you with any
                  and all types of services that you need in taking care of your pet.
                </p>
              </div>
              <div className='find-bg1'>
                <h1 className='find-pet-text'>Find your <span className='dream-blue'>dream</span> pet here</h1>
                <img className='find-pets' src={findpets} alt='Ticks Pets'/>
              </div>
            </div>
          </div>
          <div className='vet-flex'>
            <div className='petcare-container'>
              <div className='petcare-text'>
                <h1 className='find-text'>Find the best Veterinarian services and Sitters for your dog nearest to your location</h1>
                <button className='yourpets-btn' onClick={(e)=>this.login(e)}>Your Pets</button>
                <img className='vet-clinic' src={vet} alt='Vet Clinic'/>
              </div>
              <div className='find-bg1'>
                <img className='records-pets' src={recordspet} alt='Ticks Pets'/>
                <p className='pp-intro'>
                  Access thousands of Sitters and Veterinarians instanly from the comfort of your home with our application.
                  You can easily contact and arrange a meet with them according to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='join-community'>
          <div className='joincomm-flex'>
            <h1 className='join-text'>Join our community to view and vote the best furry babies registered with us.</h1>
            <button className='joinus-btn' onClick={(e)=>this.login(e)}>Join us</button>
            <div><img className='love-comm1' src={lovecomm1} alt='Love Communnity'/></div>
          </div>
          <div className='showus-love'>
            <img className='love-comm2' src={lovecomm2} alt='Vet Clinic'/>
            <p className='showus-love-text'>Show us your love by liking our community pets and support us in providing the best services for you.</p>
            <img className='love-comm3' src={lovecomm3} alt='Vet Clinic'/>
          </div>
          <div className='support-flex'>
            <p className='supportus-text'>
              Support us by exploring our pet store that contains wide range of products that satisfy your pet needs.
            </p>
            <div className='products'>
              <img className='product-icon' src={product1} alt='Ticks Pets'/>
              <img className='product-icon' src={product2} alt='Ticks Pets'/>
              <img className='product-icon' src={product3} alt='Ticks Pets'/>
            </div>
            <div className='products'>
              <img className='product-icon' src={product4} alt='Ticks Pets'/>
              <img className='product-icon' src={product5} alt='Ticks Pets'/>
              <img className='product-icon' src={product6} alt='Ticks Pets'/>
            </div>
            <button className='store-btn' onClick={(e)=>this.login(e)}>Go to store</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
