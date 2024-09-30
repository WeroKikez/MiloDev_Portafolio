import HeaderBar from './components/HeaderBar'
import AboutCard from './components/AboutCard'

function App() {
  return (
    <>
    <HeaderBar />
    
    <div className='md:h-[90vh]'>
      <AboutCard />
    </div>

    <div className='text-center flex justify-center py-5 bg-black mt-20 md:mt-0'>
      <h2 className='text-4xl font-bold text-white'>Projects</h2>
    </div>
    </>
  )
}

export default App
