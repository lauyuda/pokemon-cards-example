import { Pokedex } from "./pages/pokemonPage";

function App() {
  return (
    <main class="bg-gray-50">
      <div class="max-w-4xl mx-auto px-3 py-12 space-y-6">
        <div class="mb-8">
          <div>
            <h1 class="text-6xl mb-4 font-extrabold">Pokemons @ React Day Care</h1>
            <p>These are the pokemons that we are proudly taking care of.</p>
          </div>
        </div>
        <Pokedex />
      </div>
    </main>
  );
}

export default App;
