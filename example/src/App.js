import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { LinearGradientWrap, Countdown } from 'seasoned-components'
import './App.css'

export default () => {
  const [count, setCount] = useState(10)
  const [time, setTime] = useState(10)

  return (
    <>
      <Card elevation={5}>
        <CardHeader title="LinearGradientWrap" />
        <CardContent>
          <LinearGradientWrap
            colors={['#6132CE', '#B73D97', '#DD4E44']}
            deg={315}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 100,
                color: 'white',
              }}
            >
              <pre>
                {`{
  colors: ['#6132CE', '#B73D97', '#DD4E44'],
  deg: 315,
}`}
              </pre>
            </div>
          </LinearGradientWrap>
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
<LinearGradientWrap
  colors={['#6132CE', '#B73D97', '#DD4E44']}
  deg={315}
>
  <div
    style={{
      height: 100,
      height: '100%',
    }}
  />
</LinearGradientWrap>
`}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardHeader title="Countdown" />
        <CardContent>
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
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
<Countdown
  time={time}
  onTick={setCount}
  active={true}
  onFinish={() => {
    setCount('FINISHED')
  }}
/>
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </>
  )
}
