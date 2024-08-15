import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { postConsultFn } from "../../../api/consults";

import Input from "../../ui/Input/Input";

import "./contactoStyle.css";
import Map from "../../ui/Map/Map";

const Contacto = () => {
  const {
    register,
    reset,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { mutate: postConsult } = useMutation({
    mutationFn: postConsultFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Mensaje enviado");

      reset();
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading("Loading...");
    postConsult(data);
  };

  return (
    <section className="contactoSection mb-5">
      <div className="contactoImage">
        <img
          alt="Cartel Luminoso"
          src="https://pageneon.com/cdn/shop/products/Beer-Me-Up-Led-Light-Beer-Neon-Sign-Red_1024x.jpg?v=1677664988"
        />
      </div>
      <section className="contactoInfo">
        <div className="contactoTitle">
          <h2 className="text-start p-0 m-0">CONTACTO</h2>
        </div>
        <div className="contactoSubTitle">
          <h2>CONTACTA CON NOSOTROS</h2>
        </div>
        <div className="contactoMap">
          <Map />
        </div>
        <div className="contactoText">
          <h5>¿Necesitas ayuda?</h5>
          <h5>¿Sugerencias?</h5>
          <h5>No dudes en dejarnos tu mensaje AQUI!</h5>
        </div>
      </section>
      <section className="mx-3 contactoForm">
        <form onSubmit={onSubmitRHF(handleSubmit)}>
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
                message: "El nombre debe tener un mínimo de 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe tener un máximo de 20 caracteres",
              },
            }}
            placeholder="Nombre"
            register={register}
          />
          <Input
            className="mt-2"
            error={errors.lastname}
            label="Apellido"
            maxLength={20}
            minLength={3}
            name="lastname"
            options={{
              required: "Campo obligatorio",
              minLength: {
                value: 3,
                message: "El apellido debe tener un mínimo de 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El apellido debe tener un máximo de 20 caracteres",
              },
            }}
            placeholder="Apellido"
            register={register}
          />
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
                message: "El correo debe tener un mínimo de 7 caracteres",
              },
              maxLength: {
                value: 40,
                message: "El correo debe tener un máximo de 40 caracteres",
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
            textarea
            className="mt-2"
            error={errors.consult}
            label="Detalle su consulta"
            maxLength={800}
            minLength={10}
            name="consult"
            options={{
              required: "Campo obligatorio",
              minLength: {
                value: 10,
                message: "El mensaje debe tener un mínimo de 10 caracteres",
              },
              maxLength: {
                value: 800,
                message: "El mensaje debe tener un máximo de 800 caracteres",
              },
            }}
            placeholder="Escriba aqui su consulta"
            register={register}
          />
          <div className="d-flex justify-content-center mt-4">
            <button className="contactoBoton" type="submit">
              ENVIAR{" "}
              <span>
                <i className="bi bi-arrow-right-short"></i>
              </span>
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default Contacto;
