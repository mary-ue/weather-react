import s from './Search.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';
import { useState } from 'react';
import { weatherRequestAsync } from '../../store/weatherAction';
import { useAppDispatch } from '../../hooks';

type Props = {}

export const Search = (props: Props) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(weatherRequestAsync(search));
  }

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.search}
        type="search"
        onChange={handleChange}
        value={search}
      />
      <button className={s.btn} type="submit">
        <SearchIcon />
      </button>
    </form>
  )
}