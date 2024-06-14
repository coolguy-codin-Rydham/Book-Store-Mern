import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const BackButton = ({destination='/'}) => {
  return (
    <div className="flex">
        <Link to={destination} className="px-4 py-1 text-white rounded-lg w-fit bg-sky-800">
            <BsArrowLeft className="text-2xl" />
        </Link>
    </div>
  )
}

export default BackButton
