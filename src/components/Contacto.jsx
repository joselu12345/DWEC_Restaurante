import React from "react";
import { useForm } from "react-hook-form";
import img from "../assets/img/menu3.jpg";
import Button from "../layouts/Button";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert(`Formulario enviado con exito:\n${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <div className="px-4 py-8">
      <h1 className="font-semibold text-4xl text-center mb-8">
        Contacta con nosotros
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <div className="m-2 p-2 w-full lg:w-1/2">
          <img src={img} alt="img" className="w-full h-auto rounded" />
        </div>

        <div className="m-2 p-4 w-full lg:w-1/2 border rounded shadow">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block">Nombre:</label>
              <input
                className="w-full p-2 border rounded"
                {...register("nombre", {
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.nombre && (
                <p className="text-red-500">{errors.nombre.message}</p>
              )}
            </div>

            <div>
              <label className="block">Email:</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Formato de email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block">Sugerencias:</label>
              <textarea
                className="w-full p-2 border rounded"
                {...register("mensaje", {
                  required: "El mensaje no puede estar vacío",
                })}
              />
              {errors.mensaje && (
                <p className="text-red-500">{errors.mensaje.message}</p>
              )}
            </div>

            <div className=" flex justify-center lg:justify-start">
              <Button title="Enviar Mensaje" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
