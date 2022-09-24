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
            <td>July, 2023 (Maximum extended upto August 2023)</td>
          </tr>
          <tr>
            <td>Acceptance Notification</td>
            <td>August, 2023 (Maximum extended upto September 2023)</td>
          </tr>
          <tr>
            <td>Registration and CRC Deadline</td>
            <td> October, 2023</td>
          </tr>
          <tr>
            <td>Conference Date</td>
            <td> November, 2023</td>
          </tr>
          </tbody>
      </table>
      </div>
  )
}
export default Impdt
