import React from 'react'
import FileButton from '../files/file-button'
import RadioToggle from './radio-toggle'
import NumberHotStepper from './number-hot-stepper'
import ConfigurationFileSelector from './configuration-file-selector'
import BigRedButton from './big-red-button'

const Configuration = () => (
  <>
    <FileButton>Open</FileButton>
    <div className="mt-2 p-4 bg-gray-700 rounded-lg">
      <h2 className="text-lg font-bold mb-8 border border-t-0 border-l-0 border-r-0 border-gray-600 pb-2">
        Configuration
      </h2>
      <RadioToggle></RadioToggle>
      <NumberHotStepper></NumberHotStepper>
      <h2 className="text-lg font-bold mt-10 mb-4 border border-t-0 border-l-0 border-r-0 border-gray-600 pb-2">
        Warriors
      </h2>
      <ConfigurationFileSelector></ConfigurationFileSelector>
      <BigRedButton></BigRedButton>
    </div>
  </>
)

export default Configuration
