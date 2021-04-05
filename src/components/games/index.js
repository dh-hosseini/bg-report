import { useEffect, useState } from 'react';
import Game from './../game'
import './style.css';

const Games = ({data}) => {
    const [games, setGames] = useState([]);
    const [filter, setFilterFn] = useState('');

    useEffect(() => {
        const games = {};
        data.forEach(element => {
            const id = '_' + element.Item.ID
            if (!games[id]) {
                games[id] = {
                    ...element.Item,
                    plays: [element]
                }
            } else {
                games[id].plays.push(element);
            }
        });
        const gamesArray = Object.values(games);
        setGames(gamesArray)
    }, [data]);

    const setFilter = (e) => {
        setFilterFn(e.target.value);
    }
    return (
        <div id={`games`}>
            <div className={'search-wrapper'}>
                <input placeholder='Search Board Name' className={'search-input'} onChange={setFilter} />
            </div>
            {games.filter(i => i.Name.toLowerCase().includes(filter.toLowerCase())).map((game) => (
                <Game key={game.ID} data={game}/>
            ))}
        </div>
    )
}

export default Games;