import './App.css'
import NavBar from './components/NavBar.tsx'
import Container from './components/Container'
import Body from './components/Body.tsx'

function App() {
  return (
    <div className="bg-gray-800 min-h-screen w-full">
      <NavBar />
        <Container className="pt-16">
          <Body />
        </Container>
    </div>
  )
}

export default App
