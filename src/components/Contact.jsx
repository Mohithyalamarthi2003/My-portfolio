import React, { useState } from "react";
import ThemeToggle from "../../ThemeToggle";

const Contact = () => {
  const [status, setStatus] = useState("");

  const [inputWidths, setInputWidths] = useState({
    firstname: "200px",
    lastname: "200px",
    email: "200px"
  });

  const [messageHeight, setMessageHeight] = useState("150px");

  // ✅ Auto-grow for all inputs (md+ screens only)
  const handleAutoGrow = (e) => {
    const length = e.target.value.length;
    const name = e.target.name;

    setInputWidths((prev) => ({
      ...prev,
      [name]: `${Math.max(200, length * 12)}px`
    }));
  };

  // ✅ Auto-grow textarea height
  const handleMessageChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setMessageHeight(e.target.style.height);
  };

  // ✅ Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnnlvrkj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("✅ Your message has been submitted successfully!");
      setStatus("Message sent successfully ✅");
      e.target.reset();
      setInputWidths({ firstname: "200px", lastname: "200px", email: "200px" });
      setMessageHeight("150px");
    } else {
      alert("❌ Something went wrong. Please try again.");
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="md:bg-gray-400 border-1 border-solid dark:bg-gray-900 bg-amber-500 overflow-hidden">
      <div className="md:max-w-[900px] w-full border p-10 md:m-20 md:ml-50 md:w-[1200px] bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
        <h1 className="font-bold text-center text-2xl underline mb-10">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="overflow-hidden">

          {/* ✅ FIRST NAME */}
          <b>First Name:</b>
          <input
            type="text"
            name="firstname"
            onChange={handleAutoGrow}
            style={{ width: inputWidths.firstname }}
            className="border p-1 mt-4 mb-4 text-center rounded-[10px] mr-4 ml-5
                       w-full md:w-auto max-w-full transition-all duration-300"
            placeholder="firstname"
            required
          />

          {/* ✅ LAST NAME */}
          <b className="md:ml-5 ml-3">Last Name:</b>
          <input
            type="text"
            name="lastname"
            onChange={handleAutoGrow}
            style={{ width: inputWidths.lastname }}
            className="border p-1 mt-4 text-center rounded-[10px] ml-5
                       w-full md:w-auto max-w-full transition-all duration-300"
            placeholder="lastname"
            required
          />

          <br />
          <br />

          {/* ✅ EMAIL */}
          <b>Email:</b>
          <input
            type="email"
            name="email"
            onChange={handleAutoGrow}
            style={{ width: inputWidths.email }}
            className="border p-1 mt-4 text-center rounded-[10px] mr-10 md:ml-13 ml-3 md:mb-10
                       w-full md:w-auto max-w-full transition-all duration-300"
            placeholder="email"
            required
          />

          <br />
          <br />

          {/* ✅ MESSAGE */}
          <span className="font-bold mt-5 md:mt-10 text-xl">
            Leave a few words!:
          </span>
          <br />

          <textarea
            rows="6"
            name="message"
            onChange={handleMessageChange}
            style={{ height: messageHeight }}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 md:mt-10 mt-5 transition-all duration-300"
            required
          />

          {/* ✅ SUBMIT BUTTON */}
          <button
            type="submit"
            className="border-1 border-solid mt-8 ml-20 md:ml-[45%] bg-blue-500 p-3 text-white pl-10 pr-10"
          >
            Send
          </button>

          {/* ✅ STATUS MESSAGE */}
          {status && (
            <p className="text-center mt-4 font-bold text-green-500">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
