

export function createSlug(username: string) {
    return username
        .normalize('NFD') // Decompõe os caracteres acentuados em seus componentes básicos
        .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos
        .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove caracteres especiais, exceto espaços e hífens
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-') // Remove hífens consecutivos
        .toLowerCase() // Converte para minúsculas
        .trim(); // Remove espaços em branco no início e no fim
}