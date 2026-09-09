import ChessPlay from '../components/ChessPlay';
import Rooke from '../assets/DigitalRook.Webp';
import ChessLevels from '../assets/ChessEvolution.Webp'



function Home() {
    return (


        <div className="grid grid-cols-1 gap-40 place-items-center  bg-transparent w-full min-h-dvh mt-6">

            <div className='flex flex-col gap-0 items-center w-full text-white '>

                <ChessPlay />
                <h1 className='text-fluid-title font-trebuchet font-bold mt-auto ' >Play Chess with us!</h1>
                <p className=' font-arial text-fluid-text  '>Join in one of the largest comunitys around the world </p>
                <input type="button" value="Start" className=' px-7 py-1 mt-1 bg-botton-theme rounded-md text-fluid-buttons font-helvetica font-bold text-white ' />
            </div>

            <div className='flex flex-col items-center text-white '>


                <h2 className='text-fluid-title font-trebuchet font-bold'>The best AI to play with</h2>
                <p className=' font-arial text-fluid-text  '>Try yourself against our AI chess model</p>
                <img className=' '
                    src={Rooke}
                    alt="Digital chess rook piece "
                    width={200}
                    height={200} />



            </div>


            <div className='flex flex-col w-full items-center text-white'>


                <h2 className='text-fluid-title font-trebuchet font-bold  '>Improve your Chess skills</h2>
                <p className='font-arial text-fluid-text  '>move your chess skills to the next level</p>

                <img className=''
                    src={ChessLevels}
                    alt='Take your chees skills to the next level'
                    width={400}
                    height={100} />


                <input type="button" value="Start practice" className='px-7 py-1 bg-botton-theme mt-1 rounded-md text-fluid-buttons font-helvetica font-bold text-white' />
            </div>


        </div>
    )
}

export default Home;