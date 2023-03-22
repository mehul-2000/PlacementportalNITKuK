import React,{Component,useState} from 'react';
import "./AddNewCompany.css";
function AddNewCompany(){

//     let [ugDisplay, setUgDisplay]= useState("none");
//     var checkBox = document.getElementById("ugCheck");
//     var ugBranches = document.getElementById("ug_branches");

//     let







//     <script>
//     function myfunc1() {
// // Get the checkbox

// // Get the output text


// // If the checkbox is checked, display the output text
// if (checkBox.checked == true){
//   ugBranches.style.display = "block";
// } else {
//   ugBranches.style.display = "none";
// }
// }
// </script>
    return(
        <>
        
        <div className="main_wrapper">
            <div className="first">
                <h5 style={{marginLeft:"2rem"}}>Add New Company</h5>
            </div>
            <div className="boxes">
            <div className="first">
                    <h5>Company Details</h5>
                </div>
                <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="companyUrl">Company Website Link</label>
                    <input type="text" className="form-control" id="companyUrl" placeholder="Enter URL"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                          Organization Type
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm shadow-none"
                          aria-label=".form-select-sm example"
                          style={{outline:"none"}}
                        >
                          <option selected>--Select Organization Type--</option>
                          <option value="1">Private Sector</option>
                          <option value="2">Startup</option>
                          <option value="3">Government Owned</option>
                          <option value="4">Public Sector</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                          Industry Sector
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Industry Sector--</option>
                          <option value="1">Analytics</option>
                          <option value="2">Core</option>
                          <option value="3">Finance</option>
                          <option value="4">Information Technology</option>
                          <option value="5">Bussiness Development</option>
                          <option value="6">Sales and Marketing</option>
                          <option value="7">Management</option>
                        </select>
                    </div>
                    
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          About Company
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          placeholder="Write Something about Company"
                        ></textarea>
                      </div>
                    </div>
                    
                    
                </div>
                
                

                </form>
            </div>
            <div className="boxes">
                <div className="first">
                    <h5>Job Profile Details</h5>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="companyName">Job Profile</label>
                    <input type="text" className="form-control" id="jobProfile" placeholder="Enter Job Profile"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Passout Batch
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Batch--</option>
                          <option value="1">2020</option>
                          <option value="2">2021</option>
                          <option value="3">2022</option>
                        </select>
                    </div>
                    
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Recruitment
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Recruitment--</option>
                          <option value="1">Placement</option>
                          <option value="2">Internship</option>
                        </select>
                    </div>
                    
                </div>

                <div className="form-row">

                    <div className="form-group col-md-6">
                    <label htmlFor="companyName">Location of Posting</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter Posting Details"/>
                    </div>
                    
                    <div className="form-group col-md-6">
                    <label htmlFor="companyName">Tentative Date of Joining</label>
                    <input type="date" className="form-control" id="date" placeholder="dd-mm-yyyy"/>
                    </div>
                    
                </div>

                <div className="form-row">

                <div className="form-group col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Job Description
                        </label>
                        <textarea
                          className="form-control"
                          id="jd"
                          rows={3}
                          placeholder="Enter the job description"
                        ></textarea>
                      </div>
                    </div>
                    
                    
                    
                </div>




            </div>
            <div className="boxes">
                <div className="first">
                    <h5>Student Eligibility Details</h5>
                </div>

                    <label htmlFor="eligible_programs">Eligible Programs</label>
                    <br></br>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="ugCheck"  value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">B.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="pgCheck" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">M.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="mcaCheck" value="option3"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">MCA</label>
                    </div>
                    <br></br>

                    <div className="ug" id="ug_branches" style={{display:"none"}}>
                    <label htmlFor="eligible_programs">Eligible B.Tech Branches</label>
                    <br></br>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">B.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">M.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">MCA</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">B.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">M.Tech</label>
                    </div>
                    <div className="form-check form-check-inline big_checkbox">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">MCA</label>
                    </div>


             



                    </div>
                    
                

                <div className="form-row">

                <div className="form-group col-md-6">
                <label htmlFor="companyName">Minimum CGPA</label>
                <input type="text" className="form-control" id="location" placeholder="Enter Minimum CGPA"/>
                </div>

                <div className="form-group col-md-6">
                <label htmlFor="companyName">Minimum % marks in 10th</label>
                <input type="date" className="form-control" id="date" placeholder="Enter minimum % marks in 10th"/>
                </div>

                </div>

                <div className="form-row">

                <div className="form-group col-md-6">
                <label htmlFor="companyName">Minimum % marks in 12th</label>
                <input type="text" className="form-control" id="location" placeholder="Enter minimum % marks in 12th"/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Medical Requirement
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Medical Requirement--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Service Agreement
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Service Agreement--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>

                </div>

                <div className="form-row">

                <div className="form-group col-md-6">
                <label htmlFor="companyName">Other Eligibility</label>
                <input type="text" className="form-control" id="location" placeholder="Enter Other Eligibilty"/>
                </div>

                </div>














            </div>
            <div className="boxes">
                <div className="first">
                    <h5>Package Details</h5>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Company Accomodation
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="facility">Extra Facilities</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter other facilities"/>
                    </div>
                      
                </div>


            </div>
            <div className="boxes">
                <div className="first">
                    <h5>Selection Process</h5>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Pre Placement Talk</label>
                    <div className="col-sm-10">
                    <select
                          className="form-select form-select-sm selection_select"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Aptitude Test</label>
                    <div className="col-sm-10">
                    <select
                          className="form-select form-select- selection_select"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Technical Test</label>
                    <div className="col-sm-10">
                    <select
                          className="form-select form-select-sm selection_select"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Group Discussion</label>
                    <div className="col-sm-10">
                    <select
                          className="form-select form-select-sm selection_select"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Personal Interview</label>
                    <div className="col-sm-10">
                    <div className="form-row">
                        
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Number of Rounds"/>
                        </div>
                        <div className="col">
                        <input type="date" className="form-control" placeholder="dd-mm-yyyy"/>
                        </div>              
                        </div>
                    </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Provision of Waitlist
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="exampleFormControlSelect1">
                         Final Offer to be announced
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select--</option>
                          <option value="1">Same Day</option>
                          <option value="2">Later</option>
                        </select>
                    </div>
                      
                </div>



            </div>
            <div className="boxes">
            <div className="first">
                    <h5>Registration Details</h5>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="companyName">Last Date to Apply</label>
                    <input type="date" className="form-control" id="location" placeholder="dd-mm-yyyy"/>
                    </div>

            
            </div>
        </div>
        
        
        </>
        
    );
    
}


export default AddNewCompany;