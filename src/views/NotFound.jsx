import MyImg from '../img/not-found.jpg'

export default function NotFound(){
  const styles = {
    container: {
      height: '100vh',  // Set the height to 100% of the viewport height
      backgroundImage: `url(${MyImg})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
  };
  return (
    <>
      <div style={styles.container}></div>
    </>
  )
}
