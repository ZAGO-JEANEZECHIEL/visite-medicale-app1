
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Form(){
    return(
        <div className="w-full  flex items-center justify-center pt-15">
           <form action="" className="flex flex-col gap-4">
            <div className="flex  items-center gap-3">
                icon  <Input className=""/>
            </div>
           <div className="flex items-center gap-3">
                icon  <Input className=""/>
            </div>
            <div className="w-full flex items-center justify-center bg-blue-200">
           <Button className="bg-orange-500 rounded-none w-full">
            Se Connecter
            </Button>
            </div>
            </form>  
            </div>
    )
}