'use client'
import Image from 'next/image'
import Arrow2 from "../../../public/Arrow2.svg";

function BackToTopButton() {
    const handleScroll = ()=> {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  return (
    <div className='h-[154px] w-[55px] bg-[#ffffff20] rounded-[83px] flex flex-col justify-center items-center gap-[15px] backdrop-blur-sm cursor-pointer text-xs fixed right-[25px] bottom-4 border' onClick={handleScroll}> 
        <Image src={Arrow2} width={10} height={2}/>
        <span className='-rotate-90 text-start text-[16px]'>Back <br/> to Top</span>
    </div>
  )
}

export default BackToTopButton