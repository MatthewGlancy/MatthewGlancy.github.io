import * as React from "react"

const styles = {
  body: {
      width: '100vw',
      height: '100vh',
      backgroundColor: '#333333',
      fontFamily: 'sans-serif',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  },
  heading: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '3em',
      color: '#dedede',
      textShadow: '0 0 7px #ff8400',
  }
};

// markup
const IndexPage = () => {
  return (
    <main style={styles.body}>
        <h1 style={styles.heading}>Under Construction</h1>
    </main>
  )
}

export default IndexPage
