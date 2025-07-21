import { useState, useRef, useEffect } from 'react'
import { UseRefForm } from '../Hooks/UseRefForm';

export const UseRefComponent = () => {

  const formRef = useRef()

  const {inputValue, handleInput, resetForm,  onSubmitInput} = UseRefForm()

  const { email, password } = inputValue;

  useEffect(() => {
    formRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmitInput}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          ref={formRef}
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

