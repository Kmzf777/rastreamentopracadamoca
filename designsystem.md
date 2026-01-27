# Design System — Praça da Moça Café

## Visão Geral

O Praça da Moça Café é uma experiência de café premium que valoriza momentos de conexão, qualidade sensorial e a cultura brasileira do café. O design reflete elegância sofisticada, acolhimento e uma experiência sensorial memorável através de uma paleta refinada em dourado, preto e branco.

---

## Paleta de Cores

### Mapeamento de Tokens

#### Texto
- **text-primary**: `#FFFFFF` — Títulos e texto principal em fundos escuros
- **text-secondary**: `#CCCCCC` — Texto de apoio, descrições secundárias
- **text-muted**: `#999999` — Placeholders, hints, texto desabilitado
- **text-on-dark**: `#FFFFFF` — Texto sobre fundos escuros (seções pretas)
- **text-on-brand**: `#FFFFFF` — Texto sobre botões e elementos dourados

#### Superfícies
- **surface-page**: `#0D0D0D` — Fundo principal das páginas
- **surface-section**: `#000000` — Fundo de seções alternadas escuras
- **surface-card**: `#1A1A1A` — Fundo de cards e elementos elevados
- **surface-subtle**: `#262626` — Áreas de destaque sutil
- **surface-elevated**: `#1A1A1A` — Elementos com elevação (sombra)

#### Ações
- **action-primary**: `#C89B5C` — Dourado/Bronze para botões principais
- **action-primary-hover**: `#D4A968` — Hover dourado mais claro
- **action-primary-active**: `#B88A4E` — Estado pressionado (dourado escuro)
- **action-secondary**: `transparent` — Botões outlined secundários
- **action-strong**: `#C89B5C` — CTAs de alta conversão (dourado sólido)
- **action-strong-hover**: `#D4A968` — Hover de CTAs fortes

#### Bordas
- **border-default**: `#333333` — Bordas padrão em fundos escuros
- **border-subtle**: `#1A1A1A` — Bordas muito sutis
- **border-focus**: `#C89B5C` — Focus ring dourado
- **border-accent**: `#C89B5C` — Bordas de destaque (dourado)
- **border-light**: `#FFFFFF` — Bordas em botões outlined

#### Status
- **status-success**: `#4CAF50` — Sucesso, confirmação
- **status-warning**: `#FFA726` — Alertas, atenção
- **status-error**: `#F44336` — Erros, problemas

---

## Tipografia

### Famílias de Fonte

#### Decorativa (Script)
- **Uso**: Palavras decorativas como "Viva a", "Conheça a", "Destaque"
- **Família**: 'Playlist Script', 'Allura', 'Great Vibes', 'Dancing Script'
- **Cor**: action-primary
- **Peso**: font-normal (400)

#### Títulos (Sans-serif Bold)
- **Uso**: Títulos principais, headlines
- **Família**: 'Montserrat', 'Poppins', 'Raleway'
- **Peso**: font-bold (700) a font-black (900)
- **Transform**: uppercase
- **Letter-spacing**: 0.15em a 0.2em

#### Corpo (Sans-serif)
- **Uso**: Texto de corpo, subtítulos
- **Família**: 'Open Sans', 'Lato', 'Roboto'
- **Peso**: font-normal (400) a font-semibold (600)

### Escala de Tamanhos

- **text-xs** (12px): Badges, micro-labels
- **text-sm** (14px): Navegação, captions
- **text-base** (16px): Corpo de texto padrão
- **text-lg** (18px): Subtítulos, parágrafos destacados
- **text-xl** (20px): Subtítulos médios
- **text-2xl** (24px): Títulos de cards
- **text-3xl** (30px): Títulos de seção
- **text-4xl** (36px): Títulos principais
- **text-5xl** (48px): Texto decorativo script
- **text-6xl** (60px): Headlines hero médias
- **text-7xl** (72px): Headlines hero principais

---

## Espaçamento

### Sistema de Espaços

- **space-1** (4px): Micro-gaps, ícones inline
- **space-2** (8px): Gaps pequenos entre elementos próximos
- **space-3** (12px): Gaps médios internos
- **space-4** (16px): Padding padrão de botões e inputs
- **space-6** (24px): Padding de cards, gaps entre elementos
- **space-8** (32px): Gaps entre grupos de conteúdo
- **space-12** (48px): Padding vertical de seções médias
- **space-16** (64px): Padding vertical de seções grandes
- **space-20** (80px): Padding de seções hero
- **space-24** (96px): Espaçamento entre seções principais
- **space-30** (120px): Padding máximo de seções fullwidth

