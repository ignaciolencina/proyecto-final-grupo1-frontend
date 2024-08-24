import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Input from "../ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import { postLoginFn } from "../../api/auth";
import Swal from "sweetalert2";

const LoginForm = () => {
  const { login, setTableNumber } = useSession();

  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: async (userData) => {
      toast.dismiss();

      reset();

      login(userData);

      const userName = userData.firstname;

      const result = await Swal.fire({
        html: `¡Bienvenido ${userName}! Por favor ingresa tu número de mesa`,
        background: "#000000",
        color: "#ffffff",
        input: "number",
        inputAttributes: {
          autocapitalize: "off",
          min: 0,
        },
        showCancelButton: false,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#EE2737",
        preConfirm: (tableNumber) => {
          if (!tableNumber || tableNumber < 0) {
            Swal.showValidationMessage(
              "Debes ingresar un número de mesa válido."
            );
          }
          return tableNumber;
        },
        allowOutsideClick: false,
      });

      if (result.isConfirmed) {
        const tableNumber = result.value;
        setTableNumber(tableNumber);
        console.log(tableNumber)
        navigate("/");
      }
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
          required: "Campo requerido",
          minLength: {
            value: 7,
            message: "Revisar correo elecronico y/o contraseña",
          },
          maxLength: {
            value: 40,
            message: "Revisar correo elecronico y/o contraseña",
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Revisar correo elecronico y/o contraseña",
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
            message: "Revisar correo elecronico y/o contraseña",
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
