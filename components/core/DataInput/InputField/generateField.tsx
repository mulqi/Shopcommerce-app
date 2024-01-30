import { InputFields } from ".";
import { TextField } from "..";

export const generateFields = (start: number, end: number, isWide: boolean) => {
    return InputFields.slice(start, end).map((field, index) => (
      <div key={index} className={`w-full ${isWide ? 'md:w-[359px]' : 'md:w-[178px]'}`}>
        <TextField placeholder={field.placeholder} />
      </div>
    ));
  };