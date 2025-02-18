import { Constant } from '@/app/type/constant'
export default function Hero() {
  return (
    <div className="bg-hero-bg md:[background-size:cover] [background-size:cover] -mt-[70px] px-20 min-h-[650px] flex justify-end flex-col pb-24 bg-size-full">
      <ul className="md:flex justify-end gap-8">
        <li className="flex text-center md:mb-0 mb-5">
          <a
            href="#"
            className="w-full text-center flex-1 border-2 border-white pt-[5px] pb-[13px] px-[18px] text-4xl text-white"
          >
            {Constant.herobuttonproduct}
          </a>
        </li>
        <li className="flex text-center">
          <a
            href="#"
            className="w-full text-center flex-1 border-2 border-white pt-[5px] pb-[13px] px-[18px] text-4xl text-white"
          >
            {Constant.herobuttoncontact}
          </a>
        </li>
      </ul>
    </div>
  )
}
