import React, { Component } from 'react'
import LoadingImg from './loading.gif';

export class Loading extends Component {
  render() {
    return (
      <div className='tex-center'>
        <img src={LoadingImg} alt="loading"/>
      </div>
    )
  }
}

export default Loading
