import React, { useState } from 'react'
import './card.css'

const Card = () => {
    const [userEnroll, setuserEnroll] = useState({
        username: "",
        email: "",
        gender: "",
        imglink: "",
        website: "",
        skills: ""
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

        setuserEnroll({ username: "", email: "", skills: "", imglink: "", website: "", gender: "" })
    }
    return (
        <div>
            <div className="left-div">
                <form id="form">
                    <h1 style={{ color: '#007bff', marginBottom: '20px' }}>Student Enroll Form</h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4" >Name</label>
                            <input type="text" className="form-control" value={userEnroll.username} name="username" placeholder="Name" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input type="email" className="form-control" value={userEnroll.email} name="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input type="text" className="form-control" value={userEnroll.website} name="website" placeholder="Website" required />
                    </div>
                    <div className="form-group">
                        <label for="imglink">Image Link</label>
                        <input type="text" className="form-control" value={userEnroll.imglink} name="imglink" placeholder="Image link" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Skills</label>
                            <input type="text" className="form-control" value={userEnroll.skills} name="skills" required />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Gender</label>
                            <select name="inputState" className="form-control" value={userEnroll.gender} required >
                                <option selected>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Enroll Student</button>
                </form>
            </div >
            <div className="right-div">
                {
                    records.map((curEle) => {
                        const { username, email, gender, skills, website, imglink } = curEle;
                        return (
                            <div className="cont" id="cooo">
                                <div class="cardd">
                                    <div class="icon-img">{curEle.imglink} </div>
                                    <div class="info-cont">
                                        <div>
                                            <span class="strong" >Name : </span><span > {curEle.username} </span></div>
                                        <div><span class="strong">Email : </span><span > {curEle.email} </span></div>
                                        <div><span class="strong" >Website : </span><span >{curEle.website}  </span></div>
                                        <div><span class="strong" >Skills : </span><span > {curEle.skills} </span></div>
                                        <div><span class="strong" >Gender : </span><span > {curEle.gender} </span></div>
                                    </div>
                                </div>`
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card