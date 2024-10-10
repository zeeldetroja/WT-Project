import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddBill(props){
    const [data, setData] = useState({});
    const navigate = useNavigate();

    return(
        <>
            <div class="container mt-5">
                <h2 class="text-center">Bill</h2>
                
                <div class="form-group">
                    <label for="companyName">Company Name</label>

                    <input onChange={(e)=>{
                        setData({...data,companyName:e.target.value})
                    }} type="text" class="form-control" id="companyName" placeholder="Enter company name" required />

                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>

                    <input onChange={(e)=>{
                        setData({...data,amount:e.target.value})
                    }} type="number" class="form-control" id="amount" placeholder="Enter amount" required />

                </div>
                <div class="form-group">
                    <label for="description">Description</label>

                    <textarea onChange={(e)=>{
                        setData({...data,description:e.target.value})
                    }} class="form-control" id="description" placeholder="Enter bill description" rows="3"></textarea>

                </div>
                <div class="form-group">
                    <label for="date">Date</label>

                    <input onChange={(e)=>{
                        setData({...data,date:e.target.value})
                    }} type="date" class="form-control" id="date" required />

                </div>
                <div class="form-group">
                    <label for="status">Status</label>

                    <select onChange={(e)=>{
                        setData({...data,status:e.target.value})
                    }} class="form-control" id="status" required>
                        <option >Pending</option>
                        <option>Paid</option>
                        <option>Overdue</option>
                    </select>
                    
                </div>

                <div class="d-flex justify-content-center m-5">
                    <button onClick={()=>{
                            const apiUrl = "http://localhost:3001/bill";

                            fetch(apiUrl,{
                                method:"POST",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(res=>res.json())
                            .then(res=>{
                                navigate('/bill');
                            });
                        }} type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddBill;