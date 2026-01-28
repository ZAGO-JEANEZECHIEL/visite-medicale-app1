import { Input } from "@/components/ui/input";

export default function Formulaire(){
    return(
        <div className="w-full  flex items-center justify-center pt-15">
        <form action="">
            <div className="w-full bg-blue-100">
          <div className="flex items-center gap-3">
            icon
            <Input type="text" placeholder="Username" className="ml-3 mb-5 w-80"/>
          </div>
          <div className="w-full h-1 bg-orange-500"></div>
          </div>
            </form>
        </div>
    )
}