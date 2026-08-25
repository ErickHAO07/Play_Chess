import ChessPlay from '../components/ChessPlay';
import Rooke from '../assets/DigitalRook.Webp';
import ChessLevels from '../assets/ChessEvolution.Webp'



function Home() {
    return (


        <div className="flex flex-col bg-Theme w-full min-h-dvh m-auto">

            <div className="flex justify-around   ">
                <ChessPlay />

                <div className='flex flex-col self-center text-white  w-2/5'>
                    <h1 className='font-helvetica font-bold text-6xl  ' >Play Chess with Us!</h1>
                    <p className='font-times'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi at maiores deleniti voluptate nulla tenetur ullam eius ad laboriosam enim minima rerum rem asperiores iste eveniet, aperiam cum quaerat.</p>
                    <input type="button" value="Start" className='bg-amber-900 w-1/2 self-center rounded-md text-white ' />
                </div>

            </div>

            <div className='flex flex-row w-full justify-between px-4'>

                <div className='w-1/4'>
                    <h2 className='text-3xl'>Learn chess with us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, dignissimos. Blanditiis provident aliquid tempore ratione ducimus nesciunt eum eius similique. Odit natus error exercitationem voluptatum at ex magni.</p>
                    <input type="button" value="Play chess" className='bg-BottonTheme w-1/3 self-center rounded-md text-white' />
                </div>
                <div className=''>
                    <h2 className='text-4xl'>Chalenge yourself Against our AI</h2>

                    <img className=' '
                        src={Rooke}
                        alt="Digital chess rook piece "
                        width={200}
                        height={200} />
                </div>
            </div>

            <div className='flex flex-col w-full justify-center'>
                <img className=''
                    src={ChessLevels}
                    alt='Take your chees skills to the next level'
                    width={400}
                    height={100} />


                <h2 className='text-3xl self-center '>Improve your Chess skills with us</h2>
                <p className=' w-3/4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia blanditiis. Ad et expedita id eum itaque eius odit nostrum culpa molestiae quis. Accusantium quisquam qui adipisci unde, reprehenderit et.</p>

                <input className='w-1/7 text-2xl text-white bg-blue-600 self-center' type="button" value="Star practice" />
            </div>


        </div>
    )
}

export default Home;