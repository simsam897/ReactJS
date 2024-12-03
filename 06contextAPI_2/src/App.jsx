import Item from "./components/Item"



import Total from "./components/Total.jsx"

function App() {


  return (
    <>

      <Item name="Laptop" price={1000} />
      <Item name="Mobile" price={500} />
      <Item name="Tablet" price={300} />
      <Item name="Watch" price={200} />

      <Total />
    </>
  )
}

export default App
