import reactSVG from '../../assets/react.svg'
import Options from './components/Options'

export default function Header() {
  const subOptionTest = [
    {
      name: "option 1",
      link: "#",
      subOptions: [
        { name: "sub sub option 1", 
          link: "#", 
          subOptions: [{ name: "sub sub sub option 1", link: "#" }] },
        { name: "sub sub option 2", link: "#" }
      ]
    }
  ]
  return (
    <header className="fixed h-full bg-blue-500 p-4 text-white">
      <img src={reactSVG} alt="Logo" />
      <div className='flex flex-col gap-2'>
        <Options icon={reactSVG} name="React" link="https://react.dev/" subOptions={subOptionTest} />
        <Options icon={reactSVG} name="React" link="https://react.dev/" />
        <Options icon={reactSVG} name="React" link="https://react.dev/" />
      </div>
    </header>
  );
}