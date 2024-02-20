export const formatarData = (dataString) => {
  const partes = dataString.split('T')[0].split('-')
  const dataFormatada = partes.reverse().join('/')
  return dataFormatada
}
