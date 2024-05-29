import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div className='outerstContainer relative'>
      <div className='scroll-container w-screen'>
        <Landing />
        <Videos /> 
        <Gallery />
        <Contact />
       {/*  <div className="footerContainer overflow-clip relative  h-20 flex ">
			
				<img className='absolute pt-5 bottom-0 overflow-auto w-screen h-auto self-center ' src={Staatsoper} alt="Background" />
				<div className="absolute  bottom-0 bg-slate-50 opacity-80 h-full w-full z-10"></div>
			</div>  */}     
      </div>

    </div>
  );
}

export default App;
