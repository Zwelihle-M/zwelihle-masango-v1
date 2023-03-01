import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="w-full" id="contact">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center">
        <h1 className="py-4 text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
            {" "}
            Contact
          </span>
        </h1>
        <div className="space-y-4">
          {/* form */}
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <p>0716224608</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p>South Africa</p>
          </div>

          {/* icons */}

          <div>
            <form
              action="https://getform.io/f/f45cc512-e7f0-44f5-a2df-977c40eb53ef"
              method="POST"
              className="flex flex-col space-y-2 w-fit mx-auto sm:w-full sm:max-w-md text-gray-900"
            >
              <div className="flex space-x-2 ">
                <input
                  placeholder="Name"
                  type="text"
                  className="formInput w-1/2 h-8"
                  name="name"
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="formInput w-1/2 h-8"
                  name="email"
                  required
                />
              </div>
              <input
                placeholder="Subject"
                type="text"
                className="formInput "
                name="subject"
                required
              />

              <textarea
                placeholder="Message"
                className="formInput"
                name="message"
                rows={4}
                required
              />

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-40"></div>
                {/* <button
                  className="relative w-full bg-violet-600 py-2 px-10 rounded-lg text-md text-white  duration-200 ease-in-out hover:scale-105"
                  type="submit"

                  onClick={onSubmit}
                >
                  {state.loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PulseLoader color="white" size={10} />
                    </div>
                  )}
                  <span className={state.loading ? "opacity-0" : "opacity-100"}>
                    Submit
                  </span>
                </button> */}
                <button
                  className="relative w-full bg-violet-600 py-2 px-10 rounded-lg text-md text-white duration-200 ease-in-out hover:scale-105"
                  type="submit"
                >
                  <div className="absolute inset-0 flex items-center justify-center"></div>

                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
