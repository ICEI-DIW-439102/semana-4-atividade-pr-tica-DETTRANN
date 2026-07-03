const API_URL = "http://localhost:3000";
const SESSION_KEY = "gymstreak-user";
const FLASH_KEY = "gymstreak-flash";

const fallbackData = {
  sistema: {
    nome: "GymStreak",
    chamada: "Organize seu treino ideal",
    descricao:
      "Monte rotinas, ajuste o volume, registre cargas e acompanhe sua evolucao em uma experiencia pensada para constancia na academia.",
    menu: [
      { texto: "Destaques", url: "index.html#destaques" },
      { texto: "Funcionalidades", url: "index.html#funcionalidades" },
      { texto: "Evolucao", url: "index.html#evolucao" },
      { texto: "Autor", url: "index.html#autor" },
    ],
    autor: {
      nome: "Daniel Heber de Souza Godinho",
      matricula: "909411",
      projeto: "GymStreak",
      disciplina: "Desenvolvimento de Interfaces Web",
      descricao:
        "Projeto academico sobre uma plataforma de academia para organizar treinos, acompanhar cargas e comparar a evolucao de forma clara e motivadora.",
    },
  },
  funcionalidades: [
    {
      id: 1,
      nome: "Montar Treino",
      categoria: "Planejamento",
      objetivo: "Criar uma rotina de treino compativel com os dias disponiveis do usuario.",
      descricao:
        "Organize seu treino ideal com uma divisao clara por grupos musculares, tempo medio de sessao e foco no objetivo principal.",
      destaque: "Sua sequencia atual comecando por um plano bem montado.",
      imagem: "assets/img/main-img.png",
      imagemAlt: "Aluno em uma academia representando o aplicativo GymStreak",
      visual: "workout",
      indicadores: ["3 a 6 dias", "45 a 70 min", "Divisao automatica"],
      detalhes: [
        { rotulo: "Nome", valor: "Montar Treino" },
        { rotulo: "Objetivo", valor: "Organizar a rotina semanal de musculacao." },
        { rotulo: "Dias disponiveis", valor: "De 3 a 6 dias por semana." },
        { rotulo: "Metodo de divisao", valor: "Treino A/B, ABC ou ABCD conforme disponibilidade." },
      ],
      fotos: [
        { titulo: "Treino A", descricao: "Sessao com foco em peito, ombros e triceps.", visual: "workout" },
        { titulo: "Treino B", descricao: "Sessao com foco em costas, biceps e estabilidade.", visual: "workout" },
        { titulo: "Treino C", descricao: "Sessao com foco em pernas, gluteos e core.", visual: "workout" },
      ],
    },
    {
      id: 2,
      nome: "Volume Ideal",
      categoria: "Controle de Volume",
      objetivo: "Indicar uma quantidade equilibrada de series semanais por grupo muscular.",
      descricao:
        "Receba uma sugestao de volume semanal para evoluir sem exagerar na carga de treino ou comprometer a recuperacao.",
      destaque: "Mais estimulo, menos excesso.",
      visual: "chart",
      indicadores: ["Series semanais", "Recuperacao", "Progressao"],
      detalhes: [
        { rotulo: "Nome", valor: "Volume Ideal" },
        { rotulo: "Objetivo", valor: "Ajustar o numero de series por musculo." },
        { rotulo: "Volume recomendado", valor: "Entre 10 e 20 series semanais por grupo muscular." },
      ],
      fotos: [
        { titulo: "Grafico de series semanais", descricao: "Visualizacao do volume planejado.", visual: "chart" },
        { titulo: "Divisao ABC", descricao: "Distribuicao equilibrada ao longo da semana.", visual: "workout" },
      ],
    },
    {
      id: 3,
      nome: "Anotar Carga",
      categoria: "Registro",
      objetivo: "Registrar as cargas usadas em cada exercicio para acompanhar progressao.",
      descricao:
        "Salve cargas, repeticoes e observacoes do treino para identificar quando e possivel progredir com seguranca.",
      destaque: "Seu diario de treino sempre atualizado.",
      visual: "log",
      indicadores: ["Carga", "Repeticoes", "Historico"],
      detalhes: [
        { rotulo: "Nome", valor: "Anotar Carga" },
        { rotulo: "Objetivo", valor: "Registrar cargas, repeticoes e observacoes." },
        { rotulo: "Tipo de registro", valor: "Por exercicio, serie e data do treino." },
      ],
      fotos: [
        { titulo: "Registro de Supino", descricao: "Controle de series, carga e repeticoes.", visual: "log" },
        { titulo: "Historico semanal", descricao: "Resumo das cargas registradas.", visual: "history" },
      ],
    },
    {
      id: 4,
      nome: "Comparar Evolucao",
      categoria: "Analise",
      objetivo: "Comparar metricas do usuario em diferentes periodos de treino.",
      descricao:
        "Veja se as cargas, repeticoes e frequencia estao subindo ao longo do tempo por meio de indicadores simples.",
      destaque: "Evolucao visivel, treino apos treino.",
      visual: "progress",
      indicadores: ["Cargas", "Repeticoes", "Periodo"],
      detalhes: [
        { rotulo: "Nome", valor: "Comparar Evolucao" },
        { rotulo: "Metrica principal", valor: "Carga maxima registrada por exercicio." },
        { rotulo: "Periodo analisado", valor: "Semanal, mensal ou personalizado." },
      ],
      fotos: [
        { titulo: "Evolucao do Supino", descricao: "Linha de progresso com melhores cargas.", visual: "progress" },
        { titulo: "Comparacao de cargas", descricao: "Relacao entre marcas antigas e atuais.", visual: "compare" },
      ],
    },
    {
      id: 5,
      nome: "Comparar Evolucao com Amigos",
      categoria: "Social",
      objetivo: "Criar comparacoes saudaveis entre amigos que treinam juntos.",
      descricao:
        "Acompanhe rankings, estatisticas compartilhadas e evolucao coletiva para manter a motivacao em grupo.",
      destaque: "Constancia tambem pode ser coletiva.",
      visual: "social",
      indicadores: ["Ranking", "Semana", "Grupo"],
      detalhes: [
        { rotulo: "Nome", valor: "Comparar Evolucao com Amigos" },
        { rotulo: "Ranking", valor: "Classificacao por frequencia, carga ou evolucao percentual." },
        { rotulo: "Beneficios", valor: "Aumenta engajamento, disciplina e senso de comunidade." },
      ],
      fotos: [
        { titulo: "Ranking", descricao: "Classificacao dos amigos com melhor evolucao.", visual: "social" },
        { titulo: "Evolucao coletiva", descricao: "Indicadores do grupo ao longo do tempo.", visual: "progress" },
      ],
    },
    {
      id: 6,
      nome: "Historico de Treinos",
      categoria: "Historico",
      objetivo: "Guardar todos os treinos realizados para consulta e analise.",
      descricao:
        "Consulte dias treinados, exercicios feitos, frequencia semanal e resumos para manter a rotina sob controle.",
      destaque: "Tudo que voce treinou em um so lugar.",
      visual: "history",
      indicadores: ["Calendario", "Registros", "Resumo"],
      detalhes: [
        { rotulo: "Nome", valor: "Historico de Treinos" },
        { rotulo: "Quantidade de registros", valor: "Lista acumulada de treinos cadastrados." },
        { rotulo: "Frequencia semanal", valor: "Quantidade de treinos realizados na semana." },
      ],
      fotos: [
        { titulo: "Historico mensal", descricao: "Linha do tempo com todos os treinos do mes.", visual: "history" },
        { titulo: "Calendario de treinos", descricao: "Marcacao visual dos dias com treino.", visual: "calendar" },
      ],
    },
  ],
  evolucao: [
    { id: 1, grupo: "Peito", series: 16, carga: 82, treinos: 4, cor: "#ffdc5c" },
    { id: 2, grupo: "Costas", series: 14, carga: 76, treinos: 4, cor: "#c986ff" },
    { id: 3, grupo: "Pernas", series: 18, carga: 110, treinos: 3, cor: "#69e39a" },
    { id: 4, grupo: "Ombros", series: 10, carga: 38, treinos: 3, cor: "#f06b9a" },
  ],
};

