## Visualização do projeto

[Deploy no netlify](https://internittest.netlify.app/)

## Tecnologias e dependências

- Vite
- React Hook form
- YUP

## Rodando o projeto

```
git clone https://github.com/ibarretom/internit_test.git
```

```
npm install
```

```
npm run dev
```

## Observações:

1. Formulário de contato não precisa funcionar, mas estar recortado. [x]
2. Precisa ter title e description. [x]
3. Utilizar H1, H2, H3... para definir a estrutura dos títulos [x]

- Utilizaria h1 para o página home na descrição do banner, mas geralmente h1's aparecem apenas uma vez na página. Na abordagem que utilizei coloquei todos os h's da home visíveis na página o que me fez escolher utilizar um h2, porém com a estilização de h1. O que é uma abordagem bem utilizada, comentada por Kevin Powell, ter tags de textos que expressam um elemento mas são estilizados como outros elementos.

4. A landing page deve ser responsiva [x]

- Como não foi dado uma referência de mobile screens, para algumas páginas preferi colocar o conteúdo como stack para certos breakpoints ao invés de deixar o layout de 3 colunas. Layout de 3 colunas (empreendimento por exemplo) é bom para telas grandes, mas para pequenas não é tão agradável. Fato o qual eu também escondi a sidebar para telas menores.

1ª seção (HOME)

- Banner com carrossel. [x]
  - O carrossel sem um indicativo não parece intuitivo para o usuário. Descobrir que tem que clicar na imagem não parece usual. Dessa forma, optei por um carrossel que a cada 2 segundos troca a imagem de fundo
- No banner teremos um botão fixo (Marque uma visita) ancorado com o formulário. [x]
- O menu lateral esquerdo estará ancorado com suas respectivas seções também. [x]

2ª seção (O EMPREENDIMENTO)

- Pequena descrição, usar Lorem ipsum. [x]
- Galeria inferior esquerda, sendo possível arrastar as imagens para esquerda/direita para ver mais. [x]
- Ao clicar nas imagens da galeria, a mesma deve ser exibida maior a direita. [x]
  - Pareceu uma boa opção para telas mobile ou tablet esconder a imagem maior.

3ª seção (PLANTAS)

- Cada botão a direita traz uma planta [x]
- Quando clicarmos na imagem da planta, ela será exibida de forma ampliada. [x]
  - Feito 2 versões, ao clicar na imagem e no botão de lupa.

4ª seção (LOCALIZAÇÃO)

- Mapa com a localização [x]
- Na lista de ícones, teremos um mouseover, ao passar o mouse nos ícones, ele acenderá no mapa a localização [x]

  - É bem difícil posicionar os pinpoints no mapa quando não se tem nenhuma referência da posição deles no mapa, principalmente quando a imagem é responsiva. Pensando nisso fiz um svg com a imagem do mapa e posicionei 3 triângulos representando o exato local em que as localizações desejadas estão.

  Com o SVG pronto, utilizei os refs do react para pegar a melhor posição dos pinpoints com relação ao mapa.

5ª seção (CONTATO)

- Formulário com nome, telefone e e-mail. [x]
- No campo de telefone e e-mail teremos que usar máscara. [x]
  - Não entendi o que seria uma máscara de email, mas fim uma implementação pela interpretação que tive, a qual após o arroba o único caractere não alfanumérico deve ser o ponto.
- Nos campos do formulário, o ideal é que se use o "Floating labels" [x]
- Todos os campos são obrigatórios.
  - Implementado validação de formulário com a biblioteca yup.
