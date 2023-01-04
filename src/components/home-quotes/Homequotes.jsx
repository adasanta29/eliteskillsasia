import React from 'react';
import '../home-quotes/Homequotes.css';
import Redknapp from '../../assets/redknapp.jpg';
import Lallana from '../../assets/lallana.jpg';

const Homequotes = () => {
  return (
    <div className='homequotes'>

        <div className='homequotes__container'>

            <div className='homequotes__one'>
                <div className='quote__container'>
                    <p>"I think (the ICON) is a great tool for everyone, from youth players right up to pros. There's everything there: the touches, the awareness, body position, opening your body up to receive balls, knowing where the next pass goes… It's a great way to help improve your football at any level.”</p>
                    <h3>Harry Redknapp, FA Cup Winner (Manager)</h3>
                </div>

                <img src={Redknapp} alt="" className='quote__image'/>
            </div>

            <div className='homequotes__two'>
                <img src={Lallana} alt="" className='quote__image'/>

                <div className='quote__container'>
                    <p>“The ICON's brilliant, especially for young players working on their technique. Nowadays footballs becoming more demanding technically. Players can really practice their receiving techniques, which is one of the best assets to improve on... I'd definitely recommend it to anyone.”</p>
                    <h3>Adam Lallana, Brighton & Hove Albion (Player)</h3>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Homequotes