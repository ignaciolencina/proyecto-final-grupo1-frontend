import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { useSession } from "../../stores/useSession";
import Input from "../ui/Input/Input";
import { postRegisterFn, checkEmailExists } from "../../api/auth";
import { useState } from "react";

import "registerFormStyle.css"

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleCheckboxChange1 = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange2 = () => {
    setShowRepeatedPassword(!showRepeatedPassword);
  };

  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
    watch,
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

  const password = watch("password", "");

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
            validate: async (value) => {
              const emailExists = await checkEmailExists(value);
              if (emailExists) {
                return "Este email ya esta registrado";
              }
              return true;
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
              value: 6,
              message: <>Revise la contraseña</>,
            },
            maxLength: 15,
            pattern: {
              value:
                /^(?=(?:.*\d.*\d))(?=(?:.*[a-zA-Z].*[a-zA-Z]))[a-zA-Z\d]{6,15}$/,
            },
          }}
          placeholder="Password"
          register={register}
          type={showPassword ? "text" : "password"}
        />

        <div className="password-visible ms-3">
          <input
            className="custom-checkbox mt-2"
            id="showPassword"
            type="checkbox"
            onChange={handleCheckboxChange1}
          />
          <label className="custom-label" htmlFor="showPassword">
            Ver contraseña
          </label>
        </div>
      </div>
      <div className="col-12 col-md-6 relative">
        <Input
          error={errors.repeatPassword}
          label="Repeat Password"
          maxLength={15}
          minLength={6}
          name="repeatPassword"
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          }}
          placeholder="Repeat Password"
          register={register}
          type={showRepeatedPassword ? "text" : "password"}
        />
        <div className="password-visible ms-3">
          <input
            className="custom-checkbox mt-2"
            id="showRepeatedPassword"
            type="checkbox"
            onChange={handleCheckboxChange2}
          />
          <label className="custom-label" htmlFor="showRepeatedPassword">
            Ver contraseña repetida
          </label>
        </div>
      </div>
      <div className="alertBlock py-2">
        <p className="mb-0">La contraseña debe tener:</p>
        <li>Entre 6 y 15 caracteres</li>
        <li>Al menos 2 letras</li>
        <li>Al menos 2 números</li>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-3">
        <button className="registroBoton" type="submit">
          REGISTRAR
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