### Container
- **Max-width**: 1400px - 1600px
- **Padding horizontal**: space-8 (mobile), space-12 (desktop)

---

## Componentes

### Header/Navegação

#### Estrutura
```
[Logo] -------------------------------------------- [Menu]
```

#### Especificações

**Container**
- Background: `rgba(0, 0, 0, 0.8)` ou surface-section com transparência
- Altura: space-20
- Padding: space-6 horizontal
- Position: fixed ou sticky
- Z-index: 1000

**Logo**
- Posição: Esquerda
- Altura: space-12 a space-16
- Cores: action-primary + text-on-dark

**Navegação**
- Display: flex, row
- Gap: space-6 a space-8
- Alinhamento: direita
- Font-size: text-sm a text-base
- Font-weight: font-semibold
- Color: text-on-dark

**Estados do Menu**
- Default: text-on-dark
- Hover: action-primary, transition 0.3s
- Active: action-primary com border-bottom border-accent

---

### Botões

#### Botão Primary (CTA)
```
Estilo: Outlined
```
- Background: action-secondary (transparent)
- Border: 2px solid border-light ou border-accent
- Border-radius: radius-sm (0px a 2px - cantos retos)
- Padding: space-3 space-8
- Font-size: text-sm
- Font-weight: font-semibold
- Text-transform: uppercase
- Letter-spacing: 0.1em
- Color: text-on-dark

**Estados**
- Hover: 
  - Background: action-primary
  - Color: text-on-brand
  - Transition: 0.3s ease
- Active: Background: action-primary-active
- Disabled: Opacity 0.5, cursor not-allowed

#### Botão Strong (CTA Sólido)
```
Estilo: Filled
```
- Background: action-strong
- Border: none
- Border-radius: radius-sm
- Padding: space-4 space-8
- Font-size: text-sm
- Font-weight: font-semibold
- Text-transform: uppercase
- Color: text-on-brand
- Shadow: shadow-button-primary

**Estados**
- Hover: 
  - Background: action-strong-hover
  - Shadow: shadow-lg
  - Transform: translateY(-2px)
- Active: Background: action-primary-active
- Focus: Outline: 2px solid border-focus, offset 2px

---

### Hero Section

#### Container
- Background: Imagem com overlay escuro
- Overlay: `rgba(0, 0, 0, 0.4)` a `rgba(0, 0, 0, 0.6)`
- Min-height: 70vh a 100vh
- Display: flex, align-items center, justify-content center
- Padding: space-20 space-6

#### Conteúdo
```html
<div class="hero-content">
  <h3 class="hero-decorative">Viva a</h3>
  <h1 class="hero-title">EXPERIÊNCIA</h1>
  <p class="hero-subtitle">Compartilhando momentos através dos bancos das nossas praças.</p>
  <button class="hero-cta">CARDÁPIO</button>
</div>
```

**Texto Decorativo (hero-decorative)**
- Font-family: Script
- Font-size: text-5xl
- Color: action-primary
- Font-weight: font-normal
- Margin-bottom: space-2

**Título Principal (hero-title)**
- Font-family: Sans-serif Bold
- Font-size: text-7xl (mobile: text-4xl)
- Font-weight: font-bold
- Color: text-primary
- Text-transform: uppercase
- Letter-spacing: 0.15em a 0.2em
- Line-height: 1.2
- Margin: 0

**Subtítulo (hero-subtitle)**
- Font-family: Sans-serif
- Font-size: text-lg
- Font-weight: font-normal
- Color: text-secondary
- Max-width: 600px
- Margin: space-6 auto space-8
- Line-height: 1.6

---

### Seções Informativas

#### Container
- Background: surface-section
- Padding: space-30 space-6 (mobile: space-16 space-6)
- Text-align: center

#### Conteúdo
```html
<div class="section-content">
  <h3 class="section-decorative">Conheça a</h3>
  <h2 class="section-title">NOSSA HISTÓRIA</h2>
  <p class="section-text">Descrição do conteúdo...</p>
</div>
```

**Texto Decorativo (section-decorative)**
- Font-family: Script
- Font-size: text-5xl (mobile: text-4xl)
- Color: action-primary
- Font-weight: font-normal
- Margin-bottom: space-2

