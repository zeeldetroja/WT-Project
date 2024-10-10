import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import exampleImage from './image.jpeg';


function Bill(){

    const [data, setData] = useState([]);

    const apiUrl = "http://localhost:3001/bill";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const foramttedBill = data.map((bill)=>{
        return(
            <div class="card col-md-4 col-lg-3 mb-4 m-3" key={bill._id} style={{width: "18rem"}} >
                <img src={exampleImage} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{bill.companyName}</h5>
                    <p class="card-text">${bill.amount}</p>
                    <Link to={"/bill/"+bill._id} class="btn btn-primary">Detail</Link>
                </div>
            </div>
        );
    })

    return(<>
            <div class="container text-center">
                <div class="row">
                        {foramttedBill}
                </div>
            </div>
      </>);
}

export default Bill;