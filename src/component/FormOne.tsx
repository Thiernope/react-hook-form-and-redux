import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type loginInfoType = {
    username: string,
    email: string,
    password: string,
    dob: string,
    age: number
}

const FormOne = () => {
    const { register, control, handleSubmit, formState: {errors} } = useForm<loginInfoType>();

    const login = (data: loginInfoType) => {
      console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(login)} noValidate>
    <div>
     <div>
     <label htmlFor='username'>Username</label>
     </div>
     <input type='text' id='username' {...register('username', {required: 'Username is required', pattern: {
        value: /^[A-Z]/,
        message: 'Please Start with capital letter'
     }})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.username?.message} </p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='email'>Email</label>
     </div>
     <input type='email' id='email' {...register('email', {required: {
        value: true,
        message: 'Email is required'
     },
     pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid Email address'
     },
     validate: {
        isAdmin: (inputValue: string) => {
           return inputValue !== 'admin@gmail.com' || 'Please choose another email address'
        }
     }
     })}/>
      <p style={{color: 'red', fontSize: '10px'}}>{errors.email?.message} </p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='password'>Password</label>
     </div>
     <input type='password' id='password' {...register('password', {required: 'Password is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.password?.message} </p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='dob'>Date of Birth</label>
     </div>
     <input type='date' id='dob' {...register('dob', {required: 'Date of birth is required', valueAsDate: true})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.dob?.message} </p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='age'>Age</label>
     </div>
     <input type='number' id='age' {...register('age', {required: 'Age is required', valueAsNumber: true})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.age?.message} </p>
    </div>
   <button>Submit</button>
   <DevTool control={control}/>
    </form>
  )
}

export default FormOne