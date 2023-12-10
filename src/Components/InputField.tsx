// // InputField.tsx

// import { ChangeEvent, FC } from 'react';

// interface InputFieldProps {
//   label: string;
//   type: string;
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   minLength?: number;
// }

// const InputField: FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, minLength }) => {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     onChange(e.target.value);
//   };

//   return (
//     <div className=''>
//       <label className='block font-[500]'>{label}</label>
//       <input
//         type={type}
//         name=''
//         id=''
//         placeholder={placeholder || `Enter ${label}`}
//         minLength={minLength}
//         className='w-full px-3 py-[10px] h- rounded-sm border text-sm focus:bg-white focus:outline-none'
//         required={minLength !== undefined}
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default InputField;


// InputField.tsx

import  { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minLength?: number;
}

const InputField: FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, minLength }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className='mt-'>
      <label className='block font-[500] text-sm'>{label}</label>
      <input
        type={type}
        name=''
        id=''
        placeholder={placeholder || `Enter ${label}`}
        minLength={minLength}
        className='w-full px-3 py-[6px] 2xl:py-3 md:h-auto rounded-sm border text-sm focus:bg-white focus:outline-none'
        required={minLength !== undefined}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
