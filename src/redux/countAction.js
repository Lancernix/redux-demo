/* 
  创建 action 对象
*/
import { INCREASE, DECREASE } from './actionType';

export const createIncAction = (data) => {
  return { type: INCREASE, data: data };
};
export const createDecAction = (data) => {
  return { type: DECREASE, data: data };
};
