import Link from "next/link"
import Image from 'next/image'
import Cake from '../public/cake.jpg'

//<Image  src='/cake.jpg' width={400} height={400}/>

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>Chanchito Feliz</p>
      <Image src={Cake} width={400} height={400}/>
    </div>
  )
}
