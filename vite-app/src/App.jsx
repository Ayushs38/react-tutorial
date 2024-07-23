import './App.css'
import Header from './components/header/Header'
import Home from './components/home/home/Home'
import Button from 'react-bootstrap/Button';


function handleClick() {
  alert("helloee everone!")
}

function MyButton() {

  return (
    <>
      

      <button onClick={handleClick} className='btn btn-primary'>
        I'm a button
      </button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <Button variant="link">Link</Button>
    </>


  );
}

function App() {

  return (
    <>
      <Header />
      <Home />
      <MyButton />
      <footer></footer>
    </>
  )
}

export default App
