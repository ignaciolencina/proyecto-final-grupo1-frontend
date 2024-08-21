import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Input from "../ui/Input/Input";
import { putRegisterFn } from "../../api/auth";
import { useSession } from "../../stores/useSession";
import { useEffect, useState } from "react";

const UserProfileForm = () => {
  const { user } = useSession(); // Obteniendo el usuario desde el estado global

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const queryClient = useQueryClient();
  const { userToEdit, clearUserToEdit } = useSession();

  const [isEditing, setIsEditing] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    if (userToEdit) {
      setValue("firstname", userToEdit.firstname);
      setValue("lastname", userToEdit.lastname);
      setValue("email", userToEdit.email);
      setValue("password", userToEdit.password);
    } else if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("email", user.email);
    }
  }, [userToEdit, user, setValue]);

  const { mutate: putRegister } = useMutation({
    mutationFn: putRegisterFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Datos actualizados correctamente");
      reset();
      clearUserToEdit();
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Guardando cambios...");
    if (userToEdit) putRegister({ userId: userToEdit.id, data });
  };

  const toggleEditing = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleCancelEdit = () => {
    clearUserToEdit();
    reset();
  };

  return (
    <form
      className="user-profile-form !important"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h3 className="user-profile-texto">Datos del perfil:</h3>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <div className="d-flex align-items-center">
          {!isEditing.firstname ? (
            <span>{userToEdit?.firstname || user?.firstname}</span>
          ) : (
            <Input
              className="user-profile-form-control"
              error={errors.firstname}
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
          )}
          <button
            className="user-profile-boton-editar"
            type="button"
            onClick={() => toggleEditing("firstname")}
          >
            Editar
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Apellido:</label>
        <div className="d-flex align-items-center">
          {!isEditing.lastname ? (
            <span>{userToEdit?.lastname || user?.lastname}</span>
          ) : (
            <Input
              className="user-profile-form-control"
              error={errors.lastname}
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
          )}
          <button
            className="user-profile-boton-editar"
            type="button"
            onClick={() => toggleEditing("lastname")}
          >
            Editar
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico:</label>
        <div className="d-flex align-items-center">
          {!isEditing.email ? (
            <span>{userToEdit?.email || user?.email}</span>
          ) : (
            <Input
              className="user-profile-form-control"
              error={errors.email}
              name="email"
              options={{
                required: "Campo obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              }}
              placeholder="Correo electrónico"
              register={register}
              type="email"
            />
          )}
          <button
            className="user-profile-boton-editar"
            type="button"
            onClick={() => toggleEditing("email")}
          >
            Editar
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña:</label>
        <div className="d-flex align-items-center">
          {!isEditing.password ? (
            <span>********</span>
          ) : (
            <Input
              className="user-profile-form-control"
              error={errors.password}
              name="password"
              options={{
                required: "Campo obligatorio",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener mínimo 6 caracteres",
                },
              }}
              placeholder="Contraseña"
              register={register}
              type="password"
            />
          )}
          <button
            className="user-profile-boton-editar"
            type="button"
            onClick={() => toggleEditing("password")}
          >
            Editar
          </button>
        </div>
      </div>

      <div className="text-end">
        <button className="user-profile-boton-guardar" type="submit">
          GUARDAR
        </button>
        <button
          className="user-profile-boton-cancelar"
          type="button"
          onClick={handleCancelEdit}
        >
          CANCELAR
        </button>
      </div>
    </form>
  );
};

export default UserProfileForm;
