'use client'
import { Constant } from '@/app/type/constant'
import { useState } from 'react'

export default function faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="mt-16 px-[10px] md:px-20 mb-12">
        <h2 className="text-primary text-center text-4xl md:text-7xl mb-10">
          FAQ
        </h2>
        <p className="italic text-center text-3xl md:text-4xl font-400">
          Často kladené otázky.
          <br />V případě jiné otázky mi zavolejte
        </p>
      </div>
      <div className="p-10 px-[10px] md:p-20 md:px-20 mb-20 md:mb-40 bg-[#B11F29]">
        <div className="max-w-6xl mx-auto p-6">
          <div className="border-t-2 border-gray-300">
            {Constant.faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-gray-300 pr-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left pb-5 pt-2  flex justify-between items-center text-3xl md:text-4xl text-white font-medium"
                >
                  {faq.question}
                  <span className="text-white text-6xl font-normal pb-2">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-3 text-[#fcfcfc] text-2xl md:text-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
