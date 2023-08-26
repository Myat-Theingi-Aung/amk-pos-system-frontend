import Nav from "./Nav";
import MainImg from '../img/main.jpg'

const Main = ({ text }) => {
  const styles = {
    container: {
      height: '70vh',
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
      <section style={{ position: 'relative' }}>
        <div style={styles.container}></div>
      </section>
      <p className="text-uppercase text-white fs-1 fw-bold" style={{ position: 'absolute', top: '35%', left: '47%' }}>{text}</p>
    </>
  )
};

export default Main;
