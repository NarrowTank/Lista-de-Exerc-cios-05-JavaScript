// 1. Cálculo do IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const peso1 = 70;
const altura1 = 1.75;
const imc = calcularIMC(peso1, altura1);
console.log("IMC:", imc.toFixed(2));

// 2. Volume de uma Esfera
function calcularVolumeEsfera(raio) {
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume;
}

const raio = 5;
const volume = calcularVolumeEsfera(raio);
console.log("Volume da Esfera:", volume.toFixed(2), "m³");

// 3. Perímetro e Área de um Triângulo
function calcularPerimetroTriangulo(a, b, c) {
    const perimetro = a + b + c;
    return perimetro;
}

function calcularAreaTriangulo(b, h) {
    const area = (b * h) / 2;
    return area;
}

const a = 3;
const b = 4;
const c = 5;
const h = 2.5;

const perimetro = calcularPerimetroTriangulo(a, b, c);
const area = calcularAreaTriangulo(b, h);
console.log("Perímetro do Triângulo:", perimetro, "m");
console.log("Área do Triângulo:", area.toFixed(2), "m²");

// 4. Equação de Segundo Grau (Bhaskara)
function calcularBhaskara(a, b, c) {
    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return { raiz1, raiz2 };
    }
}

const a4 = 1;
const b4 = -3;
const c4 = 2;

const raizes = calcularBhaskara(a4, b4, c4);
console.log("Raízes da Equação:", raizes);

// 5. Verificar Palíndromo
function verificarPalindromo(palavra) {
    const palavraNormalizada = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    return palavraNormalizada === palavraInvertida;
}

const palavra = "arara";
const ehPalindromo = verificarPalindromo(palavra);
console.log(A palavra "${palavra}" é palíndromo?, ehPalindromo);

// 6. Verificar Anagrama
function verificarAnagrama(palavra1, palavra2) {
    const normalizar = (palavra) => palavra.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalizar(palavra1) === normalizar(palavra2);
}

const palavra1 = "amor";
const palavra2 = "roma";
const ehAnagrama = verificarAnagrama(palavra1, palavra2);
console.log(A palavra "${palavra2}" é anagrama de "${palavra1}"?, ehAnagrama);

// 7. Contar Espaços em Branco
function contarEspacosEmBranco(frase) {
    const espacos = frase.split(' ').length - 1;
    return espacos;
}

const frase = "Quantos espaços em branco existem aqui?";
const espacosEmBranco = contarEspacosEmBranco(frase);
console.log("Quantidade de espaços em branco:", espacosEmBranco);

// 8. Inverter Nome Completo
function inverterNome(nomeCompleto) {
    const nomes = nomeCompleto.trim().split(' ');
    const sobrenome = nomes.pop();
    const nomeInvertido = ${sobrenome}, ${nomes.join(' ')};
    return nomeInvertido;
}

const nomeCompleto = "Maria Silva Sousa";
const nomeInvertido = inverterNome(nomeCompleto);
console.log("Nome invertido:", nomeInvertido);