
const PaginatedButton = ({PrevLink, NextLink, PrevDis, NextDis}) => {
    return (
        <div className="w-full">
            <nav aria-label="Page navigation example" className="flex justify-center">
                <ul className="w-full lg:w-2/5 p-5 flex flex-row justify-between">
                    <li>
                        <button onClick={PrevLink} disabled={PrevDis}className={` transition-all rounded px-2 py-1 flex flex-row items-center  ${PrevDis ? 'bg-gray-300 text-gray-500': 'bg-white text-cyan-700 hover:scale-120'}`}>
                        Previous</button>
                    </li>
                    <li>
                        <button onClick={NextLink} disabled={NextDis} className={` transition-all rounded px-2 py-1 flex flex-row items-center  ${NextDis ? 'bg-gray-300 text-gray-500': 'bg-white text-cyan-700 hover:scale-120'}`}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginatedButton