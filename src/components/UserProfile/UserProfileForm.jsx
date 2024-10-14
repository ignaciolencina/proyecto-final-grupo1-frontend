import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Input from "../ui/Input/Input";
import { putRegisterFn } from "../../api/auth";
import { useSession } from "../../stores/useSession";
import { useEffect, useState } from "react";

const UserProfileForm = () => {
  const {
    user,
    userToEdit,
    clearUserToEdit,
    setUserToEdit,
    updateUser,
    login,
    userData,
  } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const [isEditing, setIsEditing] = useState({
    firstname: false,
    lastname: false,
    email: false,
  });

  useEffect(() => {
    if (!userToEdit && user) {
      setUserToEdit(user);
    } else if (userToEdit) {
      setValue("firstname", userToEdit.firstname);
      setValue("lastname", userToEdit.lastname);
      setValue("email", userToEdit.email);
    }
  }, [userToEdit, user, setUserToEdit, setValue, userData]);

  const { mutate: putRegister } = useMutation({
    mutationFn: putRegisterFn,
    onSuccess: (response) => {
      toast.dismiss();
      toast.success("Datos actualizados correctamente");

      const { token, data: updatedUser } = response;
      sessionStorage.setItem("token", token);
      updateUser(updatedUser);
      login(updatedUser);

      reset();
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Guardando cambios...");

    if (userToEdit?.id) {
      const payload = {
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        email: data.email || "",
      };

      putRegister([userToEdit.id, data]);
      return payload;
    } else {
      console.error("No se encontró userToEdit o el id es invalido");
      toast.dismiss();
      toast.error("No se encontró el usuario para editar.");
    }
  };

  const toggleEditing = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleCancelEdit = () => {
    clearUserToEdit();
    reset();
  };

  return (
    <>
      <form
        className="user-profile-form !important"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h3 className="user-profile-texto">Datos del perfil:</h3>
        <section className="row">
          <div className="mb-3 col-12 col-sm-6 col-lg-3">
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
              <div
                className="bi bi-pencil-fill ms-3"
                type="button"
                onClick={() => toggleEditing("firstname")}
              ></div>
            </div>
          </div>

          <div className="mb-3 col-12 col-sm-6 col-lg-3">
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
              <div
                className="bi bi-pencil-fill ms-3"
                type="button"
                onClick={() => toggleEditing("lastname")}
              ></div>
            </div>
          </div>

          <div className="mb-3 col-12 col-sm-6 col-lg-3">
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
              <div
                className="bi bi-pencil-fill ms-3"
                type="button"
                onClick={() => toggleEditing("email")}
              ></div>
            </div>
          </div>

          <div className="mb-3 col-12 col-sm-6 col-lg-3">
            <label className="form-label">Contraseña:</label>
            <div className="d-flex align-items-center">
              <span>********</span>
            </div>
          </div>
        </section>
        <div className="botonesResume">
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
    </>
  );
};

export default UserProfileForm;
