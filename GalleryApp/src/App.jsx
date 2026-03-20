import axios from 'axios'

const App = () => {

  const arr = [
    {
      user:
    }
  ]

const getData = async () => {
  const data = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
  console.log(data);
  
}


  return (
    <div className='bg-black h-screen text-white p-4 '>

<button 
onClick={() => {
getData()
}}

className='bg-green-600 text-white px-5 py-2 rounded active:scale-95
 '>
  Get Data
  </button>

    </div>
  )
}

export default App