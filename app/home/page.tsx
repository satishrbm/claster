import Hero from '@/app/component/Hero'
import Redsection from '@/app/component/Redsection'
import Trashy from '@/app/component/Trashy'

export default function HomePage() {
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
