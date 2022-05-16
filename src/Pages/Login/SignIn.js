import React from 'react';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';



const SignIn = () => {
    const navigate = useNavigate()

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    if(gLoading || loading) {

        return <button class="btn loading ">loading</button>

    }
    if (error) {
        return  <p>Error: {error.message}</p>
    }

    let singError

    if(error || gError || updateError){
        singError = <p>{error?.message || gError?.message || updateError?.message}</p>
    }
    
        



    const onSubmit = async data => {
        
       await createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
        await updateProfile({ displayName: data.name });
        navigate('/appointment')
    }


    return (
        <div>
        <div class="hero min-h-screen ">
           

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-accent text-4xl text-center font-bold '>SignUp</h1>


                            <label class="label mt-10">
                                <span class="label-text"> Name</span>
                            </label>
                            <input name='name'  {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                },
                               
                            })}
                                type="text" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.name?.type === 'required' && <span className=' text-red-700'>{errors.name.message}</span>}
                            </label>


                            <label class="label mt-6">
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
                                {errors.password?.type === 'pattern' && <span className=' text-red-700'>{errors.password.message}</span>}
                            </label>










                                {singError}

                            <input  type="submit" class="btn btn-accent text-white w-full max-w-xs mt-10" value="Signup" />



                        </form>
                        <p className='mt-6'><small>already have an account ?  <Link className='text-primary font-bold' to="/login">  please login page</Link> </small></p>



                    </div>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline"> Google login </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;