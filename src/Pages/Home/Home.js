import React from 'react'
import "./Home.css"
import homeImg from '../Home/HomeImg.jpg'

const Home = () => {
  return (
    <div className='home'>
     <h1 className='homeTitle'>Welcome</h1>
     <div className='description'>
      <span className='paragraph'>
        Lorem ipsum dolor sit amet. 
        Et voluptas dolorem ut veniam quia est debitis corrupti.
        Vel facilis maiores sit itaque doloremque eos quidem esse vel 
        impedit minus sed rerum veniam sit velit iure et ipsum doloribus. 
        Et unde doloremque vel nihil debitis sit amet libero At quis quae ad 
        expedita ipsam sit nesciunt aperiam. Et Quis dignissimos ab corporis
        quia et perspiciatis inventore. Et illo dolorem est quasi ipsam ut 
        asperiores itaque et necessitatibus nisi est consequatur laudantium 
        non molestiae Quis qui facilis rerum? Qui corrupti amet At adipisci 
        deserunt et consequatur ullam aut dolores omnis in esse beatae cim 
        nostrum dolor non ullam dolorem. Aut maxime exercitationem ut quia 
        enim est dolorem Quis.

      </span>
      <div>

      <img className='MainImg' src={homeImg} alt='homeImg'/>
      </div>
      </div>
      </div>
  )
}

export default Home