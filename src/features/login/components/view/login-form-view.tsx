// import { LoginForm } from "../login-form";
 
import LoginForm from "../login-form"
import CardImage from "./card-image"

export default function LoginFormView(){
    return(
    //    <LoginForm/>
    <div className="w-full h-screen grid  grid-cols-2">
        <CardImage/>
    <LoginForm/>
    </div>
    )
}