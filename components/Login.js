import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/client'
function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Logo" />
            <Button
                className="mt-10 w-44"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={() =>signIn("spotify")}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
