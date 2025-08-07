import { useForm } from "react-hook-form";

interface LoginFormData {
  name: string;
  password: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome da equipe</label>
        <input
          id="name"
          type="text"
          style={{ borderColor: errors.name && "red" }}
          placeholder="Ex.: Cantina do João"
          {...register("name", {
            required: "O nome da equipe é obrigatório",
            minLength: {
              value: 3,
              message: "A senha deve ter no mínimo 3 caracteres",
            },
            maxLength: {
              value: 100,
              message: "A senha deve ter no máximo 100 caracteres",
            },
          })}
        />
        {errors.name && (
          <span style={{ color: errors.name && "red" }}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          style={{ borderColor: errors.password && "red" }}
          placeholder="Ex.: Senha123"
          {...register("password", {
            required: "A senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres",
            },
            maxLength: {
              value: 100,
              message: "A senha deve ter no máximo 100 caracteres",
            },
          })}
        />
        {errors.password && (
          <span style={{ color: errors.password && "red" }}>
            {errors.password.message}
          </span>
        )}
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
