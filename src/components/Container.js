const Container = (props) => {

    return (
        <div className="container">
                {props.children}
        </div>
    );
}

export { Container as default };