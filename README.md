# Portfolio — React + Vite + Framer Motion

Portfólio pessoal migrado de HTML/CSS/JS puro para React + Vite, e reorganizado com Framer Motion, tema dark-first e uma paleta/tipografia própria (Space Grotesk + IBM Plex Sans/Mono).

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Direção de design

- **Dark por padrão**: as CSS custom properties em `:root` já nascem no tema escuro (navy `#0B0E14`), sem flash de tema claro no load. `body.light` sobrescreve para o modo claro quando o visitante alterna.
- **Tipografia**: Space Grotesk (display/headings), IBM Plex Sans (corpo de texto) e IBM Plex Mono (labels, eyebrow do hero, caminhos de navegação, datas da timeline) — reforça a identidade de front-end dev sem recorrer a decoração gratuita.
- **Elemento-assinatura**: no hero, 4 "chips" arrastáveis estilo tag JSX (`<React/>`, `<Three.js/>` etc.) ao redor da foto, usando `drag` + spring physics do Framer Motion — literaliza a ideia de "pensar em componentes".
- **Navegação**: rótulos em estilo path de terminal (`~/home`, `~/about`...) com um indicador (`layoutId`) que desliza suavemente entre o item ativo, em vez do sublinhado estático anterior.

## O que mudou na arquitetura desde a migração anterior

- Troca de seção deixou de empilhar todas as `.section` com `position: fixed` + `z-index`. Agora só a seção ativa é montada no DOM via `AnimatePresence` (`mode="wait"`), com fade + slide de entrada/saída — código mais simples e sem o hack de `back-section`.
- Menu mobile virou um drawer de verdade (`transform: translateX`) com backdrop clicável, em vez de empurrar o conteúdo (`padding-left`) como antes.
- Conteúdo de About/Services/Portfolio/Contact usa um componente `Reveal` reutilizável (`whileInView`) para revelar ao rolar a página, com pequenos delays escalonados por item.
- Cards de portfolio e o CTA do GitHub têm hover com leve elevação (`whileHover`, spring); botões usam `whileTap` para feedback de clique.
- Animações respeitam `prefers-reduced-motion` (os chips arrastáveis do hero não renderizam se o usuário pediu menos movimento).

## Contato por e-mail

O formulário de contato usa [Web3Forms](https://web3forms.com/) (sem backend próprio). Pra funcionar:

1. Pegue uma Access Key gratuita em web3forms.com (é na hora, sem confirmar nada).
2. Copie `.env.example` para `.env.local` e cole a chave em `VITE_WEB3FORMS_ACCESS_KEY`.
3. Reinicie `npm run dev` (variáveis de ambiente só são lidas no start).

Sem a chave configurada, o formulário mostra o estado de erro em vez de fingir que enviou.

## Pendências

- **Imagens reais dos projetos**: copiar para `public/imagens/` (ver README dentro da pasta) — os cards do Portfólio já reservam o espaço certo com um placeholder até lá.
- Persistência de tema em `localStorage` e roteamento por URL continuam de fora por decisão anterior — fácil de adicionar depois se quiser.

## Estrutura

```
src/
├── components/
│   ├── layout/       (Sidebar com nav-pill animado, ThemeSwitcher)
│   ├── sections/      (Hero, About, Services, Portfolio, Contact)
│   └── ui/            (SkillTag, Timeline, ServiceCard, PortfolioCard,
│                        ContactInfoItem, ContactForm, Reveal)
├── context/ThemeContext.jsx   (dark-first, cor de skin)
├── hooks/useActiveSection.js, useSectionScrollNav.js
├── data/               (profile, skills, education, experience, services, projects)
├── App.jsx             (AnimatePresence orquestrando a troca de seção)
├── main.jsx
└── index.css
```