const state = {
  sistema: fallbackData.sistema,
  funcionalidades: fallbackData.funcionalidades,
  evolucao: fallbackData.evolucao,
  favoritos: [],
  searchTerm: "",
  editingFeatureId: null,
  apiOnline: false,
};

document.addEventListener("DOMContentLoaded", initializeApp);
document.addEventListener("click", handleDocumentClick);
document.addEventListener("submit", handleDocumentSubmit);
document.addEventListener("input", handleDocumentInput);

async function initializeApp() {
  await loadApplicationData();
  await loadFavoritesForCurrentUser();
  renderHeader();
  renderCurrentPage();
  initMobileNavbar();
  initCarouselFallback();
}

async function loadApplicationData() {
  try {
    const [sistema, funcionalidades, evolucao] = await Promise.all([
      apiFetch("/sistema"),
      apiFetch("/funcionalidades?_sort=id&_order=asc"),
      apiFetch("/evolucao"),
    ]);

    state.sistema = sistema?.nome ? sistema : fallbackData.sistema;
    state.funcionalidades = Array.isArray(funcionalidades) ? funcionalidades : fallbackData.funcionalidades;
    state.evolucao = Array.isArray(evolucao) ? evolucao : fallbackData.evolucao;
    state.apiOnline = true;
  } catch (error) {
    state.sistema = fallbackData.sistema;
    state.funcionalidades = fallbackData.funcionalidades;
    state.evolucao = fallbackData.evolucao;
    state.apiOnline = false;
  }
}

async function loadFavoritesForCurrentUser() {
  const user = getCurrentUser();

  if (!user || !state.apiOnline) {
    state.favoritos = [];
    return;
  }

  try {
    state.favoritos = await apiFetch(`/favoritos?usuarioId=${encodeURIComponent(user.id)}`);
  } catch (error) {
    state.favoritos = [];
  }
}

