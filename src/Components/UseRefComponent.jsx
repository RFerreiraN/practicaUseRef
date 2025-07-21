import { useState } from 'react'

export const UseRefComponent = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          name="password" 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

