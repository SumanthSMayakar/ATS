import React, { useContext } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './Banner/Home';
import Login from './Auth/Login';
import Menu from './Nav/Menu';
import Register from './Auth/Register';
import Footer from './Banner/Footer';
import { GlobalContext } from './../GlobalContext';
import ProtectedRoute from "./AuthGuard/ProtectedRoute";
import UserDashboard from "./Screens/Users/UserDashboard";
import AdminDashboard from "./Screens/Admin/AdminDashboard";
import ManageJobs from "./ManageJobs/ManageJobs";
import CreateJobs from "./CreateJobs/CreateJobs";
import EditJobs from "./EditJobs/EditJobs";
import Pnf from "./Banner/Pnf";
import '../../src/Component/style/bannerstyle.css'
import Sidebar from './Nav/Sidebar';
import ApplyingJob from "./ManageJobs/ApplyingJobs";
import Applicants from "./ApplicantModule/dashbord/Applicants";
import ApplicantsUpdate from "./ApplicantModule/ApplicantsUpdate";
import Hired from "./ApplicantModule/pipeline/Hired";
import New from "./ApplicantModule/pipeline/New";
import CreateOffer from './CreateOffer/CreateOffer'
import ManageOffer from './ManageOffer/ManageOffer'
import EditOffer from './EditOffer/EditOffer'


