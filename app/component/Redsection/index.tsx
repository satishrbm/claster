import { Constant } from '@/app/type/constant'
export default function Redsection() {
  return (
    <div className="bg-primary px-20 py-[50px] md:py-[150px] md:px-20">
      <ul className="flex justify-end gap-8 space-y-10 md:space-y-20 flex-col">
        {Constant.ProductList.map((item, index) => (
          <li
            key={index}
            className="text-white text-4xl md:text-7xl text-center font-bold font-ropa-bold"
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-20">
        <a
          href="#"
          className="border-2 border-white px-5 py-5 pt-3 text-white text-2xl md:text-4xl flex "
        >
          {Constant.viewall}
        </a>
      </div>
    </div>
  )
}
