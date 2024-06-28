import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Email } from "../components/auth/Email";
import { Password } from "../components/auth/Password";
import { Submit } from "../components/auth/Submit";
import { Text } from "../components/auth/CommonTextFields";
import { DateComponenet } from "../components/auth/Date";
import toast from "react-hot-toast";
import { Redirect } from "../components/helper/Redirect";
import { postHandler } from "../components/helper/apiHandler";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "../components/auth/RadioButton";

export const Register: () => JSX.Element = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const navigate = useNavigate();
  const submitHandler: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    const res = await postHandler("auth/register", {
      ...data,
      role: +data.role,
    });
    if (!res) return;
    toast.success(res.message);
    navigate("/auth/login");
  };

  return (
    <div className="border flex flex-col items-center gap-5 justify-center w-1/5 p-10">
      <h1 className="text-3xl font-roboto font-[550]">Register</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 w-full "
      >
        <Text
          register={register}
          error={errors}
          fieldId="firstName"
          fieldName="First Name"
          validate={{
            required: `First Name is required`,
            pattern: {
              value: /^[a-zA-Z-'.]+$/,
              message: "First Name is not valid",
            },
          }}
        />
        <Text
          register={register}
          error={errors}
          fieldId="lastName"
          fieldName="Last Name"
          validate={{
            required: `Last Name is required`,
            pattern: {
              value: /^[a-zA-Z-'.]+$/,
              message: "Last Name is not valid",
            },
          }}
        />
        <Email register={register} error={errors} />
        <DateComponenet
          register={register}
          error={errors}
          setError={setError}
        />
        <Password register={register} error={errors} />
        <RadioButton register={register} />
        <Submit />
      </form>
      <p>
        already user?
        <Redirect
          className="ml-2 align-center cursor-pointer text-md  text-blue-600 "
          label="Login"
          to="/auth/login"
        />
      </p>
    </div>
  );
};
