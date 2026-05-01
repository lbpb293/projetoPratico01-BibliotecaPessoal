const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

titulos.push(
  "O Hobbit",
  "Clean Code",
  "1984",
  "Dom Casmurro",
  "O Nome do Vento",
);

autores.push(
  "J.R.R. Tolkien",
  "Robert C. Martin",
  "George Orwell",
  "Machado de Assis",
  "Patrick Rothfuss",
);

anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

function exibirBiblioteca(): void {
  console.log("=== Minha Biblioteca ===");

  titulos.forEach((titulo, index) => {
    const status = lido[index] ? `LIDO (${avaliacoes[index]}/5)` : "PENDENTE";

    console.log(
      `${index + 1}. "${titulo}" (${anos[index]}) - ${autores[index]} - ${paginas[index]} pag - ${status}`,
    );
  });
}

exibirBiblioteca();

function adicionarLivro(
  titulo: string,
  autor: string,
  ano: number,
  numPaginas: number,
): void {
  if (ano <= 0 || numPaginas <= 0) {
    console.log("Ano ou número de páginas inválido.");
    return;
  }

  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(numPaginas);
  lido.push(false);
  avaliacoes.push(0);

  console.log(`Livro "${titulo}" adicionado com sucesso.`);
}

function removerLivro(indice: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log("Índice inválido.");
    return;
  }

  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);

  console.log(`Livro removido com sucesso.`);
}

console.log("\n--- ESTADO INICIAL ---");
exibirBiblioteca();

console.log("\n--- ADICIONANDO LIVROS ---");
adicionarLivro("Livro A", "Autor A", 2024, 300);
adicionarLivro("Livro B", "Autor B", 2000, 200);

console.log("\n--- APÓS ADIÇÕES ---");
exibirBiblioteca();

console.log("\n--- REMOVENDO LIVRO ---");
removerLivro(titulos.length - 1);

console.log("\n--- APÓS REMOÇÃO ---");
exibirBiblioteca();

function buscarPorTitulo(termo: string): number[] {
  const resultados: number[] = [];

  titulos.forEach((titulo, index) => {
    if (titulo.toLowerCase().includes(termo.toLowerCase())) {
      resultados.push(index);
    }
  });

  return resultados;
}

console.log("\n=== BUSCA POR TÍTULO ===");
const encontrados = buscarPorTitulo("o");

console.log("Índices encontrados:", encontrados);

encontrados.forEach((i) => {
  console.log(`- ${titulos[i]}`);
});

function listarPorAutor(autor: string): string[] {
  return autores
    .map((a, index) => ({ autor: a, index }))
    .filter((obj) => obj.autor.toLowerCase() === autor.toLowerCase())
    .map((obj) => titulos[obj.index]);
}

console.log("\n=== LIVROS POR AUTOR ===");
const livrosAutor = listarPorAutor("George Orwell");

console.log(livrosAutor);
