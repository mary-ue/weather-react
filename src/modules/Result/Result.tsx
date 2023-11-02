import { useAppSelector } from '../../hooks';
import s from './Result.module.scss';

export const Result = () => {
  const {weather, isLoading, error} = useAppSelector(state => state.weather)

  return (
    <div className={s.result}>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : weather.name ? (
          <>
            <p>{weather.main.temp}&#8451;</p>
            <p>{weather.name}</p>
          </>
        ) : error === 'Not found' ? (
          <p>Город не найден</p>
        ) : (
          <p>Введите город</p>
        )
      }
    </div>
  )
}