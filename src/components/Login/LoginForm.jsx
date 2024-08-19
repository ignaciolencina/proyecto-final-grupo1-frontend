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
        className="mt-2"
        error={errors.email}
        label="Correo electrónico"
        maxLength={40}
        minLength={7}
        name="email"
        options={{
          required: "Campo obligatorio",
          minLength: {
            value: 7,
            message: "El correo debe tener mínimo 7 caracteres",
          },
          maxLength: {
            value: 40,
            message: "El correo debe tener máximo 40 caracteres",
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "El correo debe contener @ y un dominio",
          },
        }}
        placeholder="Correo electrónico"
        register={register}
        type="email"
      />
      <Input
        className="mt-2"
        error={errors.password}
        label="Contraseña"
        name="password"
        options={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLength: 6,
          maxLength: 15,
          pattern: {
            value:
              /^(?=(?:.*\d.*\d))(?=(?:.*[a-zA-Z].*[a-zA-Z]))[a-zA-Z\d]{6,15}$/,
          },
        }}
        register={register}
        type="password"
      />
      <div className="d-flex justify-content-center mt-4">
        <button className="loginBoton" type="submit">
          INICIAR SESION
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
