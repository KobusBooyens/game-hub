import React from 'react'
import useGenre from "../Hooks/useGenre";

export const GenreList = () => {
    const { data } = useGenre();

    return (
        <ul>
            {data.map(g => <li key={g.id}> {g.name}</li>)}
        </ul>
    )
}
