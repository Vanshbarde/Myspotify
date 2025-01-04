import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate} from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Icon instead of icon
import TextInput from "../components/TextInputs";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie , setCookie] = useCookies(["token"]);
  // const history = useHistory();
  const navigate = useNavigate();

  const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and Confirm Email do not match");
      return;
    }
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);

    if (response && !response.err) {
      // Handle successful response
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
    
      alert("Success");
      navigate("/home");
    }
    
    else{
      alert("Failure");
    }
  };

  return (
    // we are using flex in className to bring the item to the center
    <div className="w-full min-h-full flex flex-col items-center bg-black text-white">
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
          label="Email address"
          placeholder="Enter your Email"
          className="my-6 "
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email address"
          placeholder="Enter your Email again"
          className="my-4"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Enter your username"
          placeholder="Enter your username"
          className="my-4"
          value={username}
          setValue={setUsername}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter a strong Password"
          className="text-white"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-6">
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className="w-full flex items-center justify-center my-8">
          <button
         className="bg-green-300 font-semibold p-3 px-10 rounded-full text-white
          hover:text-black border border-transparent shadow-lg hover:text-black 
           hover:border-2 hover:border-white  "
           onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account?
        </div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center
         justify-center py-4 rounded-full font-bold hover:text-white  hover:border-white">
        <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
