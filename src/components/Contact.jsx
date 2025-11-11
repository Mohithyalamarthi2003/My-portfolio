import React from "react";
import ThemeToggle from "../../ThemeToggle";

const Contact=()=>
{
    return(
        <div className="md:bg-blue-200 border-1 bg-blue-300 border-solid dark:bg-gray-900">
            <div className="md:max-w-[900px] w-full border  p-10 md:m-20 md:ml-50 md:w-[1200px] bg-white dark:bg-gray-900 dark:text-white">
              <h1 className="font-bold text-center text-2xl underline mb-10">Contact Me</h1>
              <form>
              <b> FirstName:</b> <input type="text" className="border p-1 mt-4 mb-4 md:mt-10 text-center  rounded-[10px] mr-8 ml-5" placeholder="firstname" required/>
              <b>  LastName:</b> <input type="text" className="border p-1 rounded-[10px] text-center ml-5 mt-6"placeholder="lastname" required/>
                <br/><br/>
                <b>Email:</b> <input type="mail" className="border p-1 mt-4 ml-4 text-center rounded-[10px] mr-10 md:ml-13 md:mb-10" placeholder="email" required/>
                <br/><br/>
             <span className="font-bold mt-5 md:mt-10 text-xl">   Leave  a few words!: </span><br/>
              <textarea
              rows="6"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 md:mt-10 mt-5"
              required
            />
                <button type="button" className="border-1 border-solid mt-8  ml-20 md:ml-[45%] bg-blue-500 p-3 text-white  pl-10 pr-10">Send</button>

              </form>
            </div>

        </div>
    )
}

export default Contact;