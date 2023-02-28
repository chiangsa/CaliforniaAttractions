import './App.css';
import Place from './components/Place';
import LakeTahoeImage from './images/Lake Tahoe.jpeg'
import GreatAmericaImage from './images/Great America.jpeg'
import GoldenGateImage from './images/Golden Gate.jpeg'
import YosemiteImage from './images/Yosemite.jpeg'
import DisneyImage from './images/Disney.jpeg'
import SDZooImage from './images/SDZoo.jpeg'
import MontBayAquariumImage from './images/Aquarium.jpeg'
import LongBeachImage from './images/Long Beach.jpeg'
import StudiosImage from './images/Studios.jpeg'
import HollywoodImage from './images/Hollywood.jpeg'





const App = () => {

  return (
    <div className="App">
      <h1>Must See California Attractions!</h1>
      <Place name = 'Lake Tahoe' activities = 'Hiking, Skiing, Boating' image = {LakeTahoeImage} url='https://goo.gl/maps/U7ZXm7Fk11s5X6V97'/>
      <Place name = 'Great America' activities = 'Amusement Park, Roller Coasters' image = {GreatAmericaImage} url='https://goo.gl/maps/Jr5VkBjGRMPjEBZj7'/>
      <Place name = 'San Francisco' activities = 'Golden Gate Bridge, Fishermans Warf' image = {GoldenGateImage} url='https://goo.gl/maps/17KrLmUAd1ype2719'/>
      <Place name = 'Yosemite National Park' activities = 'Sightseeing, Rock Climbing, Hiking' image = {YosemiteImage} url='https://goo.gl/maps/BFXxvG5VnGbtA9e57'/>
      <Place name = 'Disneyland Park' activities = 'Family Friendly, Amusement Park' image = {DisneyImage} url='https://goo.gl/maps/A4REEw3aSYAih8Gh8'/>
      <Place name = 'San Diego Zoo' activities = 'Animals, Scenic' image = {SDZooImage} url='https://goo.gl/maps/p88R8XXZvBb2ynnK6'/>
      <Place name = 'Monterey Bay Aquarium' activities = 'Aquarium, Tour Guides' image = {MontBayAquariumImage} url='https://goo.gl/maps/nNDMHAnvGnR8H5fH8'/>
      <Place name = 'Long Beach' activities = 'Surfing, Sunsets, Restaurants' image = {LongBeachImage} url='https://goo.gl/maps/BoyY55iodcqxhkx59'/>
      <Place name = 'Universal Studios' activities = 'Restaurants, Roller Coasters' image = {StudiosImage} url='https://goo.gl/maps/8i2KnVnR1N5WBa9x8'/>
      <Place name = 'Hollywood' activities = 'Walf of Fame, Museums' image = {HollywoodImage} url='https://goo.gl/maps/DeBmqDoZhpWjSNTy8'/>
      
    </div>
  )
}

export default App