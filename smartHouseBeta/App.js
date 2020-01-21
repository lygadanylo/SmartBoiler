import Main from './components/containers/Main';
import Satists from './components/containers/Satists';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Main: Main,
  Statistics: Satists,
});

const App = createAppContainer(MainNavigator);

export default App;
