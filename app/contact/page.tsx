'use client'

import { useState } from 'react'
import { Clipboard, ClipboardCheck } from 'lucide-react'
import { Constant } from '@/app/type/constant'

export default function contact() {
  const [copied, setCopied] = useState<boolean[]>(
    new Array(Constant.ContactInfoList.length).fill(false),
  )

  const handleCopy = async (index: number, string: string) => {
    try {
      await navigator.clipboard.writeText(string)
      setCopied((prev) => {
        const newCopied = [...prev]
        newCopied[index] = true
        return newCopied
      })

      setTimeout(() => {
        setCopied((prev) => {
          const newCopied = [...prev]
          newCopied[index] = false
          return newCopied
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  return (
    <>
      <div className="mt-16 px-[10px] md:px-20 mb-40">
        <h2 className="text-primary text-center text-4xl md:text-7xl">
          {Constant.pageTitlecontact}
        </h2>
        <div className="flex flex-wrap justify-center mt-10 text-center space-y-10 md:px-[4rem]">
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
            <p className="text-3xl mb-4 italic text-black">
              <b>{Constant.ContactInfo}</b>
            </p>
            {Constant.ContactInfoList.map((item, index) => (
              <p key={index} className="text-3xl mb-2 text-black">
                <b>{item.label}</b> {item.desc}
                {item.copy ? (
                  <span>
                    {copied[index] ? (
                      <svg
                        className="inline-flex ml-2 cursor-pointer"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3079 5.61501V4.07655C13.3079 3.66852 13.1458 3.27721 12.8573 2.98869C12.5688 2.70018 12.1774 2.53809 11.7694 2.53809H10.231"
                          stroke="green"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.38462 16.3842H2.53846C2.13043 16.3842 1.73912 16.2221 1.4506 15.9336C1.16209 15.6452 1 15.2538 1 14.8458V4.07655C1 3.66852 1.16209 3.27721 1.4506 2.98869C1.73912 2.70018 2.13043 2.53809 2.53846 2.53809H4.07692"
                          stroke="green"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.4617 8.69238H11.7694C10.9198 8.69238 10.231 9.38118 10.231 10.2308V19.4616C10.231 20.3113 10.9198 21.0001 11.7694 21.0001H19.4617C20.3114 21.0001 21.0002 20.3113 21.0002 19.4616V10.2308C21.0002 9.38118 20.3114 8.69238 19.4617 8.69238Z"
                          stroke="green"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6155 1H3.69238L4.32315 3.49231C4.36158 3.65912 4.45563 3.80789 4.58984 3.91414C4.72406 4.02038 4.89043 4.0778 5.06161 4.07692H9.24623C9.41741 4.0778 9.58378 4.02038 9.718 3.91414C9.85221 3.80789 9.94626 3.65912 9.98469 3.49231L10.6155 1Z"
                          stroke="green"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => handleCopy(index, item.desc)}
                        className="inline-flex ml-2 cursor-pointer"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3079 5.61501V4.07655C13.3079 3.66852 13.1458 3.27721 12.8573 2.98869C12.5688 2.70018 12.1774 2.53809 11.7694 2.53809H10.231"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.38462 16.3842H2.53846C2.13043 16.3842 1.73912 16.2221 1.4506 15.9336C1.16209 15.6452 1 15.2538 1 14.8458V4.07655C1 3.66852 1.16209 3.27721 1.4506 2.98869C1.73912 2.70018 2.13043 2.53809 2.53846 2.53809H4.07692"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.4617 8.69238H11.7694C10.9198 8.69238 10.231 9.38118 10.231 10.2308V19.4616C10.231 20.3113 10.9198 21.0001 11.7694 21.0001H19.4617C20.3114 21.0001 21.0002 20.3113 21.0002 19.4616V10.2308C21.0002 9.38118 20.3114 8.69238 19.4617 8.69238Z"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6155 1H3.69238L4.32315 3.49231C4.36158 3.65912 4.45563 3.80789 4.58984 3.91414C4.72406 4.02038 4.89043 4.0778 5.06161 4.07692H9.24623C9.41741 4.0778 9.58378 4.02038 9.718 3.91414C9.85221 3.80789 9.94626 3.65912 9.98469 3.49231L10.6155 1Z"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3076 13.3076H17.923"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3076 16.3848H17.923"
                          stroke="black"
                          strokeWidth="1.53846"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm"></span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
