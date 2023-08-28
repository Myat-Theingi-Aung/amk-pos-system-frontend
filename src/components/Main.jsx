import Nav from "./Nav";
import MainImg from '../img/main.jpg'

const Main = ({ text }) => {
  const styles = {
    container: {
      height: '50vh',
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
      <section style={{ position: 'relative', marginTop: '56px' }}>
        <div style={styles.container}></div>
      </section>
      <p className="text-uppercase text-white fs-1 fw-bold" style={{ position: 'absolute', top: '25%', left: '44%' }}>{text}</p>
    </>
  )
};

export default Main;
