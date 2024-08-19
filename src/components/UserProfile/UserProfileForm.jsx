import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import Input from "../ui/Input/Input";

import { putRegisterFn, postRegisterFn } from "../../api/auth";
import { useSession } from "../../stores/useSession";

const UserProfileForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const queryClient = useQueryClient();

  // POST
  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada guardada");

      reset();

      // Avisarle a la tabla que se debe actualizar
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  // PUT
  const { mutate: putRegister } = useMutation({
    mutationFn: putRegisterFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada actualizada");

      reset();
      clearUserToEdit();

      // Avisarle a la tabla que se debe actualizar
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  // ---------------------------------------------
  // USER TO EDIT
  // ---------------------------------------------

  const { userToEdit, clearUserToEdit } = useSession();

  if (userToEdit) {
    setValue("nombre", userToEdit.firstname);
    setValue("apellido", userToEdit.lastname);
    setValue("email", userToEdit.email);
    setValue("contraseña", userToEdit.password);
  }

  // ---------------------------------------------
  // HANDLERS
  // ---------------------------------------------

  const handleSubmit = (data) => {
    toast.loading("Guardando cambios");

    if (userToEdit) putRegister({ userId: userToEdit.id, data });
    else postRegister(data);
  };

  const handleCancelEdit = () => {
    clearUserToEdit();
    reset();
  };

  // ---------------------------------------------
  // RENDER
  // ---------------------------------------------

  return (
    <form className="card p-3 bg-light" onSubmit={onSubmitRHF(handleSubmit)}>
      <h1>Perfil</h1>
      <hr />
      {userToEdit && (
        <div className="alert alert-warning">
          Atención: Estás modificando tu usuario a <b>{userToEdit.firstname}</b>
        </div>
      )}
      <Input
        className="mb-2"
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
      <Input
        className="mb-2"
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
      <div className="text-end">
        {userToEdit && (
          <button className="btn" type="button" onClick={handleCancelEdit}>
            Cancelar edición
          </button>
        )}
        <button className="btn btn-danger" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
export default UserProfileForm;
