/* 
  该文件专门用于暴露一个 store 对象，只有一个 store 对象
*/

// 引入 createStore，专门用于创建 redux 中的核心 store 对象
import { createStore } from 'redux';
// 引入为具体组件服务的 reducer
import countReducer from './countReducer';

export default createStore(countReducer);
