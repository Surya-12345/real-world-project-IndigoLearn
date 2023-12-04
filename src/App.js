import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import KickOff from './components/KickOff';
import Placements from './components/Placements';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
    <Header />
    <Banner />
    <WhyChooseUs />
    <WhatWillYouLearn />
    <Placements />
    <KickOff />
    </>
    );
}

export default App;
