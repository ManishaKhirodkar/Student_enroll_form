import React, { useState } from 'react';
import './style.css'

const Student = () => {

    const [userEnroll, setuserEnroll] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        image: "",
        website: ""
    })
    const [records, setRecords] = useState([]);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setuserEnroll({ ...userEnroll, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...userEnroll, id: new Date().getTime.toString() }
        setRecords([...records, newUser])

        setuserEnroll({ username: "", email: "", skills: "", image: "", website: "" })
    }
    return (
        <div>
            <h2 className='text-center bg-primary text-white py-2'>Student Enrollment Form</h2>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor='username'>Full Name:</label>
                                    <input type="text" value={userEnroll.username}
                                        onChange={handleInputChange} placeholder='Enter Your Name' name='username' className='form-control' />
                                </div><br />

                                <div className="form-group">
                                    <label htmlFor='email'>Email:</label>
                                    <input type="email" value={userEnroll.email}
                                        onChange={handleInputChange} placeholder='Email' name='email' className='form-control' />
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor='website'>Website:</label>
                                    <input type="text" value={userEnroll.website}
                                        onChange={handleInputChange} placeholder='Your Website link' name='website' className='form-control' />
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor='skills'>Skills:</label>
                                    <input type="text" value={userEnroll.skills}
                                        onChange={handleInputChange} placeholder='Enter Skills' name='skills' className='form-control' />
                                </div><br />
                                <div className="form-group">
                                    <label htmlFor='image'>Image link:</label>
                                    <input type="text" value={userEnroll.image}
                                        onChange={handleInputChange} placeholder='Image' name='image' className='form-control' />
                                </div><br />
                                <button className="btn btn-success me-2" onClick={handleSubmit}>Save</button>
                                <button className="btn btn-danger">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <h3 className='text-center mt-2'>Enrolled Student</h3>
                <div className="container">
                    {
                        records.map((curEle) => {
                            const { id, username, email, skills } = curEle;
                            return (
                                <div className="showData" key={curEle.id}>
                                    <div className="row cardf">
                                        <div className="col-md-9" >
                                            <div className="card-body" >
                                                <h5 className="card-title">{curEle.username}</h5>
                                                <p className="card-text mb-0">{curEle.email}</p>
                                                <a className="card-text mb-0">{curEle.website}</a>
                                                <p className="card-text mb-0">{curEle.skills}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <img src={curEle.image} className="img-thumbnail rounded-start" alt="student-photo" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Student