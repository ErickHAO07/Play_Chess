import Header from '../components/Header'
import ChessPlay from '../components/ChessPlay';
import Footer from '../components/Footer'


import Rooke from '../assets/DigitalRook.Webp';
import ChessLevels from '../assets/ChessEvolution.Webp'



function Home() {
    return (


        <main className=' bg-transparent w-full min-h-dvh'>
            <Header />
            <div className="grid grid-cols-1 grid-flow-row  md:auto-rows-fr md:grid-cols-2 md:gap-y-30 place-items-center w-full h-full mt-10 ">

                <ChessPlay />

                <div className='flex flex-col gap-3 items-center w-full text-white mb-15 md:m-0'>

                    <h1 className='text-fluid-title font-trebuchet font-bold mt-auto ' >Play Chess with us!</h1>
                    <p className=' font-arial text-2xl text-center '>Join in one of the largest comunitys around the world </p>
                    <input type="button" value="Start" className=' px-15 py-3 mt-3 bg-botton-theme rounded-md text-fluid-buttons font-helvetica font-bold text-white ' />
                </div>
                <div className='flex flex-col items-center justify-center text-white mt-15 md:m-0'>
                    <h2 className='text-fluid-title font-trebuchet font-bold text-center'>The best AI to play with</h2>
                    <p className=' font-arial text-fluid-text  '>Try yourself against our AI chess model</p>
                    <input type="button" value="Start practice" className='px-7 py-1 bg-botton-theme mt-5 rounded-md text-fluid-buttons font-helvetica font-bold text-white' />

                    <img className=' h-auto w-50 '
                        src={Rooke}
                        alt="Digital chess rook piece " />
                </div>

                <div className='flex flex-col w-full items-center text-white'>
                    <h2 className='text-fluid-title font-trebuchet font-bold  '>Become a Master</h2>
                    <p className='font-arial text-fluid-text  '>move your chess skills to the next level</p>

                    <img className=' h-auto w-90'
                        src={ChessLevels}
                        alt='Take your chees skills to the next level' />

                </div>

            </div>
            <Footer />
        </main>
    )
}

export default Home;