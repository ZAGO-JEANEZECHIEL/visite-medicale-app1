
import CardImage from '../card-image'
import LoginForm from '../login-form'

export default function LoginFormView(){
    return(
        <div className="grid  grid-cols-2 w-full h-screen ">
       <CardImage/>
       <div className='w-full h-full'>
       <LoginForm/>
        
    </div>
            
        </div>
    )
}