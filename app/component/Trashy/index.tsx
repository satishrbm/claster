import { Constant } from '@/app/type/constant'
export default function Trashy() {
  return (
    <div className="px-[10px] py-[50px] md:px-40 md:py-[150px]">
      <div className="bg-primary md:max-w-[898px] mx-auto p-[10px] md:p-10 md:px-[4rem]">
        <h3 className="text-white text-center text-4xl md:text-7xl border-b border-[#9b9b9b] pb-10 mb-8">
          {Constant.trasytitle}
        </h3>
        <div className="flex-1 md:flex flex-wrap gap-8 mb-8 ">
          {Constant.scheduleTime.map((item, index) => (
            <div
              key={index}
              className="bg-body-bg text-black md:w-[calc(50%-12px)] mb-5 md:mb-0 p-5 pb-8"
            >
              <h2 className="md:font-semibold text-4xl mb-2">{item.time}</h2>
              <h3 className="font-thin text-2xl md:text-[28px] mb-3">
                {item.lable}
              </h3>
              <h4 className="text-2xl md:text-[28px]">{item.desc}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
