import React from 'react'

function AdminTableForBookings({allBookingsOfSelectedDay}) {
  return (
    <div>
        <table className="styled-table">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer Email</th>
                  <th scope="col">Time</th>
                  <th scope='col'>Class</th>
                </tr>
              </thead>

              <tbody>
                {allBookingsOfSelectedDay &&
                  allBookingsOfSelectedDay.map((booking, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{booking.name}</td>
                      <td>{booking.email}</td>
                      <td>{booking.time.text}</td>
                      <td>{booking.class}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
    </div>
  )
}

export default AdminTableForBookings