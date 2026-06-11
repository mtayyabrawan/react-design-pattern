function Error({ title, message }) {
    return (
        <div className="min-h-screen w-screen bg-red-200 pt-10">
            <div className="mx-auto p-6 bg-gray-200 rounded-2xl max-w-2xl w-full flex flex-col justify-center items-center gap-4">
                <h1 className="text-red-500 font-bold text-2xl">
                    Error Occurred
                </h1>
                <h2 className="text-lg font-medium text-red-400">{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Error;
