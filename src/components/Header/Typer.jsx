import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const Typer = () => {
  return (
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Cursive',
          color: '#C0C1C0',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={3000}
        cursorColor="transparent"
        multiText={[
            'Full-Stack Web Developer',
            'MERN Stack Developer',
            'Open Source Coder',
            'Content Writer',
            'Full-Stack Web Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
  )
}

export default Typer