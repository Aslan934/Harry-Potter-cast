import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.actor}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.alive ? ('Alive') : ('Dead')}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.dateOfBirth ? (item.dateOfBirth) : ('Unknown')}
                        </li>
                        <li>
                            <strong>Ancestry:</strong> {item.ancestry ? (item.ancestry) : ('Unknown')}
                        </li>
                        <li>
                            <strong>House:</strong> {item.house}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
