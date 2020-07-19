import React from 'react'
import FileButton from '../files/file-button'
import RadioToggle from './radio-toggle'

const Configuration = () => (
  <>
    <FileButton>Open</FileButton>
    <div className="mt-4 p-2 bg-gray-700 rounded">
      <h2 className="text-lg font-bold">Configuration</h2>
      <RadioToggle></RadioToggle>
    </div>
  </>
)

export default Configuration
