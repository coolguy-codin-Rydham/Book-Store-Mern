import BackButton from "../Components/BackButton";
import { useState } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      tit:title,
      auth:author,
      publish_year:publishYear,
    };
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error, Check Console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-3xl"> Create Book </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500"
          />
        </div>
        <button className="p-2 m-8 bg-sky-300"
        onClick={handleSaveBook}
        >Save</button>
      </div>
    </div>
  );
};

export default CreateBook;
