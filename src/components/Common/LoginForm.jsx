import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postLoginFn } from "../../api/auth";
import Input from "../ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";

const LoginForm = () => {
  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`Welcome ${userData.firstname}!`);

      reset();

      login(userData);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading("Loading...");
    postLogin(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        error={errors.username}
        label="Username"
        maxLenght={20}
        minLenght={3}
        name="username"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          length,
          minLenght: 3,
          maxLenght: 20,
        }}
        placeholder="Username"
        register={register}
      />
      <Input
        className="mt-3"
        error={errors.password}
        label="Password"
        maxLenght={20}
        minLenght={3}
        name="password"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          minLenght: 3,
          maxLenght: 20,
        }}
        placeholder="Password"
        register={register}
        type="password"
      />
      <div className="text-center mt-4">
        <button className="btn text-light login-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
