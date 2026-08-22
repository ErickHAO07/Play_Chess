import ChessPlay from '../components/ChessPlay';
import Rooke from '../assets/DigitalRook.Webp'



function Home() {
    return (


        <div className="flex flex-col bg-amber-200 w-full min-h-dvh m-auto">

            <div className="flex justify-around   ">
                <ChessPlay />

                <div className='flex flex-col self-center bg-amber-50 '>
                    <h1 className='font- text-4xl ' >Play Chess with Us!</h1>
                    <input type="button" value="Start" className='bg-amber-900 w-1/2 self-center rounded-md text-white ' />
                </div>

            </div>

            <div className='flex flex-row w-full justify-between px-4'>

                <div className='w-1/4'>
                    <h2 className='text-3xl'>Learn chess with us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, dignissimos. Blanditiis provident aliquid tempore ratione ducimus nesciunt eum eius similique. Odit natus error exercitationem voluptatum at ex magni.</p>
                    <input type="button" value="Play chess" className='bg-amber-900 w-1/3 self-center rounded-md text-white' />
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


        </div>
    )
}

export default Home;