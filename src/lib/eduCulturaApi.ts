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


// Fazendo de acordo com o código do Dan

// EVENTOS 
// Função para fazer uma requisição GET para obter eventos
export async function fetchEventos() {
    const response = await fetch(`${API}/eventos`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar eventos: ${response.statusText}`);
    }
    return await response.json();
}

// Função para fazer busca de uma requisição GET para um Evento em especifico
export async function fetchEventoById(id: string) {
    const response = await fetch(`{API}/eventos/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar evento com ID ${id}: ${response.statusText}`);
    }
    return response.json();
}


// MUSEUS
// Função para fazer uma requisição GET para obter museus
export async function fetchMuseus() {
    const response = await fetch(`${API}/museus`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar museus: ${response.statusText}`);
    }
    return response.json();
}

// Função para fazer busca de uma requisição GET para um Museu em especifico
export async function fetchMuseusById(id: String) {
    const response = await fetch(`{API}/museus/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar museu com ID ${id}: ${response.statusText}`);
    }
    return response.json();
}


// PERSONALIDADES
export async function fetchPersonalidades() {
    const response = await fetch(`${API}/personalidades`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar personalidades: ${response.statusText}`);
    }
    return response.json();
}

// Função para fazer busca de uma requisição GET para uma Personalidade em especifico
export async function fetchPersonalidadeById(id: String) {
    const response = await fetch(`${API}/personalidade/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar personalidade com ID ${id}: ${response.statusText}`);
    }
    return response.json();
}


// UNIVERSIDADES
export async function fetchUniversidades() {
    const response = await fetch(`${API}/universidades`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar universidades: ${response.statusText}`);
    }
    return response.json();
}

// Função para fazer busca de uma requisição GET para uma Universidade em especifico
export async function fetchUniversidadeById(id: String) {
    const response = await fetch (`${API}/universidade/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar universidade com ID ${id}: ${response.statusText}`);
    }
    return response.json();
}
