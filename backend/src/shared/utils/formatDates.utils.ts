export function converterDataBR(valor: string): string {
  const [dia, mes, ano] = valor.split('/');
  return `${ano}-${mes}-${dia}`;
}
