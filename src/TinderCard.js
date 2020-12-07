
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css'

function TinderCards() {

    const [people, setPeople] = useState([
        { name: "Martha Higadera", url: 'https://www.sectorcine.com/wp-content/uploads/2019/10/martha-higareda-taquilla.jpg' },
        { name: "jinx", url: 'https://www.mobafire.com/images/champion/skins/landscape/jinx-odyssey.jpg' },
        { name: 'Miss Fortune', url: 'https://www.esportmaniacos.com/wp-content/uploads/2020/09/3bd4f438c46122b68bdc48e676874ecf674724aer1-1184-698v2_uhq.jpg' }

    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        console.log("-> " +direction)
        //setLastDirection(direction);
    }

    const outOfFrame = (name) =>{
        console.log( name + " leftTheScreen");
    } /**alt + 96 */
    return (
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                   
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                        >
                        <div 
                           className="card"
                            style={ {backgroundImage: `url(  ${person.url} )` }} >
                        <h3>{person.name}</h3>
                        </div>      
                    </TinderCard>
             

                ) )}
            </div>

        </div>
    )

    
}

export default TinderCards;
