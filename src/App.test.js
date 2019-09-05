import React from 'react'
import * as rtl from '@testing-library/react'
import 'jest-dom/extend-expect'

import App from './App'

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  )
  console.log(wrapper.debug())
})
