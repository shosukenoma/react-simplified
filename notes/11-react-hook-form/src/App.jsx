import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {
  const {register, handleSubmit, formState: { errors }} = useForm()

  function onSubmit(data) {
    console.log(data)
    alert("Success")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" {...register("email", {required: {value: true, message: "Required"}, validate: value => {
          if (!value.endsWith("@webdevsimplified.com")) {
            return "Must end with @webdevsimplified.com"
          }
        }})} />
      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          {...register("password", {required: {value: true, message: "Required"}, validate: value => {
            if (true) {
              return "message here"
            }
          }})}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...register("country", {required: {value: true, message: "Required"}, validate: value => {
            return "Message here"
          }})}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
