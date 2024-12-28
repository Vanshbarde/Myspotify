import { Icon } from "@iconify/react"; // Import Icon instead of icon
import TextInput from "../components/TextInputs";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";

const SignupComponent = () => {
  return (
    // we are using flex in className to brought the item in the ceter
    <div className="w-full h-full flex flex-col items-center">
    {/* // to add the padding in js we use p-nos large value of nos more padding */}
    <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
   {/* it will contain two inputs */}
   <div className="font-bold mb-4 text-2xl">
                    Sign up for free listening.
                </div>
                <TextInput
                    label="Email address "
                    placeholder="Enter your Email "
                    className="my-6"
                    // value={email}
                    // setValue={setEmail}
                />
                 <TextInput
                    label="Confirm Email address "
                    placeholder="Enteryour Email again "
                    className="my-4"
                    // value={email}
                    // setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Enter a stron Password"
                    // value={password}
                    // setValue={setPassword}
                />
                    <TextInput
                    label="What should we call you ? "
                    placeholder="Enter a profile name "
                    className="my-4"
                    // value={email}
                    // setValue={setEmail}
                />
       {/* <button className="bg-green-300 text-lg font-semibold p-3 px-10 rounded-full"> LOGIN </button> */}
        <div className=" w-full flex items-center justify-center my-8">
                    <button
                        className="bg-green-300 font-semibold p-3 px-10 rounded-full"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     login();
                        // }}
                    >
                      SIGN UP</button>
        </div>  
        <div 
        className="w-full border border-solid border-gray-300">
        </div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account ?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to ="/login"> LOG IN INSTEAD</Link>
                </div>

       </div>
    </div>

    
  );
};

export default SignupComponent;
