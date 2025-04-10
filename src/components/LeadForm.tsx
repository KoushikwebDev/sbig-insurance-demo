"use client"; // Only if you're using App Router

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

type FormValues = {
  name: string;
  mobile: string;
  email: string;
};

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
    // You can send this to an API or state manager
  };

  return (
    <section className="flex justify-center mt-[-3rem] z-10 relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl px-6 py-4 flex flex-col md:flex-row gap-4 w-full max-w-4xl"
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full px-4 py-2 rounded-full border"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Mobile Number"
            {...register("mobile")}
            className="w-full px-4 py-2 rounded-full border"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
          )}
        </div>

        <div className="flex-1">
          <input
            type="email"
            placeholder="Email Id"
            {...register("email")}
            className="w-full px-4 py-2 rounded-full border"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-purple-700 text-white rounded-full whitespace-nowrap"
        >
          Proceed
        </button>
      </form>
    </section>
  );
}
