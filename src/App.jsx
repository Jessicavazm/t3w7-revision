import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Lifecycle Components
// componentDidMount() - loads when the website initially loads.
// componentDidUpdate() - loads when there is a change in the state value.
// componentWillUnmount() - loads when the component is about to be collapsed.

// useState hook to initialise the state
function App() {
  const [count, setCount] = useState(0)
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  const getPokemonData = async () => {
    // let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 1025)}`);
    // let data = await result.json();

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 1025)}`).then(response => response.json());

    setPokemonName(response.name);
    setPokemonImage(response.sprites.front_default);
  }

  // This works like componentDidMount()
  // useEffect(callback, dependencyArray)
  // dependencyArray - whenever something changes here, the useEffect hook runs
  useEffect(() => {
    // Some other operations
    console.log('Component Mounted!');

    getPokemonData();

    // componentWillUnmount
    return (() => {
      console.log('Component will unmount now.')
    })
  }, [])

  // Works like componentDidMount() once, then componentDidUpdate() every time the value in dependencyArray changes
  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count])


  useEffect(() => {
    console.log(`Pokemon Data retrieved. Pokemon name: ${pokemonName}, Image: ${pokemonImage}`)
  },[pokemonName, pokemonImage]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
