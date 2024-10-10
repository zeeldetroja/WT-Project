function About() {

    return (
        <>
            <div class="card">
                <div class="card-header h4" style={{ backgroundColor : "lightgrey"}}>
                    About Us
                </div>
                <div class="card-body">
                    <h5 class="card-title">Simple CRUD Operations</h5><br/>
                    <p class="card-text h6" >Welcome to Bill Crud, a powerful and user-friendly application built with the MERN stack (MongoDB, Express, React, Node.js) designed to streamline your billing processes. Our team is dedicated to providing a seamless experience for users who need to manage invoices, track expenses, and generate reports effortlessly. With an intuitive interface and robust features, Bill Crud empowers businesses of all sizes to take control of their financial data. Whether you are a freelancer or a growing enterprise, our mission is to simplify your billing management, allowing you to focus on what you do best—growing your business.</p><br/>
                </div>
                <div class="card-footer text-body-secondary" style={{ backgroundColor : "lightgrey"}}>
                    Code licensed MIT, docs CC BY 3.0
                </div>
            </div>
        </>
    )
}

export default About