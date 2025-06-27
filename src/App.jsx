import './App.css'
import Courses from './components/Courses'
import FAQs from './components/faqs'
import HeroSection from './components/HeroSection'
import LiveNotifications from './components/LiveNotifications'
import Navbar from './components/Navbar'
import ProblemTransformation from './components/ProblemTransformation'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <div className='font-raleway min-h-screen bg-gray-900'>
      <Navbar />
      <HeroSection />
      <ProblemTransformation />
      <Courses />
      <Testimonials />
      <FAQs />
      {/* <LiveNotifications /> */}
    </div>
  )
}

export default App
