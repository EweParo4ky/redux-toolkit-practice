import React from 'react';
import styles from '../styles.css'
// Хуки находятся в react-redux
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment, incrementByAmount } from '../slices/counterSlices';

const App = () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  const count = useSelector((state) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
<div className="container pt-5">
<h1 className="heading">
    <span>Redux</span>
    <button className="btn btn-dark" id="theme">Сменить тему</button>
  </h1>

  <hr/>
    
    <div className="card">
    <div className="card-body">
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
        <Button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</Button>
      </div>
    </div>
    </div>
  );
};
export default App;