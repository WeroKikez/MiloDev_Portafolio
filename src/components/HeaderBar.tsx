// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons' 
import { faSquareThreads } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 


function HeaderBar() {
  return (
    <header className='flex flex-col gap-5 md:gap-0 md:flex-row md:justify-around items-center bg-black text-white py-8'>
        <nav className='flex gap-6 md:gap-4 text-xl'>
            <a
                className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3' 
                href="about"
            >About</a>
            <a
                className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3' 
                href="contact"
            >Contact</a>
            <a
                className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3'
                href="projects"
            >Projects</a>
        </nav>
        
        <div className='flex gap-8'>
            <a href="https://github.com/WeroKikez" target='_blank' className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3'>
                <FontAwesomeIcon icon={faSquareGithub} size='3x'/>
            </a>
            <a href="https://www.threads.net/@werokikez" target='_blank' className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3'>
                <FontAwesomeIcon icon={faSquareThreads} size='3x'/>
            </a>
            <a href="" className='hover:scale-125 transition-all duration-300 md:hover:-translate-y-2 md:hover:px-3'>
                <FontAwesomeIcon icon={faLinkedin} size='3x'/>
            </a>
        </div>
    </header>
  )
}

export default HeaderBar