export const NavBar = () => {
    return (
        <nav className="flex flex-col gap-4 h-screen bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2">
            <div>
                <img src="https://soildata.mapbiomas.org/logos/navbar/soildata-m.png" alt="Logo SoilData" className="max-w-full p-2" />
            </div>
            <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
                <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Home</li>
                <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Games</li>
                <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Top 10</li>
                <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
            </ul>
            <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
                <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">User</li>
            </ul>
        </nav>
    )
}