**Título de Seção (section-title)**
- Font-family: Sans-serif Bold
- Font-size: text-5xl (mobile: text-3xl)
- Font-weight: font-bold
- Color: text-primary
- Text-transform: uppercase
- Letter-spacing: 0.15em
- Margin: 0 0 space-6 0

**Texto de Seção (section-text)**
- Font-family: Sans-serif
- Font-size: text-base a text-lg
- Font-weight: font-normal
- Color: text-secondary
- Max-width: 800px
- Margin: 0 auto
- Line-height: 1.6

---

### Cards

#### Card Padrão
- Background: surface-card
- Border-radius: radius-xl
- Padding: space-6
- Shadow: shadow-card
- Transition: all 0.3s ease

**Estados**
- Hover:
  - Shadow: shadow-card-hover
  - Transform: translateY(-4px)
- Active: Transform: translateY(-2px)

#### Card de Produto/Empório
```html
<div class="product-card">
  <img class="product-image" />
  <div class="product-content">
    <h3 class="product-title">Nome do Produto</h3>
    <p class="product-description">Descrição breve</p>
    <button class="product-cta">VER MAIS</button>
  </div>
</div>
```

**Imagem**
- Border-radius: radius-lg (topo) ou radius-xl
- Aspect-ratio: 4/3 ou 1/1
- Object-fit: cover

**Título**
- Font-size: text-2xl
- Font-weight: font-bold
- Color: text-primary
- Margin-bottom: space-3

**Descrição**
- Font-size: text-base
- Color: text-secondary
- Line-height: 1.5
- Margin-bottom: space-4

---

### Inputs/Forms

#### Input Padrão
- Background: surface-card
- Border: 1px solid border-default
- Border-radius: radius-sm
- Padding: space-4
- Font-size: text-base
- Color: text-primary

**Estados**
- Focus:
  - Border: 2px solid border-focus
  - Outline: 2px solid border-focus com 2px offset
- Disabled: 
  - Background: surface-subtle
  - Color: text-muted
  - Cursor: not-allowed

#### Textarea
- Min-height: space-30
- Resize: vertical
- Mesmas propriedades do input

---

## Efeitos e Animações

### Transições
- **Links/Navegação**: 0.3s ease
- **Botões**: 0.3s ease-in-out
- **Cards**: all 0.3s ease
- **Scroll**: smooth behavior

### Animações
- **Fade-in**: Elementos aparecem ao scroll (AOS, Intersection Observer)
- **Parallax**: Sutil em imagens de fundo (velocidade 0.5x)
- **Carousel**: Transição suave entre slides (1s ease)
- **Hover Lift**: Transform translateY(-4px) em cards

### Sombras (valores específicos)
- **shadow-sm**: `0 1px 2px rgba(0, 0, 0, 0.05)`
- **shadow-md**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **shadow-lg**: `0 10px 15px rgba(0, 0, 0, 0.2)`
- **shadow-card**: `0 4px 12px rgba(0, 0, 0, 0.3)`
- **shadow-card-hover**: `0 8px 24px rgba(200, 155, 92, 0.2)`
- **shadow-button-primary**: `0 4px 8px rgba(200, 155, 92, 0.3)`

---

## Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptações

#### Mobile (< 768px)
- Header: Menu hamburguer, logo centralizado
- Hero: text-4xl para títulos, space-16 padding
- Seções: space-16 padding vertical
- Grid: 1 coluna
- Font-size: reduzir 20-30%

#### Tablet (768px - 1024px)
- Header: Menu completo ou parcialmente colapsado
- Hero: text-5xl para títulos
- Grid: 2 colunas
- Padding: space-20 vertical

#### Desktop (> 1024px)
- Layout completo
- Grid: 3-4 colunas
- Padding: space-30 vertical
- Max-width: 1400px-1600px

---

## Exemplos de Código

### Hero Section Completa

```html
<section class="hero">
  <div class="hero-content">
    <h3 style="
      font-family: 'Playlist Script', cursive;
      font-size: var(--text-5xl);
      color: var(--action-primary);
      font-weight: var(--font-normal);
      margin-bottom: var(--space-2);
    ">Viva a</h3>
    
    <h1 style="
      font-family: 'Montserrat', sans-serif;
      font-size: var(--text-7xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      line-height: 1.2;
      margin: 0;
    ">EXPERIÊNCIA</h1>
    
    <p style="
      font-family: 'Open Sans', sans-serif;
      font-size: var(--text-lg);
      color: var(--text-secondary);
      max-width: 600px;
      margin: var(--space-6) auto var(--space-8);
      line-height: 1.6;
    ">Compartilhando momentos através dos bancos das nossas praças.</p>
    
    <button style="
      background: transparent;
      border: 2px solid var(--border-light);
      border-radius: var(--radius-sm);
      padding: var(--space-3) var(--space-8);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-on-dark);
      cursor: pointer;
      transition: all 0.3s ease;
    ">CARDÁPIO</button>
  </div>
</section>
```

### CSS Variables

```css
:root {
  /* Cores - Texto */
  --text-primary: #FFFFFF;
  --text-secondary: #CCCCCC;
  --text-muted: #999999;
  --text-on-dark: #FFFFFF;
  --text-on-brand: #FFFFFF;
  
  /* Cores - Superfícies */
  --surface-page: #0D0D0D;
  --surface-section: #000000;
  --surface-card: #1A1A1A;
  --surface-subtle: #262626;
  --surface-elevated: #1A1A1A;
  
  /* Cores - Ações */
  --action-primary: #C89B5C;
  --action-primary-hover: #D4A968;
  --action-primary-active: #B88A4E;
  --action-secondary: transparent;
  --action-strong: #C89B5C;
  --action-strong-hover: #D4A968;
  
  /* Cores - Bordas */
  --border-default: #333333;
  --border-subtle: #1A1A1A;
  --border-focus: #C89B5C;
  --border-accent: #C89B5C;
  --border-light: #FFFFFF;
  
  /* Espaçamento */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  
  /* Tipografia - Tamanhos */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  --text-5xl: 48px;
  --text-6xl: 60px;
  --text-7xl: 72px;
  
  /* Tipografia - Pesos */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 8px 24px rgba(200, 155, 92, 0.2);
  --shadow-button-primary: 0 4px 8px rgba(200, 155, 92, 0.3);
}
```

---

## Diretrizes de Marca

### Tom e Voz
- **Elegante**: Design sofisticado com toques de luxo
- **Acolhedor**: Convidativo e confortável
- **Experiencial**: Foco na experiência sensorial do café
- **Brasileiro**: Orgulho da origem e cultura local

### Fotografia
- **Estilo**: Profissional, alta qualidade
- **Foco**: Momentos de conexão, café sendo preparado, ambiente acolhedor
- **Iluminação**: Natural, quente, convidativa
- **Composição**: Limpa, com espaço negativo para texto

---

## Checklist de Implementação

- [ ] Configurar CSS Variables com todos os tokens
- [ ] Implementar header fixo/sticky com transparência
- [ ] Carregar fontes: Playlist Script, Montserrat, Open Sans
- [ ] Criar sistema de grid responsivo
- [ ] Implementar componentes de botão com todos os estados
- [ ] Criar seções fullwidth alternadas (imagem/preto)
- [ ] Adicionar transições e hover states
- [ ] Implementar carousel para hero (Swiper.js)
- [ ] Configurar animações on scroll (AOS)
- [ ] Otimizar e comprimir imagens
- [ ] Testar responsividade em todos os breakpoints
- [ ] Validar acessibilidade (focus states, contraste)
- [ ] Implementar navegação suave entre seções
- [ ] Adicionar loading states para imagens

---

## Recursos Recomendados

### Fontes (Google Fonts)
- **Script**: Playlist Script, Allura, Great Vibes, Dancing Script
- **Sans-serif Bold**: Montserrat, Poppins, Raleway
- **Corpo**: Open Sans, Lato, Roboto

### Bibliotecas
- **Carousel**: Swiper.js, Slick Slider
- **Animações**: AOS (Animate On Scroll), GSAP
- **Ícones**: Font Awesome, Feather Icons
- **Utilities**: Tailwind CSS (opcional)

### Performance
- **Imagens**: WebP format, lazy loading
- **Fontes**: Font-display: swap, preload critical fonts
- **CSS**: Critical CSS inline, defer non-critical

---

## Notas Finais

Este Design System foi construído exclusivamente com tokens semânticos para garantir consistência, manutenibilidade e escalabilidade. Todos os valores são reutilizáveis e podem ser facilmente ajustados alterando as CSS Variables.

**Lembre-se**: Nunca use valores arbitrários. Se precisar de algo que não existe nos tokens, adicione ao sistema primeiro, depois implemente.