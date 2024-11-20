import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define schema for validation
const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address."),
});

function LoginForm() {
  // Initialize the form with schema-based validation
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    console.log("Form Data:", data);
    // Add logic for authentication here (e.g., API call)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-end justify-center w-full gap-3">
          <Button className="w-full" type="submit">
            Reset
          </Button>
        </div>

        {/* Submit Button */}
      </form>
    </Form>
  );
}

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default ForgotPassword;
