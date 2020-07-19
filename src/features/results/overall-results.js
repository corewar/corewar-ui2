import React from 'react'

const OverallResults = () => (
  <section>
    <h2 className="font-bold text-xl text-gray-200">Overall Results</h2>
    <div className="w-full h-8 bg-gray-700 rounded flex items-center justify-center">100%</div>
    <table className="w-full mt-8">
      <thead className="font-semibold h-12">
        <td>Rank</td>
        <td>Icon</td>
        <td>Name</td>
        <td>Win/Lose/Draw</td>
      </thead>
      <tr className="h-16">
        <td>1</td>
        <td>
          <img src="https://placekitten.com/32/32" className="rounded-full" />
        </td>
        <td>Blur scanner</td>
        <td></td>
      </tr>
      <tr className="h-16">
        <td>2</td>
        <td>
          <img src="https://placekitten.com/32/32" className="rounded-full" />
        </td>
        <td>Looping paper</td>
        <td></td>
      </tr>
    </table>
  </section>
)

export default OverallResults
