import React from 'react';
import cn from 'classnames';
import '../styles.css'
// Хуки находятся в react-redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment, incrementByAmount, resetValue } from '../slices/counterSlices';
import { changeTheme } from '../slices/themeSlicer';

const App = () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  const count = useSelector((state) => state.counter.value);
  const themeStatus = useSelector((state) => {
  console.log('state', state)
  return state.theme});
  console.log('status',themeStatus);
  console.log(count);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();
  const themeClassName = cn('container', 'pt-5', themeStatus);
  const cardClassName = cn('card-body', themeStatus)
console.log('themeClassName', themeClassName);
  return (
<div className={themeClassName}>
<h1 className="heading">
    <span>Redux</span>
    <button className="btn btn-dark" id="theme" onClick={() =>dispatch(changeTheme())}>Сменить тему</button>
  </h1>

  <hr/>
    
    <div className="card">
    <div className={cardClassName}>
    <h5 className="card-title">Счетчик:{count} <span id="counter"></span></h5>
        <button type="button"
          className="btn btn-success"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <button type="button"
          className="btn btn-danger"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
        <button type="button"
          className="btn btn-primary"
          onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
          <div className="zeroBtn">
          <button type="button"
          className="btn btn-dark"
          aria-label="Reset value"
          onClick={() => dispatch(resetValue())}
          >
           Обнулить
          </button>
          </div>
      </div>
    </div>
    </div>
  );
};
export default App;