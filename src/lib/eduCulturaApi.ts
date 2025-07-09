// Implementação da API 
const API = "https://educultura.onrender.com";

// Função para buscar dados da API
export async function fetchFromEduCulturaApi(endpoint: string) {
  try {
    const response = await fetch(`${API}/${endpoint}`);
    
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    
    // Retorna os dados em formato JSON
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error; // Re-throw para que o erro possa ser tratado onde a função é chamada
  }
}


// EVENTOS 

// Buscar todos os eventos
export async function fetchEventos() {
  const response = await fetch(`${API}/eventos`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar eventos: ${response.statusText}`);
  }
  return await response.json();
}

// Buscar eventos por cidade (parâmetro 'cidade' ao invés de 'id')
export async function fetchEventosByCidade(cidade: string) {
  const response = await fetch(`${API}/eventos/${encodeURIComponent(cidade)}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar eventos na cidade ${cidade}: ${response.statusText}`);
  }
  return await response.json();
}

// MUSEUS

// Buscar todos os museus
export async function fetchMuseus() {
  const response = await fetch(`${API}/museus`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar museus: ${response.statusText}`);
  }
  return await response.json();
}

// Buscar museus por cidade
export async function fetchMuseusByCidade(cidade: string) {
  const response = await fetch(`${API}/museus/${encodeURIComponent(cidade)}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar museus na cidade ${cidade}: ${response.statusText}`);
  }
  return await response.json();
}

// PERSONALIDADES

// Buscar todas as personalidades
export async function fetchPersonalidades() {
  const response = await fetch(`${API}/personalidades`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar personalidades: ${response.statusText}`);
  }
  return await response.json();
}

// Buscar personalidade por nome
export async function fetchPersonalidadeByNome(nome: string) {
  const response = await fetch(`${API}/personalidade/${encodeURIComponent(nome)}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar personalidade com nome ${nome}: ${response.statusText}`);
  }
  return await response.json();
}

// UNIVERSIDADES

// Buscar todas as universidades
export async function fetchUniversidades() {
  const response = await fetch(`${API}/universidades`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar universidades: ${response.statusText}`);
  }
  return await response.json();
}

// Buscar universidade por nome
export async function fetchUniversidadeByNome(nome: string) {
  const response = await fetch(`${API}/universidade/${encodeURIComponent(nome)}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar universidade com nome ${nome}: ${response.statusText}`);
  }
  return await response.json();
}