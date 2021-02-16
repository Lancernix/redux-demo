/* 
  用于创建一个为 Count 组件状态服务的 reducer， 本质上是一个函数
  reducer 函数会接到两个函数参数，之前的状态（preState），一个为动作对象（action）
*/
import { INCREASE, DECREASE } from './actionType';

const initState = 0; // 设置初始化状态的值

export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREASE:
      return preState + data;
    case DECREASE:
      return preState - data;
    default:
      return preState;
  }
}
