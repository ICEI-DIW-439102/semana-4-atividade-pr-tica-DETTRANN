const gymStreakData = {
  sistema: {
    nome: "GymStreak",
    subtitulo: "Organização e acompanhamento de treinos",
    chamada: "Organize seu treino ideal",
    descricao:
      "Monte rotinas, ajuste o volume, registre cargas e acompanhe sua evolução em uma experiência pensada para constância na academia.",
    menu: [
      { texto: "Destaques", url: "index.html#destaques" },
      { texto: "Funcionalidades", url: "index.html#funcionalidades" },
      { texto: "Autor", url: "index.html#autor" },
    ],
    autor: {
      nome: "Daniel Heber de Souza Godinho",
      matricula: "909411",
      projeto: "GymStreak",
      disciplina: "Desenvolvimento de Interfaces Web",
      descricao:
        "Projeto acadêmico sobre uma plataforma de academia para organizar treinos, acompanhar cargas e comparar a evolução de forma clara e motivadora.",
    },
  },
  funcionalidades: [
    {
      id: 1,
      nome: "Montar Treino",
      categoria: "Planejamento",
      objetivo: "Criar uma rotina de treino compatível com os dias disponíveis do usuário.",
      descricao:
        "Organize seu treino ideal com uma divisão clara por grupos musculares, tempo médio de sessão e foco no objetivo principal.",
      destaque: "Sua sequência atual começando por um plano bem montado.",
      imagem: "assets/img/main-img.png",
      imagemAlt: "Aluno em uma academia representando o aplicativo GymStreak",
      visual: "workout",
      indicadores: ["3 a 6 dias", "45 a 70 min", "Divisão automática"],
      detalhes: [
        { rotulo: "Nome", valor: "Montar Treino" },
        { rotulo: "Objetivo", valor: "Organizar a rotina semanal de musculação." },
        { rotulo: "Dias disponíveis", valor: "De 3 a 6 dias por semana." },
        { rotulo: "Objetivo principal", valor: "Hipertrofia, força ou condicionamento." },
        { rotulo: "Método de divisão", valor: "Treino A/B, ABC ou ABCD conforme disponibilidade." },
        { rotulo: "Tempo médio por treino", valor: "Entre 45 e 70 minutos." },
        { rotulo: "Benefício principal", valor: "Evita treinos improvisados e melhora a consistência." },
      ],
      fotos: [
        {
          titulo: "Treino A",
          descricao: "Sessão com foco em peito, ombros e tríceps.",
          visual: "workout",
        },
        {
          titulo: "Treino B",
          descricao: "Sessão com foco em costas, bíceps e estabilidade.",
          visual: "workout",
        },
        {
          titulo: "Treino C",
          descricao: "Sessão com foco em pernas, glúteos e core.",
          visual: "workout",
        },
      ],
    },
    {
      id: 2,
      nome: "Volume Ideal",
      categoria: "Controle de Volume",
      objetivo: "Indicar uma quantidade equilibrada de séries semanais por grupo muscular.",
      descricao:
        "Receba uma sugestão de volume semanal para evoluir sem exagerar na carga de treino ou comprometer a recuperação.",
      destaque: "Mais estímulo, menos excesso.",
      visual: "chart",
      indicadores: ["Séries semanais", "Recuperação", "Progressão"],
      detalhes: [
        { rotulo: "Nome", valor: "Volume Ideal" },
        { rotulo: "Objetivo", valor: "Ajustar o número de séries por músculo." },
        { rotulo: "Público-alvo", valor: "Praticantes iniciantes e intermediários." },
        { rotulo: "Volume recomendado", valor: "Entre 10 e 20 séries semanais por grupo muscular." },
        { rotulo: "Base utilizada", valor: "Objetivo, frequência semanal e nível de experiência." },
        { rotulo: "Benefícios", valor: "Reduz excesso de treino e melhora a recuperação." },
        { rotulo: "Frequência sugerida", valor: "2 estímulos semanais por grupo muscular." },
      ],
      fotos: [
        {
          titulo: "Gráfico de séries semanais",
          descricao: "Visualização do volume planejado por grupo muscular.",
          visual: "chart",
        },
        {
          titulo: "Exemplo de divisão ABC",
          descricao: "Distribuição equilibrada das séries ao longo da semana.",
          visual: "workout",
        },
        {
          titulo: "Baixo volume x alto volume",
          descricao: "Comparação entre estímulo insuficiente e excesso de séries.",
          visual: "compare",
        },
      ],
    },
    {
      id: 3,
      nome: "Anotar Carga",
      categoria: "Registro",
      objetivo: "Registrar as cargas usadas em cada exercício para acompanhar progressão.",
      descricao:
        "Salve cargas, repetições e observações do treino para identificar quando é possível progredir com segurança.",
      destaque: "Seu diário de treino sempre atualizado.",
      visual: "log",
      indicadores: ["Carga", "Repetições", "Histórico"],
      detalhes: [
        { rotulo: "Nome", valor: "Anotar Carga" },
        { rotulo: "Objetivo", valor: "Registrar cargas, repetições e observações." },
        { rotulo: "Tipo de registro", valor: "Por exercício, série e data do treino." },
        { rotulo: "Armazenamento", valor: "Histórico centralizado no perfil do usuário." },
        { rotulo: "Benefício principal", valor: "Facilita a progressão de carga sem depender da memória." },
        { rotulo: "Indicador de progresso", valor: "Comparação entre carga anterior e carga atual." },
        { rotulo: "Última atualização", valor: "Atualizado ao final de cada treino registrado." },
      ],
      fotos: [
        {
          titulo: "Registro de Supino",
          descricao: "Controle de séries, carga e repetições do supino.",
          visual: "log",
        },
        {
          titulo: "Registro de Agachamento",
          descricao: "Anotação da carga usada no treino de pernas.",
          visual: "log",
        },
        {
          titulo: "Histórico semanal",
          descricao: "Resumo das cargas registradas durante a semana.",
          visual: "history",
        },
      ],
    },
    {
      id: 4,
      nome: "Comparar Evolução",
      categoria: "Analise",
      objetivo: "Comparar métricas do usuário em diferentes períodos de treino.",
      descricao:
        "Veja se as cargas, repetições e frequência estão subindo ao longo do tempo por meio de indicadores simples.",
      destaque: "Evolução visível, treino após treino.",
      visual: "progress",
      indicadores: ["Cargas", "Repetições", "Período"],
      detalhes: [
        { rotulo: "Nome", valor: "Comparar Evolução" },
        { rotulo: "Objetivo", valor: "Avaliar a progressão individual no tempo." },
        { rotulo: "Métrica principal", valor: "Carga máxima registrada por exercício." },
        { rotulo: "Métrica secundária", valor: "Repetições, frequência e volume total." },
        { rotulo: "Período analisado", valor: "Semanal, mensal ou personalizado." },
        { rotulo: "Indicadores exibidos", valor: "Tendência, melhor marca e variação percentual." },
        { rotulo: "Benefício", valor: "Ajuda a ajustar o treino com base em dados reais." },
        { rotulo: "Comparação", valor: "Carga atual comparada com registros anteriores." },
      ],
      fotos: [
        {
          titulo: "Evolução do Supino",
          descricao: "Linha de progresso com as melhores cargas registradas.",
          visual: "progress",
        },
        {
          titulo: "Comparação de cargas",
          descricao: "Relação entre marcas antigas e atuais.",
          visual: "compare",
        },
        {
          titulo: "Histórico mensal",
          descricao: "Resumo da evolução durante o mês.",
          visual: "history",
        },
      ],
    },
    {
      id: 5,
      nome: "Comparar Evolução com Amigos",
      categoria: "Social",
      objetivo: "Criar comparações saudáveis entre amigos que treinam juntos.",
      descricao:
        "Acompanhe rankings, estatísticas compartilhadas e evolução coletiva para manter a motivação em grupo.",
      destaque: "Constância também pode ser coletiva.",
      visual: "social",
      indicadores: ["Ranking", "Semana", "Grupo"],
      detalhes: [
        { rotulo: "Nome", valor: "Comparar Evolução com Amigos" },
        { rotulo: "Objetivo", valor: "Comparar desempenho de forma motivadora." },
        { rotulo: "Ranking", valor: "Classificação por frequência, carga ou evolução percentual." },
        { rotulo: "Comparação semanal", valor: "Resumo dos treinos concluídos na semana." },
        { rotulo: "Comparação mensal", valor: "Evolução acumulada entre amigos no mês." },
        { rotulo: "Estatísticas compartilhadas", valor: "Frequência, volume e melhores marcas." },
        { rotulo: "Benefícios", valor: "Aumenta engajamento, disciplina e senso de comunidade." },
      ],
      fotos: [
        {
          titulo: "Ranking",
          descricao: "Classificação dos amigos com melhor evolução.",
          visual: "social",
        },
        {
          titulo: "Evolução coletiva",
          descricao: "Indicadores do grupo ao longo do tempo.",
          visual: "progress",
        },
        {
          titulo: "Estatísticas comparativas",
          descricao: "Comparação entre frequência, volume e cargas.",
          visual: "compare",
        },
      ],
    },
    {
      id: 6,
      nome: "Histórico de Treinos",
      categoria: "Histórico",
      objetivo: "Guardar todos os treinos realizados para consulta e análise.",
      descricao:
        "Consulte dias treinados, exercícios feitos, frequência semanal e resumos para manter a rotina sob controle.",
      destaque: "Tudo que você treinou em um só lugar.",
      visual: "history",
      indicadores: ["Calendário", "Registros", "Resumo"],
      detalhes: [
        { rotulo: "Nome", valor: "Histórico de Treinos" },
        { rotulo: "Objetivo", valor: "Registrar e consultar treinos finalizados." },
        { rotulo: "Quantidade de registros", valor: "Lista acumulada de treinos cadastrados." },
        { rotulo: "Frequência semanal", valor: "Quantidade de treinos realizados na semana." },
        { rotulo: "Último treino", valor: "Data, exercícios e cargas da sessão mais recente." },
        { rotulo: "Estatísticas", valor: "Média semanal, volume total e dias ativos." },
        { rotulo: "Benefícios", valor: "Mostra consistência e facilita revisão da rotina." },
      ],
      fotos: [
        {
          titulo: "Histórico mensal",
          descricao: "Linha do tempo com todos os treinos do mês.",
          visual: "history",
        },
        {
          titulo: "Calendário de treinos",
          descricao: "Marcação visual dos dias com treino registrado.",
          visual: "calendar",
        },
        {
          titulo: "Resumo de atividades",
          descricao: "Totais de frequência, volume e exercícios feitos.",
          visual: "chart",
        },
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();

  const page = document.body.dataset.page;
  if (page === "details") {
    renderDetailsPage();
  } else {
    renderHomePage();
  }

  initMobileNavbar();
  initCarouselFallback();
});

function renderHeader() {
  const headerRoot = document.querySelector("#app-header");
  const menuItems = gymStreakData.sistema.menu
    .map((item) => `<li><a href="${item.url}">${item.texto}</a></li>`)
    .join("");

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="header-container">
        <nav class="main-nav" aria-label="Navegação principal">
          <a class="brand" href="index.html#destaques" aria-label="GymStreak, ir para a página inicial">
            <span class="brand-text">
              <strong>${gymStreakData.sistema.nome}</strong>
            </span>
          </a>

          <button class="mobile-menu" type="button" aria-label="Abrir menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav-list">${menuItems}</ul>
        </nav>

        <ul class="header-actions" aria-label="Ações do projeto">
          <li><a class="action-link" href="detalhes.html?id=4">Ver evolução</a></li>
          <li><a class="action-button" href="detalhes.html?id=5">Adicionar amigos</a></li>
        </ul>
      </div>
    </header>
  `;
}

function renderHomePage() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section id="destaques" class="section-block section-first" aria-labelledby="titulo-destaques">
      <div class="section-heading">
        <p class="eyebrow">Itens em Destaque</p>
        <h1 id="titulo-destaques">${gymStreakData.sistema.chamada}</h1>
        <p>${gymStreakData.sistema.descricao}</p>
      </div>
      ${renderCarousel()}
    </section>

    <section id="funcionalidades" class="section-block" aria-labelledby="titulo-funcionalidades">
      <div class="section-heading">
        <p class="eyebrow">Funcionalidades</p>
        <h2 id="titulo-funcionalidades">Todas as Funcionalidades</h2>
      </div>
      <div class="row g-4">
        ${gymStreakData.funcionalidades.map(renderFeatureCard).join("")}
      </div>
    </section>

    <section id="autor" class="section-block author-section" aria-labelledby="titulo-autor">
      ${renderAuthor()}
    </section>
  `;
}

function renderCarousel() {
  const indicators = gymStreakData.funcionalidades
    .map(
      (feature, index) => `
        <button
          type="button"
          data-bs-target="#gymStreakCarousel"
          data-bs-slide-to="${index}"
          class="${index === 0 ? "active" : ""}"
          ${index === 0 ? 'aria-current="true"' : ""}
          aria-label="Slide ${index + 1}: ${feature.nome}">
        </button>
      `,
    )
    .join("");

  const slides = gymStreakData.funcionalidades
    .map((feature, index) => {
      const image = getFeatureImage(feature);
      return `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="carousel-panel">
            <div class="carousel-caption gym-caption">
              <p class="eyebrow">${feature.categoria}</p>
              <h2>${feature.nome}</h2>
              <p>${feature.descricao}</p>
              <div class="metric-row" aria-label="Indicadores de ${feature.nome}">
                ${feature.indicadores.map((indicator) => `<span>${indicator}</span>`).join("")}
              </div>
              <a class="primary-button" href="detalhes.html?id=${feature.id}">Ver detalhes</a>
            </div>
            <div class="carousel-media">
              <img src="${image}" alt="${feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`}">
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div id="gymStreakCarousel" class="carousel slide gym-carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">${indicators}</div>
      <div class="carousel-inner">${slides}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#gymStreakCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#gymStreakCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  `;
}

function renderFeatureCard(feature) {
  return `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="card feature-card h-100">
        <img src="${getFeatureImage(feature)}" class="card-img-top" alt="${feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`}">
        <div class="card-body">
          <p class="card-kicker">${feature.categoria}</p>
          <h3 class="card-title">${feature.nome}</h3>
          <p class="card-text">${feature.descricao}</p>
          <div class="metric-row compact" aria-label="Indicadores de ${feature.nome}">
            ${feature.indicadores.map((indicator) => `<span>${indicator}</span>`).join("")}
          </div>
        </div>
        <div class="card-footer">
          <a class="detail-link" href="detalhes.html?id=${feature.id}">Abrir detalhes</a>
        </div>
      </article>
    </div>
  `;
}

function renderAuthor() {
  const author = gymStreakData.sistema.autor;

  return `
    <div class="author-layout">
      <div>
        <p class="eyebrow">Sobre o autor</p>
        <h2 id="titulo-autor">${author.nome}</h2>
        <p>${author.descricao}</p>
      </div>
      <dl class="author-facts" aria-label="Informações do aluno">
        <div>
          <dt>Matricula</dt>
          <dd>${author.matricula}</dd>
        </div>
        <div>
          <dt>Projeto</dt>
          <dd>${author.projeto}</dd>
        </div>
        <div>
          <dt>Disciplina</dt>
          <dd>${author.disciplina}</dd>
        </div>
      </dl>
    </div>
  `;
}

function renderDetailsPage() {
  const app = document.querySelector("#app");
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const feature = gymStreakData.funcionalidades.find((item) => item.id === id);

  if (!feature) {
    app.innerHTML = renderNotFound();
    document.title = "Funcionalidade não encontrada - GymStreak";
    return;
  }

  document.title = `${feature.nome} - GymStreak`;
  app.innerHTML = `
    <section class="details-hero section-first" aria-labelledby="titulo-detalhe">
      <div class="details-copy">
        <a class="back-link" href="index.html#funcionalidades">Voltar para funcionalidades</a>
        <p class="eyebrow">${feature.categoria}</p>
        <h1 id="titulo-detalhe">${feature.nome}</h1>
        <p>${feature.descricao}</p>
        <div class="metric-row" aria-label="Indicadores de ${feature.nome}">
          ${feature.indicadores.map((indicator) => `<span>${indicator}</span>`).join("")}
        </div>
      </div>
      <div class="details-media">
        <img src="${getFeatureImage(feature)}" alt="${feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`}">
      </div>
    </section>

    <section class="section-block" aria-labelledby="titulo-informacoes">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Informações Gerais</p>
        <h2 id="titulo-informacoes">Dados da funcionalidade</h2>
      </div>
      <dl class="info-list">
        ${feature.detalhes
          .map(
            (detail) => `
              <div>
                <dt>${detail.rotulo}</dt>
                <dd>${detail.valor}</dd>
              </div>
            `,
          )
          .join("")}
      </dl>
    </section>

    <section class="section-block" aria-labelledby="titulo-galeria">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Fotos vinculadas</p>
        <h2 id="titulo-galeria">Galeria da funcionalidade</h2>
      </div>
      <div class="gallery-grid">
        ${feature.fotos.map((photo) => renderPhoto(feature, photo)).join("")}
      </div>
    </section>
  `;
}

function renderPhoto(feature, photo) {
  return `
    <article class="photo-card">
      <img src="${createGeneratedImage({
        title: photo.titulo,
        subtitle: feature.nome,
        caption: photo.descricao,
        type: photo.visual || feature.visual,
      })}" alt="${photo.titulo}">
      <div class="photo-body">
        <h3>${photo.titulo}</h3>
        <p>${photo.descricao}</p>
      </div>
    </article>
  `;
}

function renderNotFound() {
  return `
    <section class="section-block section-first empty-state">
      <p class="eyebrow">GymStreak</p>
      <h1>Funcionalidade não encontrada</h1>
      <p>O link informado não corresponde a nenhum item cadastrado no JSON do projeto.</p>
      <a class="primary-button" href="index.html#funcionalidades">Ver funcionalidades</a>
    </section>
  `;
}

function initMobileNavbar() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const headerActions = document.querySelector(".header-actions");
  const links = document.querySelectorAll(".nav-list a, .header-actions a");

  if (!mobileMenu || !navList) {
    return;
  }

  mobileMenu.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("active");
    headerActions.classList.toggle("active", isOpen);
    mobileMenu.classList.toggle("active", isOpen);
    mobileMenu.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      headerActions.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenu.setAttribute("aria-expanded", "false");
    });
  });
}

function initCarouselFallback() {
  if (window.bootstrap) {
    return;
  }

  document.querySelectorAll(".gym-carousel").forEach((carousel) => {
    const items = [...carousel.querySelectorAll(".carousel-item")];
    const indicators = [...carousel.querySelectorAll(".carousel-indicators button")];
    const previousButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");
    let activeIndex = Math.max(
      0,
      items.findIndex((item) => item.classList.contains("active")),
    );

    const showSlide = (nextIndex) => {
      activeIndex = (nextIndex + items.length) % items.length;

      items.forEach((item, index) => {
        item.classList.toggle("active", index === activeIndex);
      });

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === activeIndex);
        indicator.toggleAttribute("aria-current", index === activeIndex);
      });
    };

    previousButton?.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(activeIndex - 1);
    });

    nextButton?.addEventListener("click", (event) => {
      event.preventDefault();
      showSlide(activeIndex + 1);
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => showSlide(index));
    });
  });
}

function getFeatureImage(feature) {
  if (feature.imagem) {
    return feature.imagem;
  }

  return createGeneratedImage({
    title: feature.nome,
    subtitle: feature.categoria,
    caption: feature.destaque,
    type: feature.visual,
  });
}

function createGeneratedImage({ title, subtitle, caption, type }) {
  const body = renderVisualBody(type);
  const titleLines = splitSvgText(title, 14);
  const captionLines = splitSvgText(caption, 28);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img" aria-label="${escapeXml(title)}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#08080d"/>
          <stop offset="0.55" stop-color="#25122b"/>
          <stop offset="1" stop-color="#0b0b12"/>
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#7b3a7d"/>
          <stop offset="1" stop-color="#2a1930"/>
        </linearGradient>
      </defs>
      <rect width="960" height="640" rx="34" fill="url(#bg)"/>
      <rect x="54" y="54" width="852" height="532" rx="28" fill="#11131d" stroke="#7b3a7d" stroke-opacity="0.65"/>
      <rect x="84" y="94" width="330" height="452" rx="24" fill="url(#panel)"/>
      <text x="116" y="150" fill="#ffdc5c" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">${escapeXml(subtitle)}</text>
      ${titleLines
        .map(
          (line, index) =>
            `<text x="116" y="${214 + index * 42}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">${escapeXml(line)}</text>`,
        )
        .join("")}
      ${captionLines
        .map(
          (line, index) =>
            `<text x="116" y="${398 + index * 30}" fill="#f2e8f4" font-family="Arial, Helvetica, sans-serif" font-size="22">${escapeXml(line)}</text>`,
        )
        .join("")}
      <rect x="116" y="468" width="210" height="16" rx="8" fill="#ffdc5c"/>
      <rect x="116" y="500" width="150" height="16" rx="8" fill="#ffffff" fill-opacity="0.62"/>
      ${body}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderVisualBody(type) {
  const panels = {
    workout: `
      <rect x="470" y="126" width="120" height="310" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
      <rect x="612" y="178" width="120" height="258" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
      <rect x="754" y="230" width="88" height="206" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
      <text x="506" y="194" fill="#ffdc5c" font-family="Arial" font-size="42" font-weight="800">A</text>
      <text x="648" y="246" fill="#c986ff" font-family="Arial" font-size="42" font-weight="800">B</text>
      <text x="782" y="298" fill="#69e39a" font-family="Arial" font-size="42" font-weight="800">C</text>
      <rect x="496" y="266" width="68" height="16" rx="8" fill="#ffffff" fill-opacity="0.7"/>
      <rect x="638" y="318" width="68" height="16" rx="8" fill="#ffffff" fill-opacity="0.7"/>
      <rect x="770" y="370" width="52" height="16" rx="8" fill="#ffffff" fill-opacity="0.7"/>
    `,
    chart: `
      <line x1="488" y1="450" x2="840" y2="450" stroke="#ffffff" stroke-opacity="0.18" stroke-width="4"/>
      <rect x="508" y="330" width="44" height="120" rx="10" fill="#c986ff"/>
      <rect x="584" y="270" width="44" height="180" rx="10" fill="#ffdc5c"/>
      <rect x="660" y="220" width="44" height="230" rx="10" fill="#69e39a"/>
      <rect x="736" y="292" width="44" height="158" rx="10" fill="#f06b9a"/>
      <path d="M508 260 C590 190 642 330 704 250 S804 176 838 214" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    `,
    log: `
      <rect x="488" y="144" width="342" height="330" rx="22" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="520" y="188" width="278" height="28" rx="14" fill="#ffdc5c"/>
      <rect x="520" y="248" width="220" height="24" rx="12" fill="#ffffff" fill-opacity="0.7"/>
      <rect x="520" y="306" width="258" height="24" rx="12" fill="#ffffff" fill-opacity="0.48"/>
      <rect x="520" y="364" width="190" height="24" rx="12" fill="#ffffff" fill-opacity="0.7"/>
      <circle cx="780" cy="260" r="18" fill="#69e39a"/>
      <circle cx="780" cy="376" r="18" fill="#c986ff"/>
    `,
    progress: `
      <polyline points="496,414 574,352 640,376 704,282 780,224 842,178" fill="none" stroke="#69e39a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="496,450 574,426 640,398 704,350 780,312 842,280" fill="none" stroke="#c986ff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="842" cy="178" r="18" fill="#ffdc5c"/>
      <rect x="500" y="492" width="310" height="18" rx="9" fill="#ffffff" fill-opacity="0.2"/>
      <rect x="500" y="492" width="226" height="18" rx="9" fill="#ffdc5c"/>
    `,
    social: `
      <rect x="520" y="310" width="74" height="150" rx="16" fill="#c986ff"/>
      <rect x="620" y="238" width="74" height="222" rx="16" fill="#ffdc5c"/>
      <rect x="720" y="356" width="74" height="104" rx="16" fill="#69e39a"/>
      <circle cx="557" cy="246" r="38" fill="#ffffff" fill-opacity="0.9"/>
      <circle cx="657" cy="174" r="42" fill="#ffffff" fill-opacity="0.9"/>
      <circle cx="757" cy="292" r="34" fill="#ffffff" fill-opacity="0.9"/>
      <text x="646" y="190" fill="#25122b" font-family="Arial" font-size="34" font-weight="800">1</text>
    `,
    history: `
      <rect x="486" y="144" width="348" height="330" rx="24" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="486" y="144" width="348" height="74" rx="24" fill="#7b3a7d"/>
      <g fill="#ffffff" fill-opacity="0.82">
        <rect x="526" y="256" width="42" height="42" rx="10"/>
        <rect x="586" y="256" width="42" height="42" rx="10"/>
        <rect x="646" y="256" width="42" height="42" rx="10"/>
        <rect x="706" y="256" width="42" height="42" rx="10"/>
        <rect x="766" y="256" width="42" height="42" rx="10"/>
        <rect x="526" y="326" width="42" height="42" rx="10"/>
        <rect x="586" y="326" width="42" height="42" rx="10"/>
        <rect x="646" y="326" width="42" height="42" rx="10"/>
        <rect x="706" y="326" width="42" height="42" rx="10"/>
      </g>
      <rect x="766" y="326" width="42" height="42" rx="10" fill="#ffdc5c"/>
    `,
    calendar: `
      <rect x="486" y="144" width="348" height="330" rx="24" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <g fill="#ffffff" fill-opacity="0.2">
        <rect x="528" y="206" width="52" height="52" rx="12"/>
        <rect x="600" y="206" width="52" height="52" rx="12"/>
        <rect x="672" y="206" width="52" height="52" rx="12"/>
        <rect x="744" y="206" width="52" height="52" rx="12"/>
        <rect x="528" y="280" width="52" height="52" rx="12"/>
        <rect x="600" y="280" width="52" height="52" rx="12"/>
        <rect x="672" y="280" width="52" height="52" rx="12"/>
        <rect x="744" y="280" width="52" height="52" rx="12"/>
      </g>
      <rect x="600" y="206" width="52" height="52" rx="12" fill="#69e39a"/>
      <rect x="672" y="280" width="52" height="52" rx="12" fill="#ffdc5c"/>
      <rect x="744" y="280" width="52" height="52" rx="12" fill="#c986ff"/>
    `,
    compare: `
      <rect x="500" y="184" width="136" height="260" rx="22" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="690" y="184" width="136" height="260" rx="22" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="532" y="330" width="72" height="78" rx="12" fill="#c986ff"/>
      <rect x="722" y="254" width="72" height="154" rx="12" fill="#69e39a"/>
      <text x="538" y="256" fill="#ffffff" font-family="Arial" font-size="42" font-weight="800">-</text>
      <text x="724" y="256" fill="#ffdc5c" font-family="Arial" font-size="42" font-weight="800">+</text>
      <path d="M642 314 H680" stroke="#ffdc5c" stroke-width="10" stroke-linecap="round"/>
    `,
  };

  return panels[type] || panels.chart;
}

function splitSvgText(text, maxLength) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 3);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
