import React from 'react'
import { ReactComponent as PlayIcon } from '../../img/icons/play-circle-outline.svg'
import { ReactComponent as StepIcon } from '../../img/icons/play-skip-forward-outline.svg'
import { ReactComponent as ReloadIcon } from '../../img/icons/refresh-outline.svg'
import { ReactComponent as SpeedIcon } from '../../img/icons/speedometer-outline.svg'

const SimulatorControls = () => (
  <div className="h-16 w-full flex justify-evenly items-center text-gray-100">
    <PlayIcon className="stroke-current h-12 w-12"></PlayIcon>
    <StepIcon className="stroke-current h-8 w-8"></StepIcon>
    <ReloadIcon className="stroke-current h-8 w-8"></ReloadIcon>
    <SpeedIcon className="stroke-current h-8 w-8"></SpeedIcon>
  </div>
)

export default SimulatorControls
