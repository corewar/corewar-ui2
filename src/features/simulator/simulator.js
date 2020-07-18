import React from 'react'
import SimulatorControls from './simulator-controls'
import Core from './core'
import Progress from './progress'

const Simulator = () => (
  <section className="w-core flex flex-1 flex-col justify-between">
    <Progress></Progress>
    <SimulatorControls></SimulatorControls>
    <Core></Core>
  </section>
)

export default Simulator
