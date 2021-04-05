import { useEffect, useState } from 'react';
import mobile from 'is-mobile';
import Avatar from 'react-avatar';

import './style.css';

const Ranking = ({data}) => {
    const [isOpen, setIsOpen] = useState(!mobile());
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        const players = {};
        data.forEach(element => {
            element.Players.forEach(player => {
                if (!players[player.Name]) { 
                    players[player.Name] = {
                        name: player.Name,
                        wins: player.Win ? 1 : 0
                    }
                } else {
                    players[player.Name] = {
                        name: player.Name,
                        wins: player.Win ? players[player.Name].wins + 1 : players[player.Name].wins
                    }
                }
            });
        });
        const playersArray = Object.values(players);
        
        setRanks(playersArray.sort((a, b) => b.wins - a.wins));
    }, [data]);

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div id={`ranking`}  className={isOpen ? 'animated slideInRight' : 'animated slideOutRight'}>
            <div>
                <div className='handle-bar' onClick={toggleSideBar}>
                    Ranking
                </div>
            </div>
            <div id='ranks'>
                {ranks.map((player, i) => (
                    <div key={player.name} className='rank-item'>
                        <div className='avatar'>  
                            <Avatar name={player.name} round size="40" />
                            <span className='rank-score'>#{i + 1}</span>
                        </div>
                        <div className='player-name'>  
                            {player.name}
                            <div className='player-wins'>
                                wins: {player.wins}
                            </div>
                        </div>
                        
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Ranking;