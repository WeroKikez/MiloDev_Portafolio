// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons' 
import { faSquareThreads } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 


function HeaderBar() {
  return (
    <header className='flex justify-evenly items-center bg-black text-white h-20'>
        <nav className='flex gap-4'>
            <a
                className='' 
                href="About"
            >About</a>
            <a
                className='' 
                href="Contact"
            >Contact</a>
            <a
                className=''
                href="Projects"
            >Projects</a>
        </nav>
        <h2 className='text-3xl font-bold uppercase text-center '>Portafolio</h2>
        <div className='flex gap-4'>
            <a href="https://github.com/WeroKikez" target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} size='2xl'/>
            </a>
            <a href="https://www.threads.net/@werokikez" target='_blank'>
                <FontAwesomeIcon icon={faSquareThreads} size='2xl'/>
            </a>
            <a href="">
                <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </a>
        </div>
    </header>
  )
}

export default HeaderBar