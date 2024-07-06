"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/*

- we start off by creating our schema using the z.object() method.

*/

const formSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name is not a valid",
    })
    .min(5, {
      message: "Must be 5 or more characters",
    }),
  email: z
    .string()
    .min(2, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  websiteLink: z
    .string({ required_error: "Website url is required" })
    .url({ message: "Invalid url" }),
  dob: z.date(),
});
const FormComp = () => {
  /*
   
- // * The useForm hook has some generic props;

- defualtValues - default values for the form;
- delayError - delay error from appearing immediately
- resolver - intergrate your preferred schema validation library;
- mode - when validation occurs. ( onChange | onBlur | onSubmit | onTouched | all )
*/

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    defaultValues: {
      username: "",
      email: "",
      websiteLink: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>This is you work email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="websiteLink"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website Link</FormLabel>
              <FormControl>
                <Input placeholder="Website Link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="dob"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>

                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormComp;

/*

- Formfield takes 3 props ( name | render | control)

*/
