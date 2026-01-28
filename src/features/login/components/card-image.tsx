
import Image from 'next/image'
 
export default function CardImage() {
  return (
<div className='w-full h-80vh bg-amber-700 overflow-hidden  relative'>
    <Image
      src="/doctor.png"
      alt="Picture of the doctor"
      fill
      className='h-full w-full object-fit '
    />
   </div>
  )    
}