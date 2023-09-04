function Modal() {

    return (
        <>
            <section className="w-[500px] h-auto p-2 border-2 border-sky-600 rounded-lg">
            {/* <section className="w-[500px] h-auto p-2 border-2 border-sky-600 rounded-lg bg-[#242424] absolute z-50"> */}
                <header className="border-b-2 pb-2 border-sky-600 flex justify-between">
                    <h1>Sea of Stars</h1>
                    <span>X</span>
                </header>
                <main className="pt-2">
                    <h2 className="font-nunito">Form / Add new Game</h2>

                    <form className="pt-4">

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_title" id="floating_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_title" className="font-nunito peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Game Title
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_released" id="floating_released" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_released" className="font-nunito peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Game Released
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_companie" id="floating_companie" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_companie" className="font-nunito peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Game Companie
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_poster" id="floating_poster" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_poster" className="font-nunito peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Game Poster
                            </label>
                        </div>


                    </form>
                </main>
                <footer>

                </footer>
            </section>
        </>
    )
}

export default Modal
