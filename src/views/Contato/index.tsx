import "@scss/contato/index.scss";

import { useForm, Controller, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { AppCheckBox } from "@components/Form/AppCheckBox";
import { FloatingInput } from "@components/Form/FloatingInput";

import ContatoImg from "@images/contato/bg.png";
import DecorFull from "@images/decor_full.svg";
import { useEffect } from "react";
interface IContatoForm {
  name: string;
  phone: string;
  email: string;
  policy: true;
}

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório."),
    phone: yup
      .string()
      .length(16, "Insira um telefone válido. Tamanho")
      .matches(
        /^\([1-9]{2}\) 9 [0-9]{4}-[0-9]{4}$/,
        "Insira um telefone válido. Formato"
      )
      .required("Telefone obrigatório."),
    email: yup
      .string()
      .email("Insira um email válido.")
      .required("Telefone é obrigatório."),
    policy: yup
      .boolean()
      .isTrue("Você deve aceitar a política de privacidade.")
      .required(),
  })
  .required();

export function Contato() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IContatoForm>({
    resolver: yupResolver(schema),
  });

  const { isSubmitSuccessful, submitCount } = useFormState({ control });

  const onSubmit = () => {
    alert("Formulário enviado via axios.");
  };

  useEffect(() => {
    if (submitCount > 0 && !isSubmitSuccessful && errors) {
      const valuesErrors = Object.values(errors).map((error) => error.message);

      alert(
        `Não foi possível enviar o formulário. Erros: \n ${valuesErrors.join(
          "\n"
        )}`
      );
    }
  }, [isSubmitSuccessful, submitCount, errors]);

  return (
    <section id="contato">
      <main>
        <h2 className="h2 text-strong white-text">Ficou interessado?</h2>
        <p className="body text-strong white-text">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="contato__form mt-8">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <FloatingInput.Root>
                <FloatingInput.Input
                  id="name"
                  type="text"
                  mask="name"
                  {...field}
                />
                <FloatingInput.Label htmlFor="name">
                  Como devemos te chamar?
                </FloatingInput.Label>
              </FloatingInput.Root>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <FloatingInput.Root>
                <FloatingInput.Input
                  id="phone"
                  type="text"
                  mask="phone"
                  {...field}
                />
                <FloatingInput.Label htmlFor="phone">
                  Seu telefone
                </FloatingInput.Label>
              </FloatingInput.Root>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FloatingInput.Root>
                <FloatingInput.Input
                  id="email"
                  type="text"
                  mask="email"
                  {...field}
                />
                <FloatingInput.Label htmlFor="email">
                  Seu melhor E-mail
                </FloatingInput.Label>
              </FloatingInput.Root>
            )}
          />

          <div className="contato__form-footer">
            <fieldset className="contato-form-footer__policy">
              <Controller
                name="policy"
                control={control}
                render={({ field }) => {
                  const { value, onChange, ...rest } = field;
                  return (
                    <AppCheckBox
                      id="policy"
                      value={value?.toString()}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e.target.checked)
                      }
                      {...rest}
                    />
                  );
                }}
              />

              <label className="subtitle text-medium white-text">
                Li e aceito os termos de uso dos dados conforme indicado na
                Política de Privacidade.
              </label>
            </fieldset>

            <button type="submit">Enviar</button>
          </div>
        </form>
      </main>

      <img src={ContatoImg} className="contato__bg-img" />
      <img src={DecorFull} className="contato__floating-image" />
    </section>
  );
}
