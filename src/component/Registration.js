import React from "react"
import "./RegistrationStyles.css"

function Registration () {
  return (
      <div className='hero_Registration'>
        <h1 className='heading_Registration'>ESTEEMED SPEAKERS AND CHAIRS</h1>
        <table>
        <thead>
          <tr>
            <th>Catagories</th>
            <th>Students</th>
            <th>Academian</th>
            <th>Industry</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INDIAN</td>
            <td>3000 ₹</td>
            <td>4000 ₹</td>
            <td>5000 ₹</td>
            <td>1500 ₹</td>
          </tr>
          <tr>
            <td>SAARC</td>
            <td>100 $</td>
            <td>150 $</td>
            <td>200 $</td>
            <td>50 $</td>
          </tr>
          <tr>
            <td>FOREIGN</td>
            <td>150 $</td>
            <td>200 $</td>
            <td>300 $</td>
            <td>75 $</td>
          </tr>
        </tbody>
      </table>
      </div>
  )
}
export default Registration
