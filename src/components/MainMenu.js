import { createBottomTabNavigator } from 'react-navigation';
import PostsFeed from './PostsFeed'
import PostCreate from './PostCreate'

export default createBottomTabNavigator(
    {
        Home: {
            screen: PostsFeed
        },
        CreatePost: {
            screen: PostCreate
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)