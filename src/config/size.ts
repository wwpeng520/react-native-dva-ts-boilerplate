/**
 * 关于大小的全局属性：高度，宽度，1像素，边距，头像大小等
 */

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),

    paddingLarge: 15,  // 统一设置页面的边距
    padding: 12,
    paddingMiddle: 10,
    paddingSmall: 8,

    avatarSize: 50, // 头像大小
    avatarSizeSmall: 40,
    avatarSizeLarge: 65,
    avatarBorderRadius: 5,

    btnHeight: 37, // 按钮高度
    btnHeightSmall: 30, // 按钮高度
    btnBorderRadius: 35, // 按钮边框弧度
    btnWidth: 0.6 * Dimensions.get('window').width,
    btnWidthLarge: 0.8 * Dimensions.get('window').width,
    btnWidthSmall: 0.4 * Dimensions.get('window').width,

    // headerHeight: Platform.OS === 'ios'? 64: 44, // 标题栏高度（iOS要加上20的状态栏高度）
    headerHeight: 44, // 标题栏高度
    headerTitle: 20, // 顶部导航标题
    headerTitleSmall: 17, // 顶部导航按钮
    headerBtn: 20, // 顶部导航左侧返回按钮距左边
    headerPadding: 15, // 顶部导航左侧返回按钮距左边
    searchBarFont: 13.5, // 顶部搜索文字大小

    tabBarHeight: 49, // 底部导航栏高度
    tabBarIcon: 30, // 底部导航栏 icon 大小
    tabBarTitle: 10, // 底部导航栏文字大小

    // 微粉兔
    hufenItemHeight: 110, // 互粉列表 item 高度
    // xifenItemHeight: avatarSize + paddingMiddle * 2, // 吸粉/加粉列表 item 高度
}
