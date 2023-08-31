import CardGames from './CardGames';

function App() {

  return (
    <>
      <main className="w-full max-h-screen flex  flex-col p-6">

        <header>
          <h1 className="text-2xl font-nunito mt-4 mb-10">
            ¬ Games Played 2023
          </h1>
        </header>

        <CardGames apiType="games" />


        <header>
          <h1 className="text-2xl font-nunito my-10">
            ¬ Series View 2023
          </h1>
        </header>


        {/* <CardGames apiType="series" /> */}


        <header>
          <h1 className="text-2xl font-nunito my-10">
            ¬ Movies View 2023
          </h1>
        </header>


        {/* <CardGames apiType="movies" /> */}

      </main>
    </>
  )
}

export default App
