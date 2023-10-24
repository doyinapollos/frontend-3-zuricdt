import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
//import placeImage2 from "../assets/images/place-image2.jpg";
import Projects from "../components/Projects";
import EditableImage from "../components/EditableImage";
import InlineTextEdit from "../components/InlineTextEdit";
import NavBarMobile from "../components/NavBarMobile";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth0();

  const [text, setText] = useState(
    "Edit me e.g Feel free to get in touch with me. I am here to assist you with any inquiries you might have."
  );
  const [text2, setText2] = useState("Add name e.g John Doe");
  const [text3, setText3] = useState("Add speciality e.g frontend developer");

  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    // Simulate loading images (e.g., fetch images from a server)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as needed
  }, []);

  const handleSave = (editedText) => {
    setText(editedText);
  };
  const handleSave2 = (editedText) => {
    setText2(editedText);
  };
  const handleSave3 = (editedText) => {
    setText3(editedText);
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorHtml(savedContent);
    }
  }, []);

  const handleEditorChange = (html) => {
    setEditorHtml(html);
    // Save content to local storage
    localStorage.setItem("editorContent", html);
  };

  return (
    isAuthenticated && (
      <div className="w-[100%] h-auto bg-green-800 flex flex-col justify-center items-center ">
        <NavBarMobile />
        <NavBar />

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <RingLoader color="#36D7B7" size={100} />{" "}
          </div>
        ) : (
          <div className="w-[90%] h-[500px] flex flex-col justify-center items-center bg-green-800 md:w-[80%] md:flex md:flex-row md:justify-around md:items-center ">
            <div className="w-[100%] h-[60%] text-white flex flex-col justify-around items-center md:w-[40%] md:h-[60%] md:flex md:flex-col md:justify-around md:items-start ">
              <p className="font-bold text-yellow-400  ">Hi there, I am</p>
              <div className="text-[21px] font-bold md:text-[26px] ">
                <InlineTextEdit
                  text={text2}
                  onSave={handleSave2}
                  placeholder="Double click to edit"
                />
              </div>
              <div className="text-[18px] font-bold md:text-[20px] ">
                <InlineTextEdit
                  text={text3}
                  onSave={handleSave3}
                  placeholder="Double click to edit"
                />
              </div>

              <InlineTextEdit
                text={text}
                onSave={handleSave}
                placeholder="Double click to edit e.g"
              />

              <div className="w-[100%] h-[80px] flex flex-col justify-between items-center md:w-[90%] md:h-[45px] md:flex md:flex-row md:justify-between md:items-center ">
                <button className="w-[160px] h-[35px] md:w-[160px] md:h-[40px] font-bold rounded-[10px] bg-green-500 text-white flex justify-center items-center ">
                  Contact me
                </button>
                <button className="w-[160px] h-[35px] md:w-[160px] md:h-[40px] font-bold rounded-[10px] bg-white text-green-800 flex justify-center items-center ">
                  Download CV
                </button>
              </div>
            </div>
            <div className="w-[100%] h-[40%] flex flex-col justify-center items-center md:w-[50%] md:h-[80%]  ">
              <div className="w-[40%] h-[40%] md:w-[70%] md:h-[80%] rounded-[7px] ">
                <EditableImage />
              </div>
            </div>
          </div>
        )}
        <section className="w-full h-auto flex justify-center items-center ">
          <div className="container mx-auto p-4 bg-white w-[50%] h-full ">
            <h1>Comments</h1>
            <ReactQuill
              value={editorHtml}
              onChange={handleEditorChange}
              theme="snow" // You can change the theme if you prefer a different style
            />
            {/* You can use editorHtml in your form submission or wherever you need the content */}
          </div>
        </section>
        <Projects />
        <Footer />
      </div>
    )
  );
};

export default LandingPage;
