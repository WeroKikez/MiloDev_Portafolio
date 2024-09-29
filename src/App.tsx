import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <>
    <HeaderBar />

    <div className="flex text-center items-center">
      <div className="mx-auto mt-28 text-center w-2/3 lg:w-2/3 xl:w-1/2">
        <h2 className='text-center text-5xl font-bold mb-10'>About Me</h2>
        <div className='bg-black text-white py-10 px-5 md:grid md:grid-cols-2 rounded-lg'>
          <div className='flex flex-col border-b-2 mb-10 md:mb-0 border-gray-800 md:border-none'>
            <img className='rounded-full w-3/5 mx-auto' src="../public/ProfilePhoto_Squeare.jpg" alt="Profile Photo" />
            <h3 className='text-center text-4xl font-bold mt-5 mb-10 md:mb-0'>Emiliano Enriquez</h3>
          </div>
          <div className='flex flex-col justify-evenly'>
            <h3 className='text-center text-3xl font-bold mb-5'>Full Stack Web Developer</h3>
            <p className='text-xl text-center'>
              I'm a software developer with a passion for creating innovative solutions to complex problems. I have a strong background in web development and a passion for creating beautiful and functional websites. I'm a quick learner and a team player, and I'm always looking for new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
