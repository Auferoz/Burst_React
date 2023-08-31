import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function CardGames({ apiType }) {
    const Colors = {
        success: 'border-green-600',
        warning: 'border-yellow-600',
        info: 'border-cyan-600',
        danger: 'border-red-600',
        completed: 'border-cyan-600',
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const GET_API_GAMES = 'https://sheetdb.io/api/v1/uj1vwr8ger7n8?sheet=_GamesP_2023';
        const GET_API_SERIES = 'https://sheetdb.io/api/v1/uj1vwr8ger7n8?sheet=_TVShow_2023';
        const GET_API_MOVIES = 'https://sheetdb.io/api/v1/uj1vwr8ger7n8?sheet=_MoviesL_2023';

        const apiUrls = {
            games: GET_API_GAMES,
            series: GET_API_SERIES,
            movies: GET_API_MOVIES,
        };

        fetch(apiUrls[apiType])
            .then(response => response.json())
            .then(apiData => {
                const sortedData = apiData.sort((a, b) => b.id - a.id);
                setData(sortedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [apiType]);


    return (
        <section
            className="grid gap-5 justify-center max-w-full my-0 mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
            {data.map(game => (
                <article key={game.id}>

                    <div className={`group relative rounded-md leading-5 overflow-hidden transition-all duration-300 ease-linear border-2 ${Colors[game.color]}`}>
                        <a>
                            <img src={game.poster} width="100%"
                                className="scale-100 transition-all duration-300 ease-linear 
                                group-hover:scale-125 group-hover:rounded-md group-hover:transition-all group-hover:duration-300 group-hover:ease-linear" />
                        </a>
                        <div className="w-full absolute bottom-0 left-0 pt-28 px-3 pb-1 transition-all duration-300 ease-linear 
                            bg-gradient-to-b from-gray-700/5 to-blue-950/90 to-100%
                            group-hover:from-gray-700/5 group-hover:to-blue-950/95 group-hover:to-50%
                            group-hover:transition-all group-hover:duration-300 group-hover:ease-linear">
                            <div className="flex items-center justify-between py-2 px-0">
                                <div className="left-content">
                                    <h3 className="font-nunito text-white m-0 font-semibold text-lg truncate w-48 
                                        group-hover:whitespace-normal group-hover:overflow-visible">
                                        {game.title}
                                    </h3>
                                    <p className="font-sans text-cyan-400 m-0 font-normal text-xs capitalize truncate w-48
                                        group-hover:whitespace-normal group-hover:overflow-visible">
                                        {game.released} - <span>{game.companie}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="max-h-0 opacity-0 border-t-2 border-gray-500/30 overflow-hidden transition-all duration-300 ease-linear
                                group-hover:max-h-52 group-hover:opacity-100 group-hover:py-2 group-hover:px-0">
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-list"></i> Genres: {game.genres}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-star"></i> Rating: {game.rating}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="{game.platform_icon}"></i> Platform: {game.platform_name}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-trophy"></i> Trophy: {game.achievements_obt} / {game.achievements_ttl}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-clock"></i> Hours Played: {game.hours_mttf}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-calendar-day"></i> Date Start: {game.date_start}
                                </p>
                                <p className="font-nunito text-white text-xs m-0 pb-1 truncate">
                                    <i className="fa-solid fa-calendar-check"></i> Last Date: {game.last_dayplay}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );


}

export default CardGames;