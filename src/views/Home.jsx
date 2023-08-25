import Nav from "../components/Nav";
import MainImg from '../img/main.jpg'

export default function Home(){
  const styles = {
    container: {
      height: '70vh',  // Set the height to 100% of the viewport height
      width: '100%',
      backgroundImage: `url(${MainImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      opacity: 0.9
    },
  };
  return (
    <>
      <Nav />
      <section>
        <div style={styles.container}></div>
      </section>
    </>
  )
}
