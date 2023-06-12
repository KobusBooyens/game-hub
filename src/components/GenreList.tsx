import React from 'react'
import useGenre from "../Hooks/useGenre";

export const GenreList = () => {
    const { genre } = useGenre()

    return (
        <ul>
            {genre.map(g => <li key={g.id}> {g.name}</li>)}
        </ul>
    )
}
