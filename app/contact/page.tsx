import { Constant } from '@/app/type/constant'

export default function contact() {
  return (
    <>
      <div className="mt-16 px-[10px] md:px-20 mb-40">
        <h2 className="text-primary text-center text-4xl md:text-7xl">
          {Constant.pageTitlecontact}
        </h2>
        <div className="flex flex-wrap justify-center mt-10 text-center space-y-10 md:px-[5rem]">
          <div className="w-full xl:w-1/2 mt-10">
            <iframe
              className="w-full h-[320px]"
              src={Constant.contactmapiframe}
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full xl:w-1/3 px-8 text-left">
            <h3 className="text-4xl mb-4 text-[#B11F29]">
              {Constant.contactSubtitle}
            </h3>
            <p className="text-2xl mb-4 italic">
              <b>{Constant.ContactInfo}</b>
            </p>
            {Constant.ContactInfoList.map((item, index) => (
              <p key="index" className="text-2xl mb-2">
                <b>{item.label}</b> {item.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
