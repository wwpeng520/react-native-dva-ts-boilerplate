import { INavigation } from '..';
interface IDvaLoadingProps {
    global: boolean;
    models: {
        [propName: string]: boolean;
    };
    effects: {
        [propName: string]: boolean;
    };
}

export interface INavigationProps {
    dispatch: any;
    navigation: INavigation;
    loading?: IDvaLoadingProps;
}
