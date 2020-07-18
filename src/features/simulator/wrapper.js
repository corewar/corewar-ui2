import React from 'react'
import { ReactComponent as PlayIcon } from '../../img/icons/play-circle-outline.svg'

const Wrapper = () => (
  <section className="w-3/5 flex flex-row p-2">
    <section className="mt-40 flex-1 p-8">
      <table className="text-sm w-full text-right">
        <thead className="font-semibold h-12">
          <td>Address</td>
          <td>Instruction</td>
          <td>A Operand</td>
          <td>B Operand</td>
        </thead>
        <tr className="font-code h-8">
          <td>386</td>
          <td>MOV.I</td>
          <td>&gt;1185</td>
          <td>$-1184</td>
        </tr>
        <tr className="font-code h-8">
          <td>386</td>
          <td>MOV.I</td>
          <td>&gt;1185</td>
          <td>$-1184</td>
        </tr>
      </table>
    </section>
    <section className="w-core flex flex-col items-end">
      <div className="w-full h-30 flex-col pt-2">
        <div className="w-full h-8 bg-gray-700 rounded flex items-center justify-center">100%</div>
        <div className="w-2/5 h-6 mt-2 bg-red-700 rounded"></div>
        <div className="w-3/5 h-6 mt-2 bg-blue-700 rounded"></div>
      </div>
      <div className="h-16 w-full flex justify-start items-center text-gray-100">
        <PlayIcon className="stroke-current h-12 w-12"></PlayIcon>
      </div>
      <div className="bg-gray-500 rounded w-core h-core">core</div>
    </section>
  </section>
)

export default Wrapper
