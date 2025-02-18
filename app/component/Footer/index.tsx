import { Constant } from '@/app/type/constant'

export default function Footer() {
  return (
    <div className="px-[10px] md:px-20 pb-10">
      <div className="mb-20">
        <ul className="flex justify-between flex-wrap text-3xl font-bold">
          <li className="w-full md:w-1/2 mb-2">
            <a href="/product" className="text-black">
              {Constant.pageTitleProduct}
            </a>
          </li>
          <li className="w-full md:w-1/2 mb-2 md:text-right">
            <a href="/contact" className="text-black">
              {Constant.pageTitlecontact}
            </a>
          </li>
          <li className="w-full md:w-1/2 mb-2">
            <a href="/faq" className="text-black">
              {Constant.pageTitlefaq}
            </a>
          </li>
          <li className="w-full md:w-1/2 mb-2 md:text-right">
            <a href="#" className="text-black">
              {Constant.pageTitleGallery}
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <p className="text-black/50 text-right text-2xl md:text-[32px]">
          {Constant.madeby}
        </p>
      </div>
    </div>
  )
}
