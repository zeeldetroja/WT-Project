import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function DetailBill(props){
    const [data, setData] = useState({});
    const { _id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "http://localhost:3001/bill/"+_id;

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(error => console.error('Error:', error));
    },[]);

    return(
        <>
            <div class="card">
                <div class="card-header">
                    {data.companyName}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>Description:<br />{data.description}</p>
                    <p>Amount:<br/> ${data.amount}</p>
                    <p>Date:<br/> {data.date}</p>


                    <br/>
                    <footer class="blockquote-footer">{data.status}</footer>
                    </blockquote>
                </div>
            </div>

            <div className="d-flex justify-content-center m-5">
                <Link to="/bill" className="btn btn-info">Back</Link>
                <Link to={"/bill/edit/"+_id} className="btn btn-warning mx-5">Edit</Link>

                <button className="btn btn-danger" onClick={()=>{
                    const apiUrl = "http://localhost:3001/bill/"+_id;

                    fetch(apiUrl, {method:"DELETE"})
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/bill');
                    })

                }}>Delete</button>
            </div>
        </>
    );
}                                                                                                

export default DetailBill;