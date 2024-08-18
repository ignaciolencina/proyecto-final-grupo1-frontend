import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { useSession } from "../../stores/useSession";
import Input from "../ui/Input/Input";
import { postRegisterFn } from "../../api/auth";

const RegisterForm = () => {
  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(
        `Nuevo usuario registrado. Bienvenido, ${userData.firstname}`
      );

      reset();

      login(userData);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading("Guardando nuevo usuario");
    postRegister(data);
  };

  return (
    <form className="row g-2" onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="col-12 col-md-4">
        <Input
          error={errors.firstname}
          label="Nombre"
          maxLength={20}
          minLength={3}
          name="firstname"
          options={{
            required: "Campo obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener mínimo 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El nombre debe tener máximo 20 caracteres",
            },
          }}
          placeholder="Nombre"
          register={register}
        />
      </div>
      <div className="col-12 col-md-4">
        <Input
          error={errors.lastname}
          label="Apellido"
          maxLength={20}
          minLength={3}
          name="lastname"
          options={{
            required: "Campo obligatorio",
            minLength: {
              value: 3,
              message: "El apellido debe tener mínimo 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El apellido debe tener máximo 20 caracteres",
            },
          }}
          placeholder="Apellido"
          register={register}
        />
      </div>
      <div className="col-12 col-md-4">
        <Input
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
      </div>
      <div className="col-12 col-md-6 relative">
        <Input
          error={errors.password}
          label="Contraseña"
          name="password"
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 8,
              message: "La contraseña debe tener mínimo 8 caracteres",
            },
            maxLength: 15,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
              message:
                "La contraseña debe tener una mayúscula, una minúscula, un dígito, y un caracter especial. Entre 8 y 15 caracteres",
            },
          }}
          register={register}
          type="password"
        />
      </div>
      <div className="col-12 col-md-6 relative">
        <Input
          error={errors.password}
          label="Repetir Contraseña"
          name="repeatPassword"
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            minLength: {
              value: 8,
              message: "Revisar",
            },
            maxLength: 15,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
              message: "Revisar",
            },
            // TODO: Revisar que las contraseñas coincidan
            // validate: (value) => {
            //     return value === data.password
            // }
          }}
          register={register}
          type="password"
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="registroBoton" type="submit">
          REGISTRAR
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
