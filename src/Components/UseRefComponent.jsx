import { useState, useRef, useEffect } from 'react'

export const UseRefComponent = () => {

  const formRef = useRef()

  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })

  const { email, password } = inputValue;

  const handleInput = ({ target }) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const resetForm = () => {
    setInputValue({
      email: '',
      password: ''
    })
  }

  const onSubmitInput = (event) => {
    event.preventDefault()
    if (!inputValue.email.trim() || !inputValue.password.trim()) return
    console.log(inputValue)
    resetForm()
  }

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

