import "@scss/contato/index.scss";

import { useForm, Controller } from "react-hook-form";

import { AppCheckBox } from "@components/Form/AppCheckBox";
import { FloatingInput } from "@components/Form/FloatingInput";

import ContatoImg from "@images/contato/bg.png";
import DecorFull from "@images/decor_full.svg";

interface IContatoForm {
  name: string;
  phone: string;
  email: string;
  policy: string;
}

export function Contato() {
  const { control, handleSubmit } = useForm<IContatoForm>();
  const onSubmit = (data: IContatoForm) => console.log(data);

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
                <FloatingInput.Input id="name" type="text" {...field} />
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
                render={({ field }) => <AppCheckBox id="policy" {...field} />}
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
