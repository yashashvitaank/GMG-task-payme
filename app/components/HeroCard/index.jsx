import Image from 'next/image'
import Image2 from "../../../public/image2.svg";

function HeroCard() {
  return (
    <div className='flex justify-around'>
        <div className='md:text-7xl md:leading-[90px] w-[400px] font-thin'>We make your<br/> home Beautiful.</div>
        <Image src={Image2} width={550} height={400} />
    </div>
  )
}

export default HeroCard