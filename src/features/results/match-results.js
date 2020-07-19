import React from 'react'

const MatchResults = () => (
  <section>
    <h2 className="font-bold text-lg">Match Results</h2>
    <div className="flex justify-between mt-2">
      <img src="https://placekitten.com/32/32" /> <span>vs</span>
      <img src="https://placekitten.com/32/32" />
    </div>
    <div className="flex">
      <div className="w-2/5 h-6 mt-2 bg-red-700 rounded rounded-r-none"></div>
      <div className="w-1/5 h-6 mt-2 bg-gray-100"></div>
      <div className="w-3/5 h-6 mt-2 bg-blue-700 rounded rounded-l-none"></div>
    </div>
  </section>
)

export default MatchResults
