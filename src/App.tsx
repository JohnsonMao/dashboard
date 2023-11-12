import Activity from './components/Activity'
import Banner from './components/Banner'
import Donate from './components/Donate'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Policy from './components/Policy'
import Service from './components/Service'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <Activity />
        <Policy />
      </Main>
      <Donate />
      <Service />
      <Footer />
    </>
  )
}

export default App
