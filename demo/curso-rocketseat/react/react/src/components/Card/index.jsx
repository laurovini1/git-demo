import './style.css';

export function Card({name, time, idade}) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}