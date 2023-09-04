import CardGames from './components/CardGames';
import Modal from './components/Modal';

function App() {

  return (
    <>
      <main className="w-full max-h-screen flex  flex-col p-6">

        <Modal />

        <header>
          <h1 className="text-2xl font-nunito text-gray-200 mt-4 mb-10">
            ¬ Games Played 2023
          </h1>
        </header>

        <CardGames apiType="games" />


        <header>
          <h1 className="text-2xl font-nunito text-gray-200 my-10">
            ¬ Series View 2023
          </h1>
        </header>


        {/* <CardGames apiType="series" /> */}


        <header>
          <h1 className="text-2xl font-nunito text-gray-200 my-10">
            ¬ Movies View 2023
          </h1>
        </header>


        {/* <CardGames apiType="movies" /> */}

      </main>
    </>
  )
}

export default App
