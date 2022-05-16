import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";



    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

    if(gLoading || loading) {

        return <button class="btn loading">loading</button>

    }
    let singError 



    const onSubmit = data => {
        
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)

      
    }
    if(error || gError){
        singError = <p className='text-red-800 '>{error?.message || gError.message}</p>
    }
    if(user || gUser){
        navigate(from, { replace: true });

    }



    // if (gUser) {
    //     console.log(user)
    // }

    return (
        <div>
            <div class="hero min-h-screen ">
               

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-accent text-4xl text-center font-bold '>Login</h1>


                                <label class="label mt-10">
                                    <span class="label-text"> Email</span>
                                </label>
                                <input name='email'  {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'provide is valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                                    type="email" placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs" />

                                <label>
                                    {errors.email?.type === 'required' && <span className=' text-red-700'>{errors.email.message}</span>}
                                </label>







                                <label class="label mt-6">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password'  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'provide is valid password' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                                    type="password" placeholder="password"
                                    class="input input-bordered w-full max-w-xs" />

                                <label>
                                    {errors.password?.type === 'required' && <span className=' text-red-700'>{errors.password.message}</span>}
                                </label>










                                    {singError}

                                <input  type="submit" class="btn btn-accent w-full max-w-xs mt-10" value="Login" />

                                <p className='mt-6'><small>your are not SignIn ?  <Link className='text-primary font-bold' to="/signIn">  create signIn</Link> </small></p>



                            </form>



                        </div>

                        <div class="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline"> Google login </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;