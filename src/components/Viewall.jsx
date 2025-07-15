import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const[userData,setData]=useState(
        []
    )
    const fetchData=()=>{

      axios.get(" https://jsonplaceholder.typicode.com/users").then(

        (response)=>{

              setData(response.data)
        }
      ).catch()
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Navbar/>
        <br></br>
        <div className="container row">
          <div className='row justify-content-center'>
            <div className="col-12 text-center mb-4">
                <h3>View Users</h3>
                </div>
            <div className="table-responsive">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                 

                         <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        

                                <table class="table table-dark table-bordered table-hover table-striped-columns">
  <thead class="table-light">
    <tr>
      
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
      <th scope="col">company</th>

    </tr>
  </thead>
  
     {userData.map(

                    (value,index)=>{
                      return (
                        <tbody>
    <tr>
      
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.address.street}<br></br>{value.address.suite}<br></br>{value.address.city}<br></br>{value.address.zipcode}<br></br>latitude:{value.address.geo.lat}<br></br>latitude:{value.address.lng}</td>
      <td>{value.phone}</td>
      <td>{value.website}</td>
      <td>{value.company.name}<br></br>{value.company.catchPhrase}<br></br>{value.company.bs}</td>

    </tr>
    </tbody>
     )

                    }
                  )}
  
</table>
                            


                        
                    </div>
                     
                   
                    
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Viewall