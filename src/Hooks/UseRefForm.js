import {useState} from 'react'

export const UseRefForm = () => {
  
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
  return {
    inputValue,
    handleInput,
    resetForm,
    onSubmitInput
  }
}
