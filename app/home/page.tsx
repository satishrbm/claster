import Image from 'next/image'
import Header from '@/app/component/Header'
import Hero from '@/app/component/Hero'
import Redsection from '@/app/component/Redsection'
import Trashy from '@/app/component/Trashy'
import Footer from '@/app/component/Footer'
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Redsection />
        <Trashy />
      </main>
    </div>
  )
}
