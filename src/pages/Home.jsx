import ChessPlay from '../components/ChessPlay';
import Rooke from '../assets/DigitalRook.Webp';
import ChessLevels from '../assets/ChessEvolution.Webp'



function Home() {
    return (


        <div className="grid grid-cols-1 gap-10 place-items-center  bg-transparent w-full min-h-dvh mt-6">

            <div className='flex flex-col items-center w-full text-white '>

                <ChessPlay />
                <h1 className='text-fluid-title font-trebuchet font-bold mt-auto ' >Play Chess with us!</h1>
                <p className=' font-arial w-3/5 text-fluid-text  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus adipisc</p>
                <input type="button" value="Start" className=' w-3/7 h-10 bg-botton-theme self-center rounded-md text-fluid-subtitle font-helvetica font-bold text-white ' />
            </div>

            <div className='flex flex-col items-center '>
                <h2 className='text-fluid-title text-white'>Chalenge yourself Against our AI</h2>

                <img className=' '
                    src={Rooke}
                    alt="Digital chess rook piece "
                    width={200}
                    height={200} />
            </div>


            <div className='flex flex-col w-full items-center'>


                <h2 className='text-3xl text-white '>Improve your Chess skills with us</h2>
                <p className='  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia blanditiis. Ad et expedita id eum itaque eius odit nostrum culpa molestiae quis. Accusantium quisquam qui adipisci unde, reprehenderit et.</p>

                <img className=''
                    src={ChessLevels}
                    alt='Take your chees skills to the next level'
                    width={400}
                    height={100} />


                <input className='w-3/7 text-2xl text-white bg-blue-600 self-center' type="button" value="Start practice" />
            </div>


        </div>
    )
}

export default Home;