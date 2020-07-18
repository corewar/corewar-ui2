import React from 'react'
import { ReactComponent as PlayIcon } from '../../img/icons/play-circle-outline.svg'

const SimulatorControls = () => (
  <div className="h-16 w-full flex justify-start items-center text-gray-100">
    <PlayIcon className="stroke-current h-12 w-12"></PlayIcon>
  </div>
)

export default SimulatorControls
