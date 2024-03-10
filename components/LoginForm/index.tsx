"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormInput, { FormInputProps } from "../FormInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  name: z.string().email(),
  password: z.string().min(8),
});

type LoginFormFields = z.infer<typeof LoginFormSchema>;

function LoginForm() {
  const form = useForm<LoginFormFields>({
    defaultValues: { name: "", password: "" },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormFields> = data => {
    console.log(data);
  };

  const inputs: FormInputProps<Omit<LoginFormFields, "control">>[] = [
    {
      name: "name",
      label: "Username",
      placeholder: "Your username...",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Your password...",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {inputs.map(input => (
          <FormInput
            key={input.name}
            control={form.control}
            type={input.type}
            name={input.name}
            label={input.label}
            placeholder={input.placeholder}
          />
        ))}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Loading" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
