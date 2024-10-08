import TechTag from "./TechTag"

type ProjectCardProps = {
    project: {
        id: number,
        title: string,
        tech: {
            name: string,
            color: string
        }[]
    }
}

function ProjectCard({project} : ProjectCardProps) {
  return (
    <div className="bg-black text-white py-10 px-5 ">
        <a href="" target="_blank"><h2 className="text-center text-4xl font-bold underline">{project.title}</h2></a>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat laboriosam velit ea deserunt veritatis quae ab sint odit. Facilis sapiente adipisci asperiores dolor corporis nobis repudiandae provident dolores neque a.</p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.tech.map( tech => (
                <TechTag key={tech.name} {...tech} />
            ))}
        </div>
    </div>
  )
}

export default ProjectCard