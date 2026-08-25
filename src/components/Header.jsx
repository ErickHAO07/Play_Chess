

function Header() {
    return (
        <header className="bg-Theme  w-full h-10">
            <nav className="text-white  sm:text-xs md:text-2xl lg:text-3xl w-[97%] h-full flex gap-20 justify-end items-center">
                <a href="">Logar</a>
                <a href="">Play</a>
                <a href="">Home</a>
                <a className="bg-BottonTheme px-10 py-1.5 rounded-md  " href="">Login</a>
            </nav>

        </header>
    )
}
export default Header;