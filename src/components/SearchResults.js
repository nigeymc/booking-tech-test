import { uid } from 'uid';

const SearchResults = (props) => {
    return (
        <div className="search-box-suggestions">
            <ul>
                {props.searchData.map((val) =>
                    <li key={uid()}>{val.name} {val.city}</li>
                )}
            </ul>
        </div>
    );
}

export { SearchResults as default };
