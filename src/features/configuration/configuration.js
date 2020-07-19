import React from 'react'
import FileButton from '../files/file-button'
import RadioToggle from './radio-toggle'
import NumberHotStepper from './number-hot-stepper'

const Configuration = () => (
  <>
    <FileButton>Open</FileButton>
    <div className="mt-4 p-4 bg-gray-700 rounded-lg">
      <h2 className="text-lg font-bold">Configuration</h2>
      <RadioToggle></RadioToggle>
      <NumberHotStepper></NumberHotStepper>
    </div>
  </>
)

export default Configuration
