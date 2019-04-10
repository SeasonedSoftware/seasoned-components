import React, { useState } from 'react'

import { LinearGradientWrap, Countdown } from 'seasoned-components'

const flexCenter = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default () => {
  const [count, setCount] = useState(10)
  const [time, setTime] = useState(10)

  return (
    <div style={{ ...flexCenter, justifyContent: 'space-around' }}>
      <LinearGradientWrap colors={['#6132CE', '#B73D97', '#DD4E44']} deg={315}>
        <div style={{ ...flexCenter, height: 100, color: 'white' }}>
          <pre>
            &lt;
            {`LinearGradient colors={['#6132CE', '#B73D97', '#DD4E44']} deg={315} /`}
            &gt;
          </pre>
        </div>
      </LinearGradientWrap>
      <Countdown
        time={time}
        onTick={setCount}
        active={true}
        onFinish={() => {
          setCount('FINISHED')
        }}
      />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setTime(time + 5)
          setCount(count + 5)
        }}
      >
        Add +5 seconds
      </button>
    </div>
  )
}
