

interface Props {
  icon?: string;
  name: string;
  link: string;
  level?: number;
  subOptions?: Props[];
}

export default function Options({ icon, name, link, subOptions, level = 0 }: Props) {

  return (
    <div className="w-full pl-4">
      <div aria-level={level + 1} className="flex flex-col items-center gap-2 hover:bg-blue-600 rounded">
        <div className="flex w-full">
          {icon && <img src={icon} alt={`icon-${name.replaceAll(" ", "-")}`} />}
          <a href={link} >{name}</a>
        </div>
        {subOptions && subOptions.map((subOption) => <Options icon={subOption.icon} name={subOption.name} link={subOption.link} subOptions={subOption.subOptions} level={level + 1}/>)}
      </div>
    </div>
  )
}