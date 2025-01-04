

const PasswordInput = ({label, placeholder, value, setValue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label  for={label} className="font-semibold" >
                {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-3 border border-transparent hover:border-green-500 
                hover:border-3 border-solid rounded-lg placeholder-gray-500 bg-white
                 hover:bg-green-500 focus:bg-green-500 text-black hover:text-black focus:text-black"                  id={label}
                 value={value}
                 onChange={(e) => {
                     setValue(e.target.value);
                 }}
            />
        </div>
    );
};

export default PasswordInput;