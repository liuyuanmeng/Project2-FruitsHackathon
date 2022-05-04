import React from 'react'

import spinner from '../../src/images/spinner.gif'

const Spinner = () => (
  <div className='spinner-wrapper'>
    <img src={spinner} alt='loading-sign' className='spinner' />
  </div>
)

export default Spinner