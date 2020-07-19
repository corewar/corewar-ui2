import React from 'react'
import ThreeWay from './three-way'

const scores = [{ colour: 'bg-red-500' }, { colour: 'bg-blue-500' }]

const MatchResults = () => (
  <section className="h-48">
    <h2 className="font-bold text-lg text-gray-200">Match Results</h2>
    <div className="flex justify-between mt-2">
      <img src="https://placekitten.com/32/32" />
      <span>vs</span>
      <img src="https://placekitten.com/32/32" />
    </div>
    <ThreeWay scores={scores}></ThreeWay>
  </section>
)

export default MatchResults
