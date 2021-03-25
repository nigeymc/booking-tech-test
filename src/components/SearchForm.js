const SearchForm = (props) => {
    return (
        <main className="form-container" role="main">
            <h3>Where are you going?</h3>
            <form className="form-container form-container__form">
                <div className="form-container form-container__field">
                    <label htmlFor="pick-up-location">Pick-up location</label>
                    <input type="text" name="pick-up-location" placeholder="city, airport, station, region, district..." aria-label="pick-up-location" value={props.searchTerm} onChange={props.handleChange} />
                </div>
            </form>
        </main>
    );
}

export { SearchForm as default };