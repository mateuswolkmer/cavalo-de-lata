# Cavalo de Lata

> Um projeto moderno de blog construído com Astro + TinaCMS

![NPM](https://img.shields.io/npm/l/cavalo-de-lata)
![Node](https://img.shields.io/node/v/cavalo-de-lata)
![Version](https://img.shields.io/npm/v/cavalo-de-lata)

### Tópicos

🔹 [Sobre o projeto](#-sobre-o-projeto)

🔹 [Funcionalidades](#️-funcionalidades)

🔹 [Deploy da Aplicação](#-deploy-da-aplicação)

🔹 [Pré-requisitos](#-pré-requisitos)

🔹 [Como rodar a aplicação](#-como-rodar-a-aplicação)

🔹 [Estrutura do projeto](#-estrutura-do-projeto)

🔹 [Tecnologias utilizadas](#-tecnologias-utilizadas)

🔹 [Como contribuir](#-como-contribuir)

🔹 [Licença](#-licença)

## � Sobre o projeto

O **Cavalo de Lata** é um projeto de blog moderno desenvolvido com Astro e TinaCMS, oferecendo uma experiência de edição visual intuitiva e performance otimizada. Este projeto combina a velocidade do Astro com a flexibilidade do TinaCMS para criar um sistema de gerenciamento de conteúdo eficiente.

---

## ⚙️ Funcionalidades

✅ **Suporte a Markdown & MDX** com componentes TinaCMS

✅ **Coleções TinaCMS** (Páginas, Blogs, Configurações)

✅ **Edição Visual** usando Custom Loaders e Client Directives

✅ **Performance 100/100** no Lighthouse

✅ **View transitions** habilitadas

✅ **SEO-friendly** com URLs canônicas e dados OpenGraph

✅ **Suporte a Sitemap**

✅ **Feed RSS** integrado

✅ **Estilização mínima** (personalizável)

---

## 🚀 Deploy da Aplicação

> 🔗 [Link do deploy da aplicação](#) *(adicionar quando disponível)*

Para acessar a aplicação em produção, visite o link acima.

---

## 📋 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

⚠️ **Node.js** versão 18 ou superior

⚠️ **npm**, **yarn** ou **pnpm** instalado

⚠️ **Git** para controle de versão

---

## � Como rodar a aplicação

Para executar este projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/cavalo-de-lata.git
cd cavalo-de-lata
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará rodando em: `http://localhost:4321`

Para acessar o painel administrativo do TinaCMS: `http://localhost:4321/admin`

### 4. Build para produção

```bash
npm run build
npm run preview
```

---

## 🏗️ Estrutura do projeto

```
├── README.md
├── astro-tina-directive/
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── content.config.ts
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── tina/
│   ├── collections/
│   ├── components/
│   ├── config.ts
│   ├── pages/
│   └── tina-lock.json
└── tsconfig.json
```

### Principais diretórios:

- **`src/`**: Código fonte da aplicação
- **`tina/`**: Configurações e componentes do TinaCMS
- **`public/`**: Arquivos estáticos
- **`astro-tina-directive/`**: Directive customizada para integração com TinaCMS

---

## 🛠 Tecnologias utilizadas

### **Frontend**
- **Astro** ^5.5.2
- **React** ^18.3.1
- **TailwindCSS** ^4.1.7
- **Motion** ^12.18.1

### **CMS**
- **TinaCMS** ^2.7.3

### **Ferramentas**
- **TypeScript**
- **ESLint**
- **Prettier**

### **Dependências principais:**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Astro | ^5.5.2 | Framework web moderno |
| React | ^18.3.1 | Biblioteca para interfaces |
| TinaCMS | ^2.7.3 | Sistema de gestão de conteúdo |
| TailwindCSS | ^4.1.7 | Framework CSS utilitário |

---

## 📫 Como contribuir

Para contribuir com **Cavalo de Lata**, siga estas etapas:

1. 🍴 Faça um fork do projeto
2. 🌟 Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. 💾 Commit suas alterações: `git commit -m 'feat: adiciona nova feature'`
4. 📤 Push para a branch: `git push origin feature/nova-feature`
5. 🔃 Abra um Pull Request

Como alternativa, consulte a documentação do GitHub sobre [como criar um pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

---

## 📝 Scripts disponíveis

| Comando | Ação |
|---------|------|
| `npm run dev` | Inicia servidor de desenvolvimento com TinaCMS |
| `npm run build` | Build da aplicação para produção |
| `npm run preview` | Preview do build local |
| `npm run lint` | Executa o linter no código |
| `npm run format` | Formata o código com Prettier |

---

## � Documentação adicional

- 📖 [Documentação do Astro](https://docs.astro.build)
- 📖 [Documentação do TinaCMS](https://tina.io/docs)
- 💬 [Discord do TinaCMS](https://discord.gg/cG2UNREu)

---

## 👨‍💻 Autor

Feito com ❤️ por **[Seu Nome]**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**💡 Dica:** Este projeto é baseado no [Astro + TinaCMS Starter Kit](https://github.com/tinacms/tina-astro-starter), mas com melhorias e personalizações próprias.
