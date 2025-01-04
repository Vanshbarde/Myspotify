
const TextInput = ({label,placeholder,className,value,setValue,labelClassName}) => {
return (
<div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
    <label for= { label} className={"font-semi-bold ${labelClassName}"}> 
        { label}</label>
     <input type="text"
      placeholder={placeholder}
      className="p-3 border border-transparent hover:border-green-500 
      hover:border-3 border-solid rounded-lg placeholder-gray-500 bg-white
       hover:bg-green-500 focus:bg-green-500 text-black hover:text-black focus:text-black"     
          id={label}
       value={value}
                 onChange={(e) => {
                    setValue(e.target.value);
                 }}
    /> 

    
</div>
);
}

export  default TextInput;