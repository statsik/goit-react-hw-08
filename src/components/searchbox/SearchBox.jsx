import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.css'
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';

const SearchBox = () => {
    
    const searchTerm = useSelector(selectNameFilter);

    const dispatch = useDispatch();
    const handleChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };
    
    return (
        <div className="search-box">
            <p>Find contacts by name</p>
            <input type="text" value={searchTerm} onChange={handleChange} />
        </div>
    )
}
export default SearchBox;