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
            'Reactjs & Next Developer',
            'Vue & Nuxtjs Developer',
            'MERN & MEVN Stack Developer',
            'Full-Stack Web Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
  )
}

export default Typer