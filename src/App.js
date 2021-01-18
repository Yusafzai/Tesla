import './App.css';
import Header from './components/Header';
import Item from './components/item';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />

        <Item
        title='Model S'
        desc='$69,420'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