async function apiFetch(path, options = {}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  if (config.body && typeof config.body !== "string") {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(`${API_URL}${path}`, config);

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

function renderCurrentPage() {
  const page = document.body.dataset.page;

  if (page === "details") {
    renderDetailsPage();
    return;
  }

  if (page === "login") {
    renderLoginPage();
    return;
  }

  if (page === "favorites") {
    renderFavoritesPage();
    return;
  }

  if (page === "admin") {
    renderAdminPage();
    return;
  }

  renderHomePage();
}

function renderHeader() {
  const headerRoot = document.querySelector("#app-header");
  const user = getCurrentUser();
  const adminItem = user?.perfil === "admin"
    ? '<li><a class="action-link" href="cadastro_itens.html">Cadastro</a></li>'
    : "";
  const authItems = user
    ? `
        ${adminItem}
        <li><a class="action-link" href="favoritos.html">Favoritos</a></li>
        <li><button class="action-link button-link" type="button" data-action="logout">Logout</button></li>
        <li><span class="user-pill">${escapeHtml(firstName(user.nome))}</span></li>
      `
    : `
        <li><a class="action-link" href="login.html">Login</a></li>
        <li><a class="action-button" href="login.html#cadastro">Cadastrar</a></li>
      `;
  const menuItems = state.sistema.menu
    .map((item) => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.texto)}</a></li>`)
    .join("");

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="header-container">
        <nav class="main-nav" aria-label="Navegacao principal">
          <a class="brand" href="index.html#destaques" aria-label="GymStreak, ir para a pagina inicial">
            <span class="brand-text">
              <strong>${escapeHtml(state.sistema.nome)}</strong>
            </span>
          </a>

          <button class="mobile-menu" type="button" aria-label="Abrir menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav-list">${menuItems}</ul>
        </nav>

        <ul class="header-actions" aria-label="Acoes do projeto">
          ${authItems}
        </ul>
      </div>
    </header>
  `;
}

function renderHomePage() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    ${renderApiNotice()}
    <section id="destaques" class="section-block section-first" aria-labelledby="titulo-destaques">
      <div class="section-heading">
        <p class="eyebrow">Itens em Destaque</p>
        <h1 id="titulo-destaques">${escapeHtml(state.sistema.chamada)}</h1>
        <p>${escapeHtml(state.sistema.descricao)}</p>
      </div>
      ${renderCarousel()}
    </section>

    <section id="funcionalidades" class="section-block" aria-labelledby="titulo-funcionalidades">
      <div class="section-heading search-heading">
        <div>
          <p class="eyebrow">Funcionalidades</p>
          <h2 id="titulo-funcionalidades">Todas as Funcionalidades</h2>
        </div>
        <form id="search-form" class="search-form" role="search">
          <label class="visually-hidden" for="feature-search">Pesquisar funcionalidade</label>
          <input id="feature-search" name="pesquisa" type="search" value="${escapeHtml(state.searchTerm)}" placeholder="Pesquisar treino, carga, evolucao...">
          <button class="icon-button" type="submit" aria-label="Pesquisar">Buscar</button>
        </form>
      </div>
      <div id="feature-results-shell">
        ${renderFeatureList(getFilteredFeatures())}
      </div>
    </section>

    <section id="evolucao" class="section-block" aria-labelledby="titulo-evolucao">
      ${renderEvolutionPanel()}
    </section>

    <section id="autor" class="section-block author-section" aria-labelledby="titulo-autor">
      ${renderAuthor()}
    </section>
  `;
}

function renderCarousel() {
  const features = state.funcionalidades;

  if (!features.length) {
    return renderEmptyState("Nenhum destaque encontrado", "Cadastre uma funcionalidade para alimentar o carrossel.");
  }

  const indicators = features
    .map(
      (feature, index) => `
        <button
          type="button"
          data-bs-target="#gymStreakCarousel"
          data-bs-slide-to="${index}"
          class="${index === 0 ? "active" : ""}"
          ${index === 0 ? 'aria-current="true"' : ""}
          aria-label="Slide ${index + 1}: ${escapeHtml(feature.nome)}">
        </button>
      `,
    )
    .join("");
  const slides = features
    .map(
      (feature, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="carousel-panel">
            <div class="carousel-caption gym-caption">
              <p class="eyebrow">${escapeHtml(feature.categoria)}</p>
              <h2>${escapeHtml(feature.nome)}</h2>
              <p>${escapeHtml(feature.descricao)}</p>
              <div class="metric-row" aria-label="Indicadores de ${escapeHtml(feature.nome)}">
                ${renderIndicators(feature.indicadores)}
              </div>
              <div class="hero-actions">
                <a class="primary-button" href="detalhes.html?id=${encodeURIComponent(feature.id)}">Ver detalhes</a>
                ${renderFavoriteButton(feature, "favorite-button-hero")}
              </div>
            </div>
            <div class="carousel-media">
              <img src="${escapeHtml(getFeatureImage(feature))}" alt="${escapeHtml(feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`)}">
            </div>
          </div>
        </div>
      `,
    )
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
        <span class="visually-hidden">Proximo</span>
      </button>
    </div>
  `;
}

function renderFeatureList(features) {
  if (!features.length) {
    return renderEmptyState("Nenhuma funcionalidade encontrada", "Tente outra busca ou cadastre um novo item no painel administrativo.");
  }

  return `
    <div class="row g-4">
      ${features.map(renderFeatureCard).join("")}
    </div>
  `;
}

