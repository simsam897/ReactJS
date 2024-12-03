import { useState } from 'react'
import MyComponents from './components/MyComponents'
import Timer from './components/Timer'




function App() {

  // const [visible, setVisible] = useState(true)




  // useEffect(() => {
  //   console.log('App mounted')
  // }, [])

  return (
    <>
      {/* <div>


        {visible ? < MyComponents /> : <></>}


        <button onClick={() => setVisible(!visible)}>Toggle</button>
      </div> */}


      <Timer />

    </>
  )
}

export default App
