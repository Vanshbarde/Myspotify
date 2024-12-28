import { Icon } from "@iconify/react"; // Import Icon instead of icon
import TextInput from "../components/TextInputs";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    // we are using flex in className to brought the item in the ceter
    <div className="w-full h-full flex flex-col items-center">
    {/* // to add the padding in js we use p-nos large value of nos more padding */}
    <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
   {/* it will contain two inputs */}
   <div className="font-bold mb-4">
                    To continue, log in to Spotify.
                </div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                    // value={email}
                    // setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    // value={password}
                    // setValue={setPassword}
                />
       {/* <button className="bg-green-300 text-lg font-semibold p-3 px-10 rounded-full"> LOGIN </button> */}
        <div className=" w-full flex items-center justify-end my-8">
                    <button
                        className="bg-green-300 font-semibold p-3 px-10 rounded-full"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     login();
                        // }}
                    >
                        LOG IN
                    </button>
        </div>  
        <div 
        className="w-full border border-solid border-gray-300">
        </div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                <Link to="/signup" > SIGN UP FOR SPOTIFY</Link>
                </div>

       </div>
    </div>

    
  );
};

export default LoginComponent;
