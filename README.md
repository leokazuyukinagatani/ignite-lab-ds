[Tecnologias](#-stack-utilizada) |
[Como Executar](#-rodando-localmente) |
[Projeto](#-stack-utilizada) |
[Testes](#-rodando-os-testes) |
[Documentação](#-documentação-da-api)  |
[Next Level](#-melhorias) 

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Título do Projeto

Ignite Lab- Design System - Do Figma ao React


## Roadmap

- Desenvolvimento de uma página de login no Figma
- Criação do Design System(fonts, buttons, inputs, checkboxs)
- Componentização dos elemento no Figma
- Criação de tokens de cores
- Utilização do plugin Color Styleguide para geração do Color Styles
- Criação do projeto com Vite
- Configurações do projeto(Storybook, tailwind)
- Criação dos components React(Utilizando Radix) e Stories para visualização no Storybook
- Criação da Pagina com os components criados previamente
- Criação de testes automatizados com o plugin jest
- Utilização do MSW para simular uma API
- Configuração e Deploy do Storybook utilizando o plugin storybook-deployer
- Utilizando Github Actions para automatizar o deploy do Storybook

## Links úteis
- Design no Figma disponível no link:  [Ignite Lab Design System - Figma](https://www.figma.com/file/YYbBFGWHotDau2pGI4e0u5/Ignite-Lab-Design-System?node-id=1%3A3)

- Storybook disponível no link: [Ignite Lab Design System - Storybook](https://leokazuyukinagatani.github.io/ignite-lab-ds/)

## Stack e tecnologias utilizada

React, TailwindCSS, RadixUI, Storybook, Vite, Typescript, Axios


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/leokazuyukinagatani/ignite-lab-ds
```

Entre no diretório do projeto

```bash
  cd ignite-lab-ds
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Inicie o storybook

```bash
  npm run storybook
```

Obs: Em caso de erro ao iniciar o storybook verificar versão do nodejs e utilizar o 'nvm' para alteração da versão.

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| black             | ![#000000](https://via.placeholder.com/25/000000/000000.png) #000000 |
| cyan-500          | ![#f8f8f8](https://via.placeholder.com/25/61dafb/61dafb.png) #61DAFB |
| cyan-200          | ![#00b48a](https://via.placeholder.com/25/64fff6/64fff6.png) #64FFF6 |
| gray-900          | ![#00d1a0](https://via.placeholder.com/25/121214/121214.png) #121214 |
| gray-800          | ![#00d1a0](https://via.placeholder.com/25/202024/202024.png) #202024 |
| gray-400          | ![#00d1a0](https://via.placeholder.com/25/7c7c8a/7c7c8a.png) #7C7C8A |
| gray-200          | ![#00d1a0](https://via.placeholder.com/25/c4c4cc/c4c4cc.png) #C4C4CC |
| gray-100          | ![#00d1a0](https://via.placeholder.com/25/e1e1e6/e1e1e6.png) #E1E1E6 |


## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc


## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

- Storybook
- Testes automatizados com Jest junto ao Storybook
- Simular uma API com Mock junto ao Storybook
- Utilizar Tailwind para estilização
- Utilizar Github Actions para fazer o deploy

## Suporte

Para suporte, mande um email para ![leokazuyukinagatani@gmail.com](mailto:leokazuyukinagatani@gmail.com?subject=ignitelab-design-system)


## Relacionados

Segue alguns projetos relacionados

[Awesome README](https://github.com/matiassingers/awesome-readme)

