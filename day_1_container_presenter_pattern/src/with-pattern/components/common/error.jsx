function Error({ title, message, handleRetry }) {
    return (
        <div className="error-container">
            <h3>{title}</h3>
            <p>{message}</p>
            <button onClick={handleRetry}>Try Again</button>
        </div>
    );
}

export default Error;
