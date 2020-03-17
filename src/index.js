import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root')   );
/*
store={store} - стор закидываем в пропсы контексту
Провайдер подключвет приложение к Контексту
Контекст обеспечивает способ передачи данных через дерево компонентов
без необходимости передавать свойства вручную на каждом уровне.

В типичном приложении React данные передаются сверху вниз (от родителя к потомку) через свойства props.
Однако это может оказаться громоздким для определенных типов свойств, которые требуются для многих компонентов в приложении.
Контекст предоставляет способ совместного использования таких значений между компонентами без необходимости явно передавать
свойство через каждый уровень дерева.

 в нашем случаи пропсами передали стор в котором стейт контексту,теперь  данные текут через Контекст и
 свойства пропсов можна взять в любом дочернем компоненте в который был передан только пропс,кроме компонента которые находиться
 в контейнере,контейнер обьвертывает компонент и пропсы а конкретно стейт ,нужно передавать пропсами сначала в контейнер,
 переделывать свойства стейта в пропсы и с помощью ХОКА connect передавать переделанные пропсы в компонент

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
