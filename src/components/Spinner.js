import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center marginTop-50%'>
         <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