function renderFeatureCard(feature) {
  return `
    <div class="col-12 col-md-6 col-xl-4">
      <article class="card feature-card h-100">
        ${renderFavoriteButton(feature)}
        <img src="${escapeHtml(getFeatureImage(feature))}" class="card-img-top" alt="${escapeHtml(feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`)}">
        <div class="card-body">
          <p class="card-kicker">${escapeHtml(feature.categoria)}</p>
          <h3 class="card-title">${escapeHtml(feature.nome)}</h3>
          <p class="card-text">${escapeHtml(feature.descricao)}</p>
          <div class="metric-row compact" aria-label="Indicadores de ${escapeHtml(feature.nome)}">
            ${renderIndicators(feature.indicadores)}
          </div>
        </div>
        <div class="card-footer">
          <a class="detail-link" href="detalhes.html?id=${encodeURIComponent(feature.id)}">Abrir detalhes</a>
        </div>
      </article>
    </div>
  `;
}

function renderFavoriteButton(feature, extraClass = "") {
  const active = isFavorite(feature.id);
  const label = active ? "Remover dos favoritos" : "Adicionar aos favoritos";

  return `
    <button
      class="favorite-button ${extraClass} ${active ? "active" : ""}"
      type="button"
      data-favorite-id="${escapeHtml(feature.id)}"
      aria-label="${label}: ${escapeHtml(feature.nome)}"
      aria-pressed="${active}">
      <span aria-hidden="true">${active ? "&#9829;" : "&#9825;"}</span>
    </button>
  `;
}

function renderAuthor() {
  const author = state.sistema.autor;

  return `
    <div class="author-layout">
      <div>
        <p class="eyebrow">Sobre o autor</p>
        <h2 id="titulo-autor">${escapeHtml(author.nome)}</h2>
        <p>${escapeHtml(author.descricao)}</p>
      </div>
      <dl class="author-facts" aria-label="Informacoes do aluno">
        <div>
          <dt>Matricula</dt>
          <dd>${escapeHtml(author.matricula)}</dd>
        </div>
        <div>
          <dt>Projeto</dt>
          <dd>${escapeHtml(author.projeto)}</dd>
        </div>
        <div>
          <dt>Disciplina</dt>
          <dd>${escapeHtml(author.disciplina)}</dd>
        </div>
      </dl>
    </div>
  `;
}

function renderEvolutionPanel() {
  const data = state.evolucao;
  const maxSeries = Math.max(...data.map((item) => Number(item.series) || 1), 1);
  const activeDays = [1, 3, 5, 8, 10, 13, 15, 18, 22, 24, 27, 30];
  const plannedWorkouts = data.reduce((total, item) => total + Number(item.treinos || 0), 0);

  return `
    <div class="section-heading compact-heading">
      <p class="eyebrow">Visualizacao avancada</p>
      <h2 id="titulo-evolucao">Resumo de evolucao semanal</h2>
      <p>Grafico e calendario adaptados ao contexto do GymStreak, usando dados da API para mostrar volume, carga e frequencia.</p>
    </div>
    <div class="advanced-layout">
      <article class="chart-card" aria-label="Grafico de series por grupo muscular">
        <div class="chart-bars">
          ${data
            .map((item) => {
              const height = Math.max(22, Math.round((Number(item.series) / maxSeries) * 100));
              return `
                <div class="chart-item">
                  <div class="chart-track">
                    <span class="chart-bar" style="height: ${height}%; background: ${escapeHtml(item.cor || "#ffdc5c")};"></span>
                  </div>
                  <strong>${escapeHtml(item.series)}</strong>
                  <span>${escapeHtml(item.grupo)}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
      <article class="calendar-card" aria-label="Calendario de treinos">
        <div class="calendar-header">
          <strong>Julho</strong>
          <span>${plannedWorkouts} treinos planejados</span>
        </div>
        <div class="mini-calendar">
          ${Array.from({ length: 30 }, (_, index) => {
            const day = index + 1;
            const active = activeDays.includes(day);
            return `<span class="${active ? "active" : ""}">${day}</span>`;
          }).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderDetailsPage() {
  const app = document.querySelector("#app");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const feature = state.funcionalidades.find((item) => String(item.id) === String(id));

  if (!feature) {
    app.innerHTML = renderNotFound();
    document.title = "Funcionalidade nao encontrada - GymStreak";
    return;
  }

  document.title = `${feature.nome} - GymStreak`;
  app.innerHTML = `
    ${renderApiNotice()}
    <section class="details-hero section-first" aria-labelledby="titulo-detalhe">
      <div class="details-copy">
        <a class="back-link" href="index.html#funcionalidades">Voltar para funcionalidades</a>
        <p class="eyebrow">${escapeHtml(feature.categoria)}</p>
        <h1 id="titulo-detalhe">${escapeHtml(feature.nome)}</h1>
        <p>${escapeHtml(feature.descricao)}</p>
        <div class="metric-row" aria-label="Indicadores de ${escapeHtml(feature.nome)}">
          ${renderIndicators(feature.indicadores)}
        </div>
        <div class="hero-actions">
          ${renderFavoriteButton(feature, "favorite-button-details")}
        </div>
      </div>
      <div class="details-media">
        <img src="${escapeHtml(getFeatureImage(feature))}" alt="${escapeHtml(feature.imagemAlt || `Imagem da funcionalidade ${feature.nome}`)}">
      </div>
    </section>

    <section class="section-block" aria-labelledby="titulo-informacoes">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Informacoes Gerais</p>
        <h2 id="titulo-informacoes">Dados da funcionalidade</h2>
      </div>
      <dl class="info-list">
        ${(feature.detalhes || [])
          .map(
            (detail) => `
              <div>
                <dt>${escapeHtml(detail.rotulo)}</dt>
                <dd>${escapeHtml(detail.valor)}</dd>
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
        ${(feature.fotos || []).map((photo) => renderPhoto(feature, photo)).join("")}
      </div>
    </section>
  `;
}

function renderLoginPage() {
  const app = document.querySelector("#app");
  const user = getCurrentUser();
  const flash = consumeFlashMessage();

  if (user) {
    app.innerHTML = `
      ${renderApiNotice()}
      <section class="section-block section-first empty-state">
        <p class="eyebrow">Sessao ativa</p>
        <h1>Voce esta logado</h1>
        <p>${escapeHtml(user.nome)} esta usando o GymStreak como ${escapeHtml(user.perfil)}.</p>
        <div class="hero-actions">
          <a class="primary-button" href="index.html">Ir para Home</a>
          <button class="detail-link inline-button" type="button" data-action="logout">Logout</button>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    ${renderApiNotice()}
    <section class="section-block section-first" aria-labelledby="titulo-login">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Acesso</p>
        <h1 id="titulo-login">Login e cadastro</h1>
        <p>Entre para salvar favoritos e acessar seus itens personalizados.</p>
      </div>
      ${flash ? `<div class="status-banner success">${escapeHtml(flash)}</div>` : ""}
      <div class="auth-layout">
        <form id="login-form" class="panel-form">
          <h2>Login</h2>
          <label>
            Login ou email
            <input name="login" type="text" autocomplete="username" required>
          </label>
          <label>
            Senha
            <input name="senha" type="password" autocomplete="current-password" required>
          </label>
          <p id="login-message" class="form-message" aria-live="polite"></p>
          <button class="primary-button form-button" type="submit">Entrar</button>
        </form>

        <form id="register-form" class="panel-form">
          <h2 id="cadastro">Cadastro de usuario</h2>
          <label>
            Login
            <input name="login" type="text" autocomplete="username" required>
          </label>
          <label>
            Nome
            <input name="nome" type="text" autocomplete="name" required>
          </label>
          <label>
            Email
            <input name="email" type="email" autocomplete="email" required>
          </label>
          <label>
            Senha
            <input name="senha" type="password" autocomplete="new-password" minlength="4" required>
          </label>
          <p id="register-message" class="form-message" aria-live="polite"></p>
          <button class="primary-button form-button" type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  `;
}

function renderFavoritesPage() {
  const app = document.querySelector("#app");
  const user = getCurrentUser();

  if (!user) {
    app.innerHTML = `
      ${renderApiNotice()}
      <section class="section-block section-first empty-state">
        <p class="eyebrow">Favoritos</p>
        <h1>Entre para ver seus favoritos</h1>
        <p>Os favoritos sao pessoais e ficam vinculados ao usuario logado.</p>
        <a class="primary-button" href="login.html">Fazer login</a>
      </section>
    `;
    return;
  }

  const favoriteIds = new Set(state.favoritos.map((item) => String(item.funcionalidadeId)));
  const favorites = state.funcionalidades.filter((feature) => favoriteIds.has(String(feature.id)));

  app.innerHTML = `
    ${renderApiNotice()}
    <section class="section-block section-first" aria-labelledby="titulo-favoritos">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Meus itens</p>
        <h1 id="titulo-favoritos">Favoritos</h1>
        <p>${escapeHtml(user.nome)}, aqui ficam as funcionalidades que voce marcou para acompanhar de perto.</p>
      </div>
      ${favorites.length ? renderFeatureList(favorites) : renderEmptyState("Nenhum favorito ainda", "Use o coracao nos cards ou na pagina de detalhes para salvar uma funcionalidade.")}
    </section>
  `;
}

function renderAdminPage() {
  const app = document.querySelector("#app");
  const user = getCurrentUser();

  if (!user || user.perfil !== "admin") {
    app.innerHTML = `
      ${renderApiNotice()}
      <section class="section-block section-first empty-state">
        <p class="eyebrow">Acesso restrito</p>
        <h1>Cadastro disponivel apenas para administradores</h1>
        <p>Entre com uma conta administradora para inserir, editar ou excluir funcionalidades.</p>
        <a class="primary-button" href="login.html">Fazer login</a>
      </section>
    `;
    return;
  }

  const editingFeature = state.funcionalidades.find(
    (feature) => String(feature.id) === String(state.editingFeatureId),
  );

  app.innerHTML = `
    ${renderApiNotice()}
    <section class="section-block section-first" aria-labelledby="titulo-admin">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Cadastro de itens</p>
        <h1 id="titulo-admin">CRUD de funcionalidades</h1>
        <p>Gerencie os itens principais do GymStreak usando a API REST baseada no JSON Server.</p>
      </div>
      ${renderAdminForm(editingFeature)}
    </section>

    <section class="section-block" aria-labelledby="titulo-listagem">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Listagem</p>
        <h2 id="titulo-listagem">Funcionalidades cadastradas</h2>
      </div>
      ${renderAdminList()}
    </section>
  `;
}

function renderAdminForm(feature) {
  const isEditing = Boolean(feature);
  const visualOptions = ["workout", "chart", "log", "progress", "social", "history", "calendar", "compare"];

  return `
    <form id="feature-form" class="panel-form admin-form">
      <input name="id" type="hidden" value="${escapeHtml(feature?.id || "")}">
      <div class="form-grid">
        <label>
          Nome
          <input name="nome" type="text" value="${escapeHtml(feature?.nome || "")}" required>
        </label>
        <label>
          Categoria
          <input name="categoria" type="text" value="${escapeHtml(feature?.categoria || "")}" required>
        </label>
        <label class="span-2">
          Objetivo
          <input name="objetivo" type="text" value="${escapeHtml(feature?.objetivo || "")}" required>
        </label>
        <label class="span-2">
          Descricao
          <textarea name="descricao" rows="3" required>${escapeHtml(feature?.descricao || "")}</textarea>
        </label>
        <label>
          Destaque
          <input name="destaque" type="text" value="${escapeHtml(feature?.destaque || "")}">
        </label>
        <label>
          Visual
          <select name="visual">
            ${visualOptions
              .map((option) => `<option value="${option}" ${feature?.visual === option ? "selected" : ""}>${option}</option>`)
              .join("")}
          </select>
        </label>
        <label class="span-2">
          Imagem principal
          <input name="imagem" type="text" value="${escapeHtml(feature?.imagem || "")}" placeholder="assets/img/main-img.png">
        </label>
        <label class="span-2">
          Texto alternativo da imagem
          <input name="imagemAlt" type="text" value="${escapeHtml(feature?.imagemAlt || "")}">
        </label>
        <label>
          Indicadores
          <textarea name="indicadores" rows="5" placeholder="Um indicador por linha">${escapeHtml(formatListForForm(feature?.indicadores))}</textarea>
        </label>
        <label>
          Detalhes
          <textarea name="detalhes" rows="5" placeholder="Rotulo: valor">${escapeHtml(formatDetailsForForm(feature?.detalhes))}</textarea>
        </label>
        <label class="span-2">
          Galeria
          <textarea name="fotos" rows="4" placeholder="Titulo | Descricao | visual">${escapeHtml(formatPhotosForForm(feature?.fotos))}</textarea>
        </label>
      </div>
      <p id="admin-message" class="form-message" aria-live="polite"></p>
      <div class="form-actions">
        <button class="primary-button form-button" type="submit">${isEditing ? "Salvar alteracoes" : "Inserir"}</button>
        ${isEditing ? '<button class="detail-link inline-button" type="button" data-action="cancel-edit">Cancelar</button>' : ""}
      </div>
    </form>
  `;
}

function renderAdminList() {
  if (!state.funcionalidades.length) {
    return renderEmptyState("Nenhum item cadastrado", "Use o formulario acima para inserir a primeira funcionalidade.");
  }

  return `
    <div class="crud-table-wrap">
      <table class="crud-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          ${state.funcionalidades
            .map(
              (feature) => `
                <tr>
                  <td>${escapeHtml(feature.id)}</td>
                  <td>${escapeHtml(feature.nome)}</td>
                  <td>${escapeHtml(feature.categoria)}</td>
                  <td>
                    <button class="table-button" type="button" data-admin-edit="${escapeHtml(feature.id)}">Editar</button>
                    <button class="table-button danger" type="button" data-admin-delete="${escapeHtml(feature.id)}">Excluir</button>
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
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
      })}" alt="${escapeHtml(photo.titulo)}">
      <div class="photo-body">
        <h3>${escapeHtml(photo.titulo)}</h3>
        <p>${escapeHtml(photo.descricao)}</p>
      </div>
    </article>
  `;
}

function renderNotFound() {
  return `
    <section class="section-block section-first empty-state">
      <p class="eyebrow">GymStreak</p>
      <h1>Funcionalidade nao encontrada</h1>
      <p>O link informado nao corresponde a nenhum item cadastrado no JSON do projeto.</p>
      <a class="primary-button" href="index.html#funcionalidades">Ver funcionalidades</a>
    </section>
  `;
}

function renderApiNotice() {
  if (state.apiOnline) {
    return "";
  }

  return `
    <div class="status-banner">
      JSON Server offline. A navegacao usa dados internos; login, favoritos e CRUD precisam de <strong>npm run server</strong>.
    </div>
  `;
}

function renderEmptyState(title, message) {
  return `
    <div class="empty-panel">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
}

function renderIndicators(indicators = []) {
  return indicators.map((indicator) => `<span>${escapeHtml(indicator)}</span>`).join("");
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
    headerActions?.classList.toggle("active", isOpen);
    mobileMenu.classList.toggle("active", isOpen);
    mobileMenu.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      headerActions?.classList.remove("active");
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

async function handleDocumentClick(event) {
  const logoutButton = event.target.closest("[data-action='logout']");
  const cancelButton = event.target.closest("[data-action='cancel-edit']");
  const favoriteButton = event.target.closest("[data-favorite-id]");
  const editButton = event.target.closest("[data-admin-edit]");
  const deleteButton = event.target.closest("[data-admin-delete]");

  if (logoutButton) {
    event.preventDefault();
    logout();
    return;
  }

  if (cancelButton) {
    event.preventDefault();
    state.editingFeatureId = null;
    renderAdminPage();
    return;
  }

  if (favoriteButton) {
    event.preventDefault();
    await toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  if (editButton) {
    event.preventDefault();
    state.editingFeatureId = editButton.dataset.adminEdit;
    renderAdminPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (deleteButton) {
    event.preventDefault();
    await deleteFeature(deleteButton.dataset.adminDelete);
  }
}

async function handleDocumentSubmit(event) {
  if (event.target.id === "search-form") {
    event.preventDefault();
    return;
  }

  if (event.target.id === "login-form") {
    event.preventDefault();
    await handleLogin(event.target);
    return;
  }

  if (event.target.id === "register-form") {
    event.preventDefault();
    await handleRegister(event.target);
    return;
  }

  if (event.target.id === "feature-form") {
    event.preventDefault();
    await saveFeature(event.target);
  }
}

function handleDocumentInput(event) {
  if (event.target.id !== "feature-search") {
    return;
  }

  state.searchTerm = event.target.value;
  const shell = document.querySelector("#feature-results-shell");

  if (shell) {
    shell.innerHTML = renderFeatureList(getFilteredFeatures());
  }
}

async function handleLogin(form) {
  if (!state.apiOnline) {
    setFormMessage("login-message", "Inicie o JSON Server para fazer login.");
    return;
  }

  const formData = new FormData(form);
  const login = String(formData.get("login") || "").trim().toLowerCase();
  const senha = String(formData.get("senha") || "").trim();
  const usuarios = await apiFetch("/usuarios");
  const user = usuarios.find(
    (item) =>
      ((item.login || "").toLowerCase() === login || (item.email || "").toLowerCase() === login) &&
      item.senha === senha,
  );

  if (!user) {
    setFormMessage("login-message", "Login ou senha invalidos.");
    return;
  }

  setCurrentUser(user);
  await loadFavoritesForCurrentUser();
  sessionStorage.setItem(FLASH_KEY, `Bem-vindo, ${firstName(user.nome)}.`);
  window.location.href = "index.html";
}

async function handleRegister(form) {
  if (!state.apiOnline) {
    setFormMessage("register-message", "Inicie o JSON Server para cadastrar usuarios.");
    return;
  }

  const formData = new FormData(form);
  const login = String(formData.get("login") || "").trim();
  const nome = String(formData.get("nome") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const senha = String(formData.get("senha") || "").trim();

  if (!login || !nome || !email || !senha) {
    setFormMessage("register-message", "Preencha todos os campos.");
    return;
  }

  const usuarios = await apiFetch("/usuarios");
  const duplicated = usuarios.some(
    (item) =>
      (item.login || "").toLowerCase() === login.toLowerCase() ||
      (item.email || "").toLowerCase() === email.toLowerCase(),
  );

  if (duplicated) {
    setFormMessage("register-message", "Login ou email ja cadastrado.");
    return;
  }

  const user = await apiFetch("/usuarios", {
    method: "POST",
    body: {
      login,
      nome,
      email,
      senha,
      perfil: "usuario",
    },
  });

  setCurrentUser(user);
  await loadFavoritesForCurrentUser();
  sessionStorage.setItem(FLASH_KEY, "Cadastro realizado com sucesso.");
  window.location.href = "index.html";
}

async function toggleFavorite(featureId) {
  const user = getCurrentUser();

  if (!user) {
    sessionStorage.setItem(FLASH_KEY, "Faca login para salvar favoritos.");
    window.location.href = "login.html";
    return;
  }

  if (!state.apiOnline) {
    alert("Inicie o JSON Server para salvar favoritos.");
    return;
  }

  const favorite = getFavoriteRecord(featureId);

  if (favorite) {
    await apiFetch(`/favoritos/${favorite.id}`, { method: "DELETE" });
  } else {
    await apiFetch("/favoritos", {
      method: "POST",
      body: {
        usuarioId: user.id,
        funcionalidadeId: Number(featureId),
      },
    });
  }

  await loadFavoritesForCurrentUser();

  if (document.body.dataset.page === "favorites") {
    renderFavoritesPage();
  } else {
    refreshFavoriteButtons();
  }
}

async function saveFeature(form) {
  if (!state.apiOnline) {
    setFormMessage("admin-message", "Inicie o JSON Server para salvar itens.");
    return;
  }

  try {
    const payload = buildFeaturePayload(form);
    const id = form.elements.id.value;

    if (id) {
      await apiFetch(`/funcionalidades/${encodeURIComponent(id)}`, {
        method: "PATCH",
        body: payload,
      });
    } else {
      await apiFetch("/funcionalidades", {
        method: "POST",
        body: payload,
      });
    }

    state.editingFeatureId = null;
    await loadApplicationData();
    renderAdminPage();
    setFormMessage("admin-message", "Funcionalidade salva com sucesso.", "success");
  } catch (error) {
    setFormMessage("admin-message", error.message);
  }
}

async function deleteFeature(featureId) {
  if (!state.apiOnline) {
    alert("Inicie o JSON Server para excluir itens.");
    return;
  }

  const feature = state.funcionalidades.find((item) => String(item.id) === String(featureId));
  const confirmed = window.confirm(`Excluir "${feature?.nome || "este item"}"?`);

  if (!confirmed) {
    return;
  }

  const relatedFavorites = await apiFetch(`/favoritos?funcionalidadeId=${encodeURIComponent(featureId)}`);
  await Promise.all(relatedFavorites.map((favorite) => apiFetch(`/favoritos/${favorite.id}`, { method: "DELETE" })));
  await apiFetch(`/funcionalidades/${encodeURIComponent(featureId)}`, { method: "DELETE" });
  await loadApplicationData();
  await loadFavoritesForCurrentUser();
  state.editingFeatureId = null;
  renderAdminPage();
  setFormMessage("admin-message", "Funcionalidade excluida.", "success");
}

function buildFeaturePayload(form) {
  const formData = new FormData(form);
  const nome = String(formData.get("nome") || "").trim();
  const categoria = String(formData.get("categoria") || "").trim();
  const objetivo = String(formData.get("objetivo") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const destaque = String(formData.get("destaque") || "").trim();
  const visual = String(formData.get("visual") || "chart").trim();
  const imagem = String(formData.get("imagem") || "").trim();
  const imagemAlt = String(formData.get("imagemAlt") || "").trim();
  const indicadores = parseList(formData.get("indicadores"));
  const detalhes = parseDetails(formData.get("detalhes"), { nome, objetivo, descricao });
  const fotos = parsePhotos(formData.get("fotos"), visual);

  if (!nome || !categoria || !objetivo || !descricao) {
    throw new Error("Preencha nome, categoria, objetivo e descricao.");
  }

  const payload = {
    nome,
    categoria,
    objetivo,
    descricao,
    destaque: destaque || descricao,
    visual,
    indicadores: indicadores.length ? indicadores : [categoria],
    detalhes,
    fotos,
  };

  if (imagem) {
    payload.imagem = imagem;
  }

  if (imagemAlt) {
    payload.imagemAlt = imagemAlt;
  }

  return payload;
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.setItem(FLASH_KEY, "Sessao encerrada.");
  window.location.href = "index.html";
}

function refreshFavoriteButtons() {
  document.querySelectorAll("[data-favorite-id]").forEach((button) => {
    const feature = state.funcionalidades.find((item) => String(item.id) === String(button.dataset.favoriteId));
    const active = isFavorite(button.dataset.favoriteId);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute(
      "aria-label",
      `${active ? "Remover dos favoritos" : "Adicionar aos favoritos"}: ${feature?.nome || "funcionalidade"}`,
    );
    button.querySelector("span").innerHTML = active ? "&#9829;" : "&#9825;";
  });
}

function getFeatureImage(feature) {
  if (feature.imagem) {
    return feature.imagem;
  }

  return createGeneratedImage({
    title: feature.nome,
    subtitle: feature.categoria,
    caption: feature.destaque || feature.descricao,
    type: feature.visual,
  });
}

function createGeneratedImage({ title, subtitle, caption, type }) {
  const accent = {
    workout: "#ffdc5c",
    chart: "#c986ff",
    log: "#69e39a",
    progress: "#f06b9a",
    social: "#ffdc5c",
    history: "#69e39a",
    calendar: "#c986ff",
    compare: "#f06b9a",
  }[type] || "#ffdc5c";
  const titleLines = splitSvgText(title, 16);
  const captionLines = splitSvgText(caption, 34);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img" aria-label="${escapeXml(title)}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#08080d"/>
          <stop offset="0.55" stop-color="#25122b"/>
          <stop offset="1" stop-color="#0b0b12"/>
        </linearGradient>
      </defs>
      <rect width="960" height="640" rx="34" fill="url(#bg)"/>
      <rect x="54" y="54" width="852" height="532" rx="28" fill="#11131d" stroke="${accent}" stroke-opacity="0.65"/>
      <rect x="92" y="104" width="320" height="432" rx="24" fill="#1c2030"/>
      <text x="126" y="162" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">${escapeXml(subtitle)}</text>
      ${titleLines
        .map(
          (line, index) =>
            `<text x="126" y="${226 + index * 42}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">${escapeXml(line)}</text>`,
        )
        .join("")}
      ${captionLines
        .map(
          (line, index) =>
            `<text x="126" y="${400 + index * 30}" fill="#f2e8f4" font-family="Arial, Helvetica, sans-serif" font-size="22">${escapeXml(line)}</text>`,
        )
        .join("")}
      ${renderVisualBody(type, accent)}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderVisualBody(type, accent) {
  if (type === "calendar" || type === "history") {
    return `
      <rect x="486" y="144" width="348" height="330" rx="24" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="486" y="144" width="348" height="74" rx="24" fill="${accent}"/>
      ${Array.from({ length: 12 }, (_, index) => {
        const x = 526 + (index % 4) * 72;
        const y = 256 + Math.floor(index / 4) * 70;
        const active = [1, 5, 10].includes(index);
        return `<rect x="${x}" y="${y}" width="42" height="42" rx="10" fill="${active ? accent : "#ffffff"}" fill-opacity="${active ? "1" : "0.82"}"/>`;
      }).join("")}
    `;
  }

  if (type === "chart" || type === "progress" || type === "compare") {
    return `
      <line x1="488" y1="450" x2="840" y2="450" stroke="#ffffff" stroke-opacity="0.18" stroke-width="4"/>
      <rect x="508" y="330" width="44" height="120" rx="10" fill="#c986ff"/>
      <rect x="584" y="270" width="44" height="180" rx="10" fill="#ffdc5c"/>
      <rect x="660" y="220" width="44" height="230" rx="10" fill="#69e39a"/>
      <rect x="736" y="292" width="44" height="158" rx="10" fill="#f06b9a"/>
      <path d="M508 260 C590 190 642 330 704 250 S804 176 838 214" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    `;
  }

  if (type === "social") {
    return `
      <rect x="520" y="310" width="74" height="150" rx="16" fill="#c986ff"/>
      <rect x="620" y="238" width="74" height="222" rx="16" fill="#ffdc5c"/>
      <rect x="720" y="356" width="74" height="104" rx="16" fill="#69e39a"/>
      <circle cx="557" cy="246" r="38" fill="#ffffff" fill-opacity="0.9"/>
      <circle cx="657" cy="174" r="42" fill="#ffffff" fill-opacity="0.9"/>
      <circle cx="757" cy="292" r="34" fill="#ffffff" fill-opacity="0.9"/>
    `;
  }

  if (type === "log") {
    return `
      <rect x="488" y="144" width="342" height="330" rx="22" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.14"/>
      <rect x="520" y="188" width="278" height="28" rx="14" fill="${accent}"/>
      <rect x="520" y="248" width="220" height="24" rx="12" fill="#ffffff" fill-opacity="0.7"/>
      <rect x="520" y="306" width="258" height="24" rx="12" fill="#ffffff" fill-opacity="0.48"/>
      <rect x="520" y="364" width="190" height="24" rx="12" fill="#ffffff" fill-opacity="0.7"/>
    `;
  }

  return `
    <rect x="470" y="126" width="120" height="310" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
    <rect x="612" y="178" width="120" height="258" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
    <rect x="754" y="230" width="88" height="206" rx="18" fill="#1c2030" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="506" y="194" fill="#ffdc5c" font-family="Arial" font-size="42" font-weight="800">A</text>
    <text x="648" y="246" fill="#c986ff" font-family="Arial" font-size="42" font-weight="800">B</text>
    <text x="782" y="298" fill="#69e39a" font-family="Arial" font-size="42" font-weight="800">C</text>
  `;
}

function getFilteredFeatures() {
  const term = normalizeText(state.searchTerm);

  if (!term) {
    return state.funcionalidades;
  }

  return state.funcionalidades.filter((feature) => {
    const content = normalizeText(
      `${feature.nome} ${feature.categoria} ${feature.objetivo} ${feature.descricao} ${(feature.indicadores || []).join(" ")}`,
    );
    return content.includes(term);
  });
}

function getFavoriteRecord(featureId) {
  return state.favoritos.find((item) => String(item.funcionalidadeId) === String(featureId));
}

function isFavorite(featureId) {
  return Boolean(getFavoriteRecord(featureId));
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY));
  } catch (error) {
    return null;
  }
}

function setCurrentUser(user) {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      id: user.id,
      login: user.login,
      nome: user.nome,
      email: user.email,
      perfil: user.perfil,
    }),
  );
}

function consumeFlashMessage() {
  const message = sessionStorage.getItem(FLASH_KEY);
  sessionStorage.removeItem(FLASH_KEY);
  return message;
}

function setFormMessage(id, message, type = "error") {
  const target = document.querySelector(`#${id}`);

  if (!target) {
    return;
  }

  target.textContent = message;
  target.classList.toggle("success", type === "success");
}

function parseList(value) {
  return String(value || "")
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseDetails(value, fallback) {
  const details = String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return { rotulo: "Informacao", valor: line };
      }

      return {
        rotulo: line.slice(0, separatorIndex).trim(),
        valor: line.slice(separatorIndex + 1).trim(),
      };
    })
    .filter((item) => item.rotulo && item.valor);

  if (details.length) {
    return details;
  }

  return [
    { rotulo: "Nome", valor: fallback.nome },
    { rotulo: "Objetivo", valor: fallback.objetivo },
    { rotulo: "Descricao", valor: fallback.descricao },
  ];
}

function parsePhotos(value, visual) {
  const photos = String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [titulo, descricao, photoVisual] = line.split("|").map((item) => item.trim());
      return {
        titulo,
        descricao: descricao || "Visual relacionado a funcionalidade.",
        visual: photoVisual || visual,
      };
    })
    .filter((item) => item.titulo);

  if (photos.length) {
    return photos;
  }

  return [
    {
      titulo: "Resumo visual",
      descricao: "Representacao da funcionalidade cadastrada.",
      visual,
    },
  ];
}

function formatListForForm(items = []) {
  return items.join("\n");
}

function formatDetailsForForm(details = []) {
  return details.map((item) => `${item.rotulo}: ${item.valor}`).join("\n");
}

function formatPhotosForForm(photos = []) {
  return photos.map((item) => `${item.titulo} | ${item.descricao} | ${item.visual || ""}`).join("\n");
}

function firstName(name = "") {
  return String(name).trim().split(" ")[0] || "Usuario";
}

function splitSvgText(text, maxLength) {
  const words = String(text || "").split(" ");
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

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
