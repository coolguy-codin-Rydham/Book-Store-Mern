import { useEffect } from "react"
import axios from "axios"
function App() {
  useEffect(()=>{
    const getData = async()=>
      {
        const res = await axios.get("http://localhost:5555/books");
        const data = res.data
        console.log(data);
      }
      getData();

  }, [])
  return (
    <div>

    </div>
  )
}

export default App
