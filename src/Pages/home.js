import '../App.css'
import Bracket1 from '../Images/Bracket 1.png'
import Bracket2 from '../Images/Bracket 2.png'

export function Home() {
    return (
        <>
        <head>
            <title>Home</title>
        </head>
        <div className='container'>
            <div className='container2'>
            <div className='homeheader'>Andrea Borġ</div>
            <div className='homesubheader'>Front-End Website Developer</div>
            <div className='cards'>
            
            <div className='card1'>
            <img src={Bracket1} alt='leaf bracket left' className='bracket-left'/>
            <div>
            <p className='quote'>“Make it simple, but significant.”</p><br/>
            <p className='speaker'>- Don Draper</p>
            </div>
            <img src={Bracket2} alt='leaf bracket right' className='bracket-right'/>
            </div>

            <div className='card2'>
            <img src={Bracket1} alt='leaf bracket left' className='bracket-left'/>
            <div>
            <p className='quote'>"Design is intelligence made visible." </p><br/>
            <p className='speaker'>– Alina Wheeler</p>
            </div>
            <img src={Bracket2} alt='leaf bracket right' className='bracket-right'/>
            </div>

            <div className='card3'>
            <img src={Bracket1} alt='leaf bracket left' className='bracket-left'/>
            <div>
            <p className='quote'>“Design is a solution to a problem. Art is a question.”</p><br/>
            <p className='speaker'>- Don Draper</p>
            </div>
            <img src={Bracket2} alt='leaf bracket right' className='bracket-right'/>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}