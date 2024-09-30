import { techBorderColors, techColors } from "../utils/colors";

type TechTagProps = {
    name: string;
    color: string;
}

function TechTag({ name, color } : TechTagProps) {
  return (
    <div className={`px-2 py-1 rounded-lg border-2 ${techBorderColors[color]} mt-2`}>
        <p className={`font-light ${techColors[color]} text-sm`}>{name}</p>
    </div>
  )
}

export default TechTag