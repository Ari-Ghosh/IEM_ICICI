import React from "react"
import "./CallStyles.css"

function Call() {
  return (
    <div className='hero_Call'>
      <h1 className='heading_Call'>Thrust Areas (But not limited to)</h1>
      <h4 className='subheading_Call'>Researchers may submit their papers to any one of the tracks mentioned below. </h4>
      <table>
        <thead>
          <tr>
            <th>Tracks</th>
          </tr>
        </thead>
        <br></br>
        <tbody>  
        <tr>
            <td>  
              <th> Frontiers of Internet of Things </th>
              <tr>
                <td>  ● 5G Network in IoT</td>
              </tr>
              <tr>
                <td>  ● Edge Computing</td>
              </tr>
              <tr>
                <td>  ● IoT Security</td>
              </tr>
            </td>
          </tr>
          <tr>
            <td>  
              <th> Paradigms of  Expert Systems and Machine Learning </th>
              <tr>
                <td>  ● Artificial Intelligence & Machine Learning</td>
              </tr>
              <tr>
                <td>  ● Linguistics and Knowledge Representations</td>
              </tr>
              <tr>
                <td>  ● Computational Biology</td>
              </tr>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}
export default Call
