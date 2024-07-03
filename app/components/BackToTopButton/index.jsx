import Image from 'next/image'
import Arrow2 from "../../../public/Arrow2.svg";

function BackToTopButton() {
  return (
    <div className='p-1 flex flex-col justify-center items-center gap-4 backdrop-blur-2xl cursor-pointer text-xs fixed right-0'>
        <Image src={Arrow2} width={10} height={2}/>
        <span className='-rotate-90 text-center'>Back to <br/> Top</span>
    </div>
  )
}

export default BackToTopButton