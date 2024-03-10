import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { HTMLInputTypeAttribute } from "react";

export type FormInputProps<T extends FieldValues> = {
  control?: Control<T>;
  name: Path<T>;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  description?: string;
};

function FormInput<T extends FieldValues>({
  control,
  name,
  type = "text",
  label = "",
  placeholder = "",
  description = "",
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
