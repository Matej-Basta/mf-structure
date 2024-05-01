import Header from '../components/Header';
import Footer from '../components/Footer';

const divStyle = {
  height: '100px',
}

export default function Home() {
  return (
    <>
      <Header/>
      <div style={divStyle}>Test</div>
      <Footer />
    </>
  );
}