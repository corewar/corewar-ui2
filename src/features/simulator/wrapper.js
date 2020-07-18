import React from 'react'
import CoreInspector from './core-inspector'
import Simulator from './simulator'

const Wrapper = () => (
  <section className="w-3/5 flex flex-row p-2">
    <CoreInspector></CoreInspector>
    <Simulator></Simulator>
  </section>
)

export default Wrapper