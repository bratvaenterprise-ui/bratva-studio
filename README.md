# Bratva Studio — Site

Site institucional estático (HTML, CSS e JS puros, sem dependências) pronto para hospedar no GitHub + Cloudflare Pages, Netlify, GitHub Pages ou qualquer hospedagem de arquivos estáticos.

## Estrutura de pastas

```
bratva-studio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero-bg.jpg          → fundo da seção inicial (hero)
│   ├── studio-ambiente.jpg  → foto da seção "Sobre"
│   └── video-poster.jpg     → capa do vídeo (aparece antes de dar play)
└── videos/
    └── studio-tour.mp4      → vídeo vertical "Por dentro do estúdio" (ADICIONE O SEU ARQUIVO AQUI)
```

## Como trocar as imagens

Todas as imagens têm um `id` no HTML para facilitar a localização. Basta abrir `index.html`, procurar pelo `id`, e trocar o caminho do arquivo `src`:

| ID | Onde aparece | Tamanho recomendado |
|---|---|---|
| `img-hero` | Fundo da seção inicial | 1920×1080px |
| `img-sobre` | Seção "O Estúdio" | 800×1000px (proporção 4:5) |
| `img-realismo` até `img-japones` | Cards de "Nossos Estilos" (8 cards) | 800×800px (quadrado) |
| `foto-studio-1`, `2`, `3` | Seção "Por dentro do estúdio" | 1080×1920px (retrato 9:16) |
| `video-studio` | Vídeo da seção "Por dentro do estúdio" | 1080×1920px, .mp4, até ~50MB |

**Atualmente as 8 imagens de estilo usam o serviço picsum.photos como placeholder.** Substitua pelos seus próprios trabalhos assim que tiver as fotos prontas — coloque os arquivos na pasta `images/` e troque o `src` de cada `<img>` correspondente.

## Como trocar o vídeo

1. Coloque seu arquivo de vídeo vertical na pasta `videos/`, com o nome `studio-tour.mp4` (ou outro nome — só ajuste o caminho no HTML)
2. No `index.html`, procure por `id="video-studio"` e confirme que o `<source src="...">` aponta para o arquivo certo

## Como publicar

### Opção recomendada: GitHub + Cloudflare Pages (gratuito, sem sistema de créditos)
1. Crie um repositório no GitHub e suba esta pasta inteira
2. Acesse pages.cloudflare.com → "Create a project" → "Connect to Git"
3. Selecione o repositório → "Save and Deploy" (não precisa configurar build, é HTML puro)

### Alternativa: Netlify Drop
1. Acesse netlify.com/drop
2. Arraste esta pasta inteira no navegador
3. Pronto, link gerado automaticamente

## Personalizações já incluídas
- Botão flutuante de WhatsApp (canto inferior direito), aparece após rolar a página
- Número de WhatsApp configurado: **5585989960995** (procure por `5585989960995` no `index.html` caso queira trocar)
- Seção "Nossos Estilos" unificada (estilo + foto de exemplo em cada card)
- Seção "Por dentro do estúdio" com 1 vídeo vertical + 3 fotos em retrato
- Depoimentos fictícios de exemplo — troque pelos depoimentos reais dos seus clientes assim que tiver