function MainRoute() {
  const context = useContext(GlobalContext)

  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;

  return (
    <div className="container-fluid">
        <div className="container-fluid">
          <div className="row flex-nowrap">
              {/* admin view  */}
                
                {
                    isLogged && isAdmin ? (
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                  <span className="fs-5 d-none d-sm-inline text-dark fw-bold mt-2 text-dark">ADMIN</span>
                              </a>
                          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                          <li className="nav-item">
                              <a href="/" className="nav-link align-middle px-0 text-dark">
                                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                              </a>
                          </li>
                          {/* <li className="nav-item">
                              <a href="/admin/dashboard" className="nav-link align-middle px-0 text-dark">
                                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                              </a>
                          </li> */}
                          <li>
                              <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark">
                                  <i className="fs-4 bi-table "></i> <span className="ms-1 d-none d-sm-inline"> Jobs</span> </a>
                              <ul className="collapse show nav flex-column ms-1 " id="submenu1" data-bs-parent="#menu">
                                  <li className="w-100">
                                      <a href="/admin/createjobs" className="nav-link ms-2"> <span className="d-none d-sm-inline text-dark">Create Jobs</span></a>
                                  </li>
                                  <li>
                                      <a href="/admin/managejobs" className="nav-link ms-2"> <span className="d-none d-sm-inline text-dark">Manage Jobs</span> </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="/admin/applicants" className="nav-link px-0 align-middle text-dark">
                                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline text-dark">Applicant</span></a>
                          </li>
                          {/* <li> */}
                              {/* <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark "> */}
                                  {/* <i className="fs-4 bi-person-add"></i> <span className="ms-1 d-none d-sm-inline text-dark">Recruiter</span></a> */}
                              {/* <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu"> */}
                                  {/* <li className="w-100">
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-dark">Item</span> 1</a>
                                  </li>
                                  <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-dark">Item</span> 2</a>
                                  </li> */}
                              {/* </ul> */}
                          {/* </li> */}
                          <li>
                              <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark">
                                  <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline text-dark">Job Offer</span> </a>
                                  <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                  <li className="w-100">
                                      <a href="/admin/createoffer" className="nav-link px-0"> <span className="d-none d-sm-inline">Create Offer</span> </a>
                                  </li>
                                  <li>
                                      <a href="/admin/manageoffer" className="nav-link px-0"> <span className="d-none d-sm-inline">Manage Offer</span> </a>
                                  </li>
                                  {/* <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                  </li>
                                  <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                  </li> */}
                              </ul>
                          </li>
                          {/* <li>
                              <a href="#" className="nav-link px-0 align-middle">
                                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                          </li> */}
                      </ul>                
                  </div>
              </div>
              ) : null
            }

            {/* applicant view */}
            {
                isLogged && isUser ? (
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                  <span className="fs-5 d-none d-sm-inline text-dark fw-bold mt-2 ">APPLICANT</span>
                              </a>
                              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                          <li className="nav-item">
                              <a href="/" className="nav-link align-middle px-0 text-dark">
                                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                              </a>
                          </li>
                          {/* <li className="nav-item">
                              <a href="#" className="nav-link align-middle px-0 text-dark">
                                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                              </a>
                          </li> */}
                          <li>
                              <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark">
                                  <i className="fs-4 bi-table "></i> <span className="ms-1 d-none d-sm-inline">Jobs</span> </a>
                              <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                  <li>
                                      <a href="/user/managejobs" className="nav-link ms-3 text-dark"> <span className="d-none d-sm-inline">View Jobs</span> </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="#" className="nav-link px-0 align-middle text-dark">
                                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline text-dark">Applicant</span></a>
                          </li>
                          {/* <li> */}
                              {/* <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark"> */}
                                  {/* <i className="fs-4 bi-person-add"></i> <span className="ms-1 d-none d-sm-inline">Recruiter</span></a> */}
                              {/* <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu"> */}
                                  {/* <li className="w-100">
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                                  </li>
                                  <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                                  </li> */}
                              {/* </ul> */}
                          {/* </li> */}
                          {/* <li> */}
                              {/* <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark"> */}
                                  {/* <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Job Offer</span> </a> */}
                                  {/* <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu"> */}
                                  {/* <li className="w-100">
                                      <a href="/admin/createoffer" className="nav-link px-0"> <span className="d-none d-sm-inline">Create Offer</span> </a>
                                  </li>
                                  <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Manage Offer</span> </a>
                                  </li> */}
                                  {/* <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                  </li>
                                  <li>
                                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                  </li> */}
                              {/* </ul> */}
                          {/* </li> */}
                          {/* <li>
                              <a href="#" className="nav-link px-0 align-middle">
                                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                          </li> */}
                      </ul>               
                  </div>
              </div>
              ) : null
            }


              <div className="col p-0 m-0">
                    <BrowserRouter>     
                    <Menu/>
                    <ToastContainer autoClose={3000} position={"top-right"} />
                    <Routes>
                      <Route path={`/`} element={<Home />} />
                      <Route path={`/login`} element={<Login/>}/>
                      <Route path={`/register`} element={<Register/>}/>
                      {
                        isLogged && isUser ? (
                          <Route element={<ProtectedRoute/>}>
                              <Route path={`/user/dashboard`} element={<UserDashboard/>}/>
                              <Route path={`/user/managejobs`} element={<ManageJobs/>}/>
                              <Route path={`/user/applingjobs`} element={<ApplyingJob/>}/>
                            


                          </Route>
                        ) : null
                      }

                      {
                        isLogged && isAdmin ? (
                          <Route element={<ProtectedRoute/>}>
                            <Route path={`/admin/dashboard`} element={<AdminDashboard/>}/>
                              <Route path={`/admin/managejobs`} element={<ManageJobs/>}/>
                              <Route path={`/admin/createjobs`} element={<CreateJobs/>}/>
                              <Route path={`/admin/editjobs/:id`} element={<EditJobs/>}/>
                              <Route path={`/admin/applicants`} element={<Applicants/>}/>
                              <Route path={`/admin/applingjobs/hired`} element={<Hired/>}/>
                              <Route path={`/admin/applingjobs/new`} element={<New/>}/>
                              <Route path={`/api/v1/applicants/auth/currentApplicant/:id`} element={<ApplicantsUpdate/>}/>
                              <Route path={`/admin/createoffer`} element={<CreateOffer/>}/>
                              <Route path={`/admin/manageoffer`} element={<ManageOffer/>}/>
                              <Route path={`/admin/editoffer/:id`} element={<EditOffer/>}/>
                          </Route>
                        ) : null
                      }

                      <Route path={`/*`} element={<Pnf/>}/>
                    </Routes>
                    <Footer/>
                  </BrowserRouter>
              </div>
          </div>
        </div>
    </div>

  );
}

export default MainRoute;
