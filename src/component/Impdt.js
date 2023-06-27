import React from "react"
import "./ImpdtStyles.css"

function Impdt() {
  return (
    <div className='hero_Impdt'>
      <h1 className='heading_Impdt'>IMPORTANT DATES</h1>
      <table>
        <thead>
          <tr>
            <th>Events</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper Submission Deadline</td>
            <td>November 30th, 2023</td>
          </tr>
          <tr>
            <td>Acceptance Notification</td>
            <td>January 31st, 2024</td>
          </tr>
          <tr>
            <td>Revised Submission</td>
            <td>February 15th, 2024</td>
          </tr>
          <tr>
            <td>Camera Ready</td>
            <td>February 28th, 2024</td>
          </tr>
          <tr>
            <td>Date of Registration</td>
            <td>February 28th, 2024</td>
          </tr>
          <tr>
            <td>Date of Conference</td>
            <td>March 22th-23th,2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Impdt
