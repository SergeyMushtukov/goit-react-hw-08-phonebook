import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/contacts-selectors';
import { updateFilter } from '../../redux/contacts/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt => dispatch(updateFilter(evt.target.value));

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};
