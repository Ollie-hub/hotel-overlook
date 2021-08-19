import React from "react"
import { useForm } from "react-hook-form"

export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, e) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <b>Login</b>
            <p>Udfyld login oplysninger:</p>
            <label>Email</label>
            <input type="email" {...register('email', { required: true })}></input>
            {errors.email && <span>Udfyld email</span>}
            <label>Password</label>
            <input type="password" {...register('password', { required: true })}></input>
            {errors.password && <span>Udfyld password</span>}
            <button>LOGIN</button>
        </form>
    )

}