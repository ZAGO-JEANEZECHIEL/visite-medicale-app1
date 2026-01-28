
import Image from 'next/image'
 
export default function CardImage() {
  return (
<div className='w-full h-full '>
    <Image
      src="/doctor.png"
      alt="Picture of the author"
      width={500}
      height={500}
      className='h-full w-full object-cover '
    />
   </div>
  ) 
}