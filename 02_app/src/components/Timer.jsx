import React from 'react'

const Timer = () => {
  const [time, setTime] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {

      setTime(time => time + 1)
      console.log('Timer is updating');
    }, 1000)
    return () => {


      clearInterval(interval)
      console.log('Timer is cleening up');
    }
  }, [time])
  return (
    <div>
      <h1>Timer</h1>
      <p>current time is {time}</p>

    </div>
  )
}

export default Timer