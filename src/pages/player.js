import React from 'react'
import Configuration from '../features/configuration/configuration'
import Simulator from '../features/simulator/simulator'

const Player = () => (
  <>
    <Configuration></Configuration>
    <div className="w-1/4">
      <Simulator></Simulator>
    </div>
  </>
)

export default Player
