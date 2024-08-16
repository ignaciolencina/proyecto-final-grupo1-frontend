import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Input from "../ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import { postLoginFn } from "../../api/auth";

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
      toast.success(`Bienvenido ${userData.firstname}!`);

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
    toast.loading("Cargando...");
    postLogin(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        error={errors.username}
        label="Correo electrónico"
        maxLenght={20}
        minLenght={3}
        name="username"
        options={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          length,
          minLenght: 3,
          maxLenght: 20,
        }}
        register={register}
      />
      <Input
        className="mt-3"
        error={errors.password}
        label="Contraseña"
        maxLenght={20}
        minLenght={3}
        name="password"
        options={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLenght: 3,
          maxLenght: 20,
        }}
        placeholder=""
        register={register}
        type="password"
      />
      <div className="text-center mt-4">
        <button className="btn login-btn" type="submit">
          Iniciar sesion
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
