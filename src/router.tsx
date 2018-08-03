import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing, Platform, StatusBar } from 'react-native';
import {
  NavigationActions,
  NavigationState,
  NavigationStateRoute,
  NavigationRoute,
  NavigationScreenConfigProps,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import * as RouterName from './constants/router';
import * as ModelsStates from './models/states';
import size from './config/size';

import Login from './routes/login';
import Home from './routes/home';
import Mine from './routes/mine';
import Detail from './routes/detail';
import Loading from './routes/loading';

const HomeNavigator = createBottomTabNavigator(
  {
    [RouterName.Home]: { screen: Home },
    [RouterName.Mine]: { screen: Mine },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ff6600',
      inactiveTintColor: '#929292',
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: ({ navigation }: NavigationScreenConfigProps) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
      
        console.log('navigation.state: ', navigation.state);
        return {
          headerTitle: routeName,
          // header: null,
          headerStyle: {
            // 设置标题栏的样式对象
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            elevation: 0,
            height: 40,
            // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            shadowColor: 'transparent',
            shadowRadius: 0,
          },
          headerTitleStyle: {
            // 设置返回标题(back title)的样式
            alignSelf: 'center', // 安卓上顶部标题居中
            fontSize: 16,
            // color: '#fff',
            color: '#333',
            fontWeight: '400',
            flexGrow: 1,
            textAlign: 'center',
          },
          // headerBackTitle: null, // 跳转页面左侧返回箭头后面的文字
          // headerTintColor: 'red', // 设置标题颜色
          gesturesEnabled: true, // defaults to true on iOS, false on Android.
        };
      }
    },
    Detail: { screen: Detail },
  },
  // {
  //   headerMode: 'float',
  // },
  {
    // mode: "card", // 'card'默认效果；'modal'使屏幕从底部滑入,只适用于iOS
    headerMode: 'screen',
    initialRouteName: 'HomeNavigator', // 初始化app默认路由
    // 设置所有页面的options，也可在每个页面的navigationOptions设置
    navigationOptions: {
      // header: null,
      headerStyle: {
        // 设置标题栏的样式对象
        // backgroundColor: color.banner,
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        elevation: 0,
        height: size.headerHeight,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
      },
      headerTitleStyle: {
        // 设置返回标题(back title)的样式
        alignSelf: 'center', // 安卓上顶部标题居中
        fontSize: size.headerTitle,
        // color: '#fff',
        color: '#333',
        fontWeight: '400',
        flexGrow: 1,
        textAlign: 'center',
      },
      headerBackTitle: null, // 跳转页面左侧返回箭头后面的文字
      // headerTintColor: color.tabbarActiveColor, // 设置标题颜色
      gesturesEnabled: true, // defaults to true on iOS, false on Android.
    },
  },
);
const AppNavigator = createStackNavigator(
  {
    [RouterName.Main]: { screen: MainNavigator },
    [RouterName.Login]: { screen: Login },
  },
  {
    // headerMode: 'float',
    mode: 'modal',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware<IProps>(
  'root',
  state => state.router,
);
const App = reduxifyNavigator(AppNavigator, 'root');

function getActiveRouteName(navigationState: NavigationState) {
  if (!navigationState) {
    return null;
  }
  // const route = navigationState.routes[navigationState.index]
  // if (route.routes) {
  //   return getActiveRouteName(route)
  // }
  // return route.routeName

  let memoizedNavigationRoute: NavigationStateRoute<any> | NavigationRoute =
    navigationState.routes[navigationState.index];

  while (memoizedNavigationRoute.routes) {
    memoizedNavigationRoute = memoizedNavigationRoute.routes[memoizedNavigationRoute.index];
  }

  return memoizedNavigationRoute.routeName;
}

interface IProps {
  count: ModelsStates.countState;
  app: ModelsStates.AppState;
  router: any;
  dispatch: any;
}

class Router extends PureComponent<IProps> {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back());
      return true;
    }
    return false;
  };

  render() {
    const { dispatch, router, app } = this.props;
    if (app.loading) return <Loading />;

    return <App dispatch={dispatch} state={router} />;
  }
}

// @connect(({ app, router }) => ({ app, router }))
function mapStateToProps(state: any) {
  return {
    count: state.count,
    router: state.router,
    app: state.app,
  };
}
export default connect(mapStateToProps)(Router);
// export default Router
