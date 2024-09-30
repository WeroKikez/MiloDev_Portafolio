import TechTag from "./TechTag"
import ProfilePhoto from "../assets/ProfilePhoto_Squeare.webp"

function AboutCard() {
  return (
    <div className="flex text-center items-center">
        <div className="mx-auto mt-28 text-center w-2/3 lg:w-2/3 xl:w-1/2">
        
        <h2 className='text-center text-5xl font-bold mb-10'>About Me</h2>
        
        <div className='bg-black text-white py-10 px-5 lg:pl-5 lg:pr-10 md:grid md:grid-cols-2 rounded-lg'>
            <div className='flex flex-col border-b-2 mb-10 md:mb-0 border-gray-800 md:border-none'>
                <img className='rounded-full w-3/5 mx-auto' src={ProfilePhoto} alt="Profile Photo" />
                <h3 className='text-center text-4xl font-bold mt-5'>Emiliano Enriquez</h3>

                <div className="mt-5 flex flex-col gap-1 py-5 px-5 mx-auto bg-zinc-900 rounded-lg mb-10 md:mb-0">
                    <p><span className="font-bold">Age:</span> 18 years old</p>
                    <p><span className="font-bold">Location:</span> Guadalajara, Jalisco</p>
                    <p><span className="font-bold">Languages:</span> Spanish, English, French</p>
                </div>
            </div>
            
            <div className='flex flex-col justify-evenly'>
                <h3 className='text-center text-3xl font-bold mb-4'>Full Stack Web Developer</h3>
                <p className='text-xl text-center mb-5'>
                    I'm a software developer with a passion for creating innovative solutions to complex problems. I have a strong background in web development and a passion for creating beautiful and functional websites. I'm a quick learner and a team player, and I'm always looking for new challenges.
                </p>

                <div className="flex flex-wrap gap-2 text-center justify-center">
                    <TechTag name="ReactJs" color="blue" />
                    <TechTag name="NodeJs" color="emerald" />
                    <TechTag name="PHP" color="purple" />
                    <TechTag name="Laravel" color="red" />
                    <TechTag name="MongoDB" color="emerald" />
                    <TechTag name="MySQL" color="blue" />
                    <TechTag name="Tailwind" color="purple" />
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default AboutCard