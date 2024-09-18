import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type FormField = {
  name: string;
  label: string;
  type: string;
  validation?: object;
};

type Props = {
  fields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  title: string;
  buttonText: string;
};

const Form = ({ fields, onSubmit, title, buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
            rounded-md"
    >
      <h1
        className="mb-6
                    text-center
                    text-3xl
                    font-bold
                    "
      >
        {title}
      </h1>
      {fields.map((field) => (
        <div
          key={field.name}
          className="flex
                    flex-col
                    mb-4"
        >
          <label
            htmlFor={field.name}
            className="text-md
                    ml-0
                    mt-2
                    text-gray-500
                    "
          >
            {field.name}
          </label>
          <input
            className="
                    h-10
                    rounded-md
                    border border-gray-300
                    bg-gray-100
                    focus:bg-white
                    px-2
                    "
            type={field.type}
            id={field.name}
            {...register(field.name, field.validation)}
          />

          {errors[field.name] && (
            <p className="text-red-500
                         text-sm">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
      <button
        className="mt-6
                  w-full
                  bg-blue-600
                  hover:bg-blue-800
                  h-10
                  text-white
                  rounded-full"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
