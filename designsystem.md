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



