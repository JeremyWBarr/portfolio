import { Helmet } from "react-helmet"
import './App.css'
import Header from './Header'
import BG from './bg'

import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV'
import Games from './pages/Games'
import Contact from './pages/Contact'

function App() {
  let body

  switch(window.location.pathname) {
    case '/':
      body = <About />
      break
    case '/about':
      body = <About />
      break
    case '/projects':
      body = <Projects />
      break
    case '/cv':
      body = <CV />
      break
    case '/games':
      body = <Games />
      break
    case '/contact':
      body = <Contact />
      break
    default:
      body = <About />
  }

  return (
    <>
      <Helmet>
        <script src="scrollManager.js" type="text/javascript"></script>
      </Helmet>
      <Header />
      <BG />
      {body}
    </>
  )
}

export default App
