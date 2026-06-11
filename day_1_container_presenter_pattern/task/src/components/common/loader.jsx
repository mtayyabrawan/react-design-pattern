function Loader({ message }) {
    return (
        <div className="min-h-screen w-screen bg-gray-200 pt-10">
            <div className="mx-auto p-10 bg-white rounded-2xl max-w-2xl w-full flex flex-col justify-center items-center gap-4">
                <div className="border-2 border-blue-500 border-t-white animate-spin size-10 rounded-full" />
                <h1 className="text-black font-bold text-2xl">{message}</h1>
            </div>
        </div>
    );
}

export default Loader;
