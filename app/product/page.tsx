import { Constant } from '../type/constant'

export default function Product() {
  return (
    <>
      <div className="mt-16 px-[10px] md:px-20">
        <h2 className="text-primary text-center text-4xl md:text-7xl">
          {Constant.pageTitleProduct}
        </h2>
        <div className="flex flex-wrap justify-center mt-10 text-center space-y-10 px-[10px] md:px-[5rem]">
          {Constant.ProductItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-8 mt-10">
              <h3 className="text-4xl mb-2 mb-2">{item.title}</h3>
              <p className="text-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 px-[10px] md:px-20">
        <h2 className="text-primary text-center text-4xl md:text-7xl">
          {Constant.producttoOrderTitle}
        </h2>
        <div className="flex flex-wrap justify-center mt-2 md:mt-10 text-center space-y-10">
          {Constant.ProducttoOrderItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-8 mt-10">
              <h3 className="text-4xl mb-2">{item.title}</h3>
              <p className="text-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 px-[10px] md:px-20 mb-40">
        <h2 className="text-primary text-center text-4xl md:text-7xl">
          {Constant.barbequetitle}
        </h2>
        <div className="flex flex-wrap justify-center md:mt-10 text-center space-y-10">
          {Constant.barbequeItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-8 mt-10">
              <h3 className="text-4xl mb-2">{item.title}</h3>
              <p className="text-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
