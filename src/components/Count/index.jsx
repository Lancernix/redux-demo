import React, { Component } from 'react';
import { Select, Button } from 'antd';
import store from '../../redux/store';
import { createIncAction, createDecAction } from '../../redux/countAction';

const { Option } = Select;

export default class Count extends Component {
  state = { selectValue: 1 };

  componentDidMount() {
    // 检测 redux 中状态的变化，变化则重新 render
    store.subscribe(() => {
      // 通过 setState 使组件调用 render
      this.setState({});
    });
  }

  handleChange = (value) => {
    this.setState({ selectValue: value });
  };

  increase = () => {
    // 通知 store 进行状态更改
    store.dispatch(createIncAction(this.state.selectValue));
  };

  decrease = () => {
    store.dispatch(createDecAction(this.state.selectValue));
  };

  increaseIfOdd = () => {
    if (store.getState() % 2 === 0) {
      store.dispatch(createIncAction(this.state.selectValue));
    }
  };

  increaseAsync = () => {
    setTimeout(() => {
      store.dispatch(createIncAction(this.state.selectValue));
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>当前和为：{store.getState()}</h2>
        <Select
          style={{ width: 50 }}
          defaultValue={1}
          onChange={this.handleChange}
        >
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
        </Select>
        &nbsp;&nbsp;
        <Button type='primary' onClick={this.increase}>
          +
        </Button>
        &nbsp;
        <Button type='primary' onClick={this.decrease}>
          -
        </Button>
        &nbsp;
        <Button type='primary' onClick={this.increaseIfOdd}>
          当前和为偶数则 +
        </Button>
        &nbsp;
        <Button type='primary' onClick={this.increaseAsync}>
          异步 ＋
        </Button>
      </div>
    );
  }
}
