import './App.css'
import DesktopNav from './component/navigation/DesktopNav'
import MobileNav from './component/navigation/MobileNav'
import PersonalInfo from './component/PersonalInfo'
import checkmark from './assets/icon-checkmark.svg'
import NextPrevBtn from './component/NextPrevBtn'
import Plans from './component/Plans'
import AddOn from './component/AddOn'
import Summary from './component/Summary'
import ThankYou from './component/ThankYou'
import { useSelector } from 'react-redux'

function App() {
  const currentPage = useSelector(state => state.currentPage)
  return (
    <main className='main'>

      <section className='nav-section'>
        <section className='desktop-navigation'>
          <DesktopNav />
        </section>
        <section className='mobile-navigation'>
          <MobileNav />
        </section>
      </section>

      <section className='form-section'>
        <section className={currentPage === 1 ? 'active' : 'deactive'}><PersonalInfo /></section>
        <section className={currentPage === 2 ? 'active' : 'deactive'}><Plans /></section>
        <section className={currentPage === 3 ? 'active' : 'deactive'}><AddOn /></section>
        <section className={currentPage === 4 ? 'active' : 'deactive'}><Summary /></section>
        <section className={currentPage === 5 ? 'active' : 'deactive'}><ThankYou /></section>
      </section>

      <section className={`next-previous-btn-section ${currentPage > 4 ? 'confirmed' : ''}`}>
        <NextPrevBtn />
      </section>

    </main >
  )
}

export default App
