import { Constant } from '@/app/type/constant'
export default function Header() {
  return (
    <ul className="flex justify-around md:justify-end font-ropa gap-4 md:gap-8 md:px-20 py-5">
      {Constant.menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.href} className={`text-3xl  text-black`}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
