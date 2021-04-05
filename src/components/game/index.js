import { useEffect, useState } from 'react';
import mobile from 'is-mobile';
import Avatar from 'react-avatar';
import "./style.css"

const Game = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleGame = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`game ${isOpen? 'is-open' : 'is-close'}`}>
            <h3 onClick={toggleGame}>{data.Name}</h3>
            {isOpen && 
            <div className='plays'>
            {data.plays.map((play)=> (
                <div key={play.ID} className={`play animated ${isOpen ? 'flipInX' : 'flipOutX'}`}>
                    <h2>{new Date(play.Date).toDateString()}</h2>
                    <div className='players'>
                        {play.Players.map((player, i) => (
                            <div key={player.name} className={`player ${player.Win ? 'win': ''}`}>
                                <div className='avatar'>  
                                    <Avatar name={player.Name} round size="40" />
                                </div>
                                <div className='player-name'>  
                                    {player.Name}
                                    {player.Score &&
                                    <div>
                                        Score: {player.Score}
                                    </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
            }
        </div>
    )
}

export default Game;