
import  { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string | null; // Add error prop
}

const InputField: FC<InputFieldProps> = ({ label, type, value, onChange, placeholder, error }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className='mt-'>
      <label className=' font-[500] text-sm flex justify-between'>
        {label} {error && <span className="text-red-500">{error}</span>}
      </label>
      <input
        type={type}
        name=''
        id=''
        placeholder={placeholder || `Enter ${label}`}
        className='w-full px-3 py-[6px] 2xl:py-3 md:h-auto rounded-sm border text-sm focus:bg-white focus:outline-none'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
