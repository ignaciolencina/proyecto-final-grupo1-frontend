import { useForm } from "react-hook-form";
import "./contactoStyle.css";
import Input from "../../ui/Input/Input";

const Contacto = () => {
  const {
    register,
    // reset,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  //   const { mutate: postLogin } = useMutation({
  //     mutationFn: postLoginFn,
  //     onSuccess: (userData) => {
  //       toast.dismiss();
  //       toast.success(`Welcome ${userData.firstname}!`);

  //       reset();

  //       login(userData);

  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1500);
  //     },
  //     onError: (e) => {
  //     //   toast.dismiss();
  //     //   toast.warning(e.message);
  //     },
  //   });

  const handleSubmit = () => {
    // toast.loading("Loading...");
    // postLogin(data);
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
        <div className="contactoText">
          <h5>¿Necesitas ayuda?</h5>
          <h5>¿Sugerencias?</h5>
          <h5>
            No dudes en dejarnos tu mensaje <span>AQUI!</span>
          </h5>
        </div>
      </section>
      <section className="mx-3 contactoForm">
        <form onSubmit={onSubmitRHF(handleSubmit)}>
          <Input
            className="mt-2"
            error={errors.username}
            label="Nombre"
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
            placeholder="Nombre"
            register={register}
          />
          <Input
            className="mt-2"
            error={errors.lastname}
            label="Apellido"
            maxLenght={20}
            minLenght={3}
            name="lastname"
            options={{
              required: {
                value: true,
                message: "Obligatory field",
              },
              length,
              minLenght: 3,
              maxLenght: 20,
            }}
            placeholder="Apellido"
            register={register}
          />
          <Input
            className="mt-2"
            error={errors.email}
            label="Correo electrónico"
            maxLenght={20}
            minLenght={3}
            name="email"
            options={{
              required: {
                value: true,
                message: "Obligatory field",
              },
              length,
              minLenght: 3,
              maxLenght: 20,
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
            name="consult"
            options={{
              required: "Este campo es requerido",
              minLength: {
                value: 5,
                message: "El contenido debe tener al menos 5 caracteres",
              },
            }}
            placeholder="Escriba aqui su consulta"
            register={register}
          />
          <div className="d-flex justify-content-center mt-4">
            <button className="contactoBoton" type="submit">
              ENVIAR <span><i className="bi bi-arrow-right-short"></i></span> 
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default Contacto;
