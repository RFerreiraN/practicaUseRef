import {useState} from 'react'

export const UseRefForm = (initialForm) => {
  
  const [inputValue, setInputValue] = useState(initialForm)
  
    const handleInput = ({ target }) => {
      const { name, value } = target
      setInputValue({
        ...inputValue,
        [name]: value
      })
    }
  
    const resetForm = () => {
      setInputValue(initialForm)
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


//Este Custom hook se puede usar en otros formularios solo se deben cambiar los nombres de los inputs en dicho formulario