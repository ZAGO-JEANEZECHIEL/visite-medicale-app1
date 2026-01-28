import { Input } from "@/components/ui/input";
import Image from 'next/image'

export default function Formulaire(){
    return(
        <div className="w-full  flex items-center justify-center pt-15 ">
        <form action="" className="flex flex-col gap-5">
        <div className="w-full ">
          <div className="flex items-center ">
            <div className="w-fit">
                <Image
                          src="/contact.png"
                          alt="Picture of the author"
                          width={10}
                          height={10}
                          className='h-5 w-5 object-cover '
                        />
            </div>
            <Input type="text" placeholder="Email" className=" border-none  w-80"/>
          </div>
          <div className="w-full h-[1]! bg-orange-400"></div>
          </div>
          <div className="w-full ">
          <div className="flex items-center ">
            <div className="w-fit">
          <Image
                          src="/password.png"
                          alt="Picture of the author"
                          width={10}
                          height={10}
                          className='h-5 w-5 object-cover '
                        />
            </div>
            <Input type="text" placeholder="Mot de passe" className=" border-none  w-80"/>
          </div>
          <div className="w-full h-0.5 bg-orange-400"></div>
          </div>
            </form>
        </div>
    )
}