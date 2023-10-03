import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center text-3xl text-error my-1'>
            <div className='w-[75%] mx-auto'>
                <img
                    className='mx-auto w-1/2 h-2/4'
                    src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1919.jpg?w=740&t=st=1686075332~exp=1686075932~hmac=ed7dd8633b82c13406b06c1ad973bd98efd34435cf1a0dfa87f92ee4c3b8537f"
                    alt="" />
            </div>
            <h2
                className='my-2 font-extrabold text-5xl'>
                <span
                    className='text-error'>
                    ERROR
                </span> {status || 404}
            </h2>
            <p
                className='font-bold my-4'>
                {error?.message}
            </p>
            <Link
                to='/'
                className='no-underline text-white px-5 py-3 font-bold rounded bg-error mb-20'>
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;