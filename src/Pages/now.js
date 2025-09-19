import '../App.css'
import underconstruction from '../Images/under-construction.png'

export function Now() {
    return (
        <>
        <head>
            <title>Now Page</title>
        </head>
        <div className='container'>
            <img src={underconstruction} alt='This page is still under construction!' className='under-construction'/>
            </div>
            </>
    );
}