import "@scss/contato/index.scss";

import { AppCheckBox } from "@components/Form/AppCheckBox";
import { FloatingInput } from "@components/Form/FloatingInput";

import ContatoImg from "@images/contato/bg.png";
import DecorFull from "@images/decor_full.svg";

export function Contato() {
  return (
    <section id="contato">
      <main>
        <h2 className="h2 text-strong white-text">Ficou interessado?</h2>
        <p className="body text-strong white-text">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato.
        </p>

        <form className="contato__form mt-8">
          <FloatingInput.Root>
            <FloatingInput.Input id="nome" type="text" />
            <FloatingInput.Label htmlFor="nome">
              Como devemos te chamar?
            </FloatingInput.Label>
          </FloatingInput.Root>

          <FloatingInput.Root>
            <FloatingInput.Input id="telefone" type="text" />
            <FloatingInput.Label htmlFor="telefone">
              Seu telefone
            </FloatingInput.Label>
          </FloatingInput.Root>

          <FloatingInput.Root>
            <FloatingInput.Input id="email" type="text" />
            <FloatingInput.Label htmlFor="email">
              Seu melhor E-mail
            </FloatingInput.Label>
          </FloatingInput.Root>

          <div className="contato__form-footer">
            <fieldset className="contato-form-footer__policy">
              <AppCheckBox id="policy" />

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
