# 🚀 Devclub - Página Institucional

Uma página institucional disruptiva e futurística para o Devclub, instituição de ensino de tecnologia de excelência.

## 🎯 Características Principais

- **Design Futurístico**: Cores neon (ciano, magenta, roxo) que criam uma explosão visual
- **Animações Avançadas**: 
  - Partículas flutuantes no fundo
  - Efeitos de scroll suave
  - Animações de entrada (AOS)
  - Contadores animados de estatísticas
  - Efeitos hover em cards
  - Efeito glassmorphism na navbar
- **Seções Completas**:
  - Hero Section com estatísticas principais
  - Sobre o Devclub
  - Formações oferecidas
  - Empresas parceiras
  - Professores
  - Estatísticas detalhadas
  - Footer completo
- **Botão de Suporte**: Botão flutuante com modal de contato
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Código Organizado**: Estrutura de pastas separadas para HTML, CSS e JavaScript

## 🎨 Paleta de Cores

- **Ciano Neon**: `#00f5ff` - Cor primária para destaques
- **Magenta**: `#ff00ff` - Cor secundária para gradientes
- **Roxo**: `#8b5cf6` - Cor de acento
- **Fundo Escuro**: `#0a0a0f` - Base para contraste com cores neon

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com:
  - CSS Grid e Flexbox
  - Animações CSS (@keyframes)
  - Variáveis CSS
  - Media queries para responsividade
- **JavaScript**: Interatividade e animações
- **Bibliotecas Externas**:
  - AOS (Animate On Scroll) - Animações de scroll
  - Font Awesome - Ícones
  - Google Fonts - Fontes modernas (Orbitron e Rajdhani)

## 📂 Estrutura do Projeto

```
devclu-institucional/
├── html/
│   └── index.html          # Arquivo HTML principal
├── css/
│   └── style.css           # Arquivo CSS com estilos
├── js/
│   └── main.js             # Arquivo JavaScript com funcionalidades
└── README.md              # Documentação do projeto
```

## 🚀 Como Utilizar

1. **Abra o arquivo** `index.html` diretamente no navegador
2. Ou use um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```
3. Acesse `http://localhost:8000` no seu navegador

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- Desktop (1920px+)
- Laptop (1024px - 1440px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ✨ Destaques do Código

### CSS
- **Variáveis CSS**: Facilita manutenção e mudanças de tema
- **Glassmorphism**: Efeito de vidro fosco na navbar
- **Gradient Animations**: Animações suaves em gradientes
- **Particle System**: Partículas animadas via CSS puro

### JavaScript
- **Intersection Observer**: Detecta quando elementos entram na viewport
- **RequestAnimationFrame**: Animações suaves de contadores
- **Event Listeners**: Interatividade completa (modal, scroll, navegação)
- **Código Comentado**: Cada função é explicada detalhadamente

## 🎯 Seções da Página

1. **Navbar**: Navegação fixa com efeito glassmorphism
2. **Hero**: Apresentação impactante com estatísticas animadas
3. **Sobre**: Cards explicativos sobre o Devclub
4. **Formações**: Grid de trilhas de aprendizado com skills tags
5. **Empresas**: Logos de empresas parceiras
6. **Professores**: Cards dos instrutores com avatares animados
7. **Estatísticas**: Números impressionantes com contadores animados
8. **Footer**: Informações de contato e redes sociais
9. **Suporte**: Botão flutuante com modal de contato

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no `:root`:
```css
:root {
    --primary-neon: #00f5ff;
    --secondary-neon: #ff00ff;
    --accent-purple: #8b5cf6;
    /* ... outras variáveis */
}
```

### Alterar Textos
Todos os textos estão em HTML semântico, facilitando a edição.

### Ajustar Animações
Modifique os parâmetros do AOS no JavaScript:
```javascript
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});
```

## 📊 Estatísticas Apresentadas

- 15.000+ Alunos Formados
- 500+ Empresas Parceiras
- 98% de Empregabilidade
- 45 Países Atendidos
- 50.000+ Projetos Entregues
- 4.9 Avaliação Média

## 🌐 Empresas Parceiras (Exemplo)

Google, Amazon, Microsoft, Meta, Apple, Spotify, Uber, Airbnb

## 👨‍🏫 Professores Destacados

- Dr. Carlos Mendes - Arquiteto de Software
- Dra. Ana Silva - Especialista em IA
- Ricardo Santos - Cybersecurity Expert
- Marina Costa - Mobile Development Lead

## 📝 Notas

- A página utiliza bibliotecas externas via CDN
- Não requer instalação de dependências
- Código totalmente comentado em português
- Design focado em causar impacto emocional

## 🎨 Design Philosophy

O design foi criado para:
- **Causar Emoção**: Cores vibrantes e animações dinâmicas
- **Transmitir Inovação**: Estilo futurista e moderno
- **Focar em Dados**: Estatísticas prominentes e animadas
- **Ser Memorável**: Experiência visual única
- **Profissionalismo**: Layout limpo e organizado

## 📄 Licença

Este projeto foi criado para fins demonstrativos e pode ser utilizado livremente.

---

**Desenvolvido com 💜 e muito código pelo Devclub**
