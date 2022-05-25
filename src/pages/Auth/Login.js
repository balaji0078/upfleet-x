import React from "react";

export const Login = ({Children}) => {

    return (
        // <div className="container-fluid theme-bg" style={{backgroundColor : '$myColor', height: '100vh' ,color: '#fff'}}>
        //     <div className="row h-100">
        //         <div className="col-6">

        //         </div>
        //         <div className="col-6 d-flex">
        //             <div className="d-flex align-items-center">
        //                 <div>
        //                     <form>
        //                         <div className="form-group">
        //                             <label htmlFor="exampleInputEmail1">Phone Number / Email address</label>
        //                             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        //                             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //                         </div>
        //                         <div className="form-group">
        //                             <label htmlFor="exampleInputPassword1">Please Enter the OTP</label>
        //                             <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your OTP here" />
        //                         </div>
        //                         <div className="form-group form-check">
        //                             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        //                             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        //                         </div>
        //                         <button type="submit" className="btn button-theme">Submit</button>
        //                     </form>
        //                 </div>                       
        //             </div>
        //         </div>
        //     </div>
            
        // </div>
        //style={{backgroundColor: '#508bfc'}}
        <section class="vh-100 theme-bg"  >
            <div class="container py-2 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                    <div class="card-body p-5 text-center">

                        <h3 class="mb-5">Sign in</h3>

                        <div class="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                        <label class="form-label" for="typeEmailX-2">Email</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                        <label class="form-label" for="typePasswordX-2">Password</label>
                        </div>

                        <div class="form-check d-flex justify-content-start mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                        <label class="form-check-label" for="form1Example3"> Remember password </label>
                        </div>

                        <button class="btn theme-bg btn-lg btn-block" type="submit">Login</button>            
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )

}