import BackButton from "../Components/BackButton";
import { useState } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${import.meta.env.VITE_API_URL}/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An Error Happened. Please Check Console");
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-3xl ">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px]">
        <h3 className="text-2xl "> Are you sure you wanna delete this book?</h3>
        <button
          className="w-full p-4 m-8 text-white bg-red-600"
          onClick={handleDeleteBook}
        >Yes, Delete It</button>
      </div>
    </div>
  );
};

export default DeleteBook;
