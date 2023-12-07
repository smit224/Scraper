import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QueryService from "../services/queries";
import Button from "@mui/material/Button";



const SignupPage: React.FC =() => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const navigate = useNavigate()



  return (
    <div className="">
      {/* <Header></Header> */}

      <section className="container mx-auto h-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                <div className="mb-5 flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-[2rem] text-[#428efb]">
                    Sign Up
                  </p>
                </div>
                <div className="relative mb-6">
                  <label></label>
                  <input
                    type="text"
                    value={name}
                    className="peer block min-h-[auto] w-full rounded border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    // id="exampleFormControlInput2"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                      // setError(null);
                    }}
                  />
                </div>

                <div className="relative mb-6">
                  <label></label>
                  <input
                    type="email"
                    value={email}
                    className="peer block min-h-[auto] w-full rounded border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    placeholder="Email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // setError(null);
                    }}
                  />
                </div>

                <div className="relative mb-6">
                  <label></label>
                  <input
                    type="password"
                    value={password}
                    className="peer block min-h-[auto] w-full rounded border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      // setError(null);
                    }}
                  />
                </div>

                <div className="text-center lg:text-left">
                  {/* <button
                    type="button"
                    className="inline-block rounded bg-[#428efb] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={registerUser}
                  >
                    Register
                  </button> */}
                <Button
                variant="contained"
                onClick={() => {
                  QueryService.registration(name,email,password)
                    .then((response) => {
                      if (
                        !response.data.success ||
                        !(response.status === 200)
                      ) {
                        alert("User Created Successfully.")
                        navigate('/login')
                        
                      }
                      
                    })
                    .catch((error) => {
                      alert("User Account not found.")
                    });
                }}
              >
                Create
              </Button>


                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-[#428efb] transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
