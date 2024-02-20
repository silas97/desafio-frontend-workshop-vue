import { mockAtas } from '@/data/mockData'

export default {
  getAllAtas: () => {
    return mockAtas
  },

  getAtaById: (id) => {
    const ata = mockAtas.find((a) => Number(a.id) === Number(id))
    if (ata) {
      return ata
    }
    return null
  },

  createAta: (newAta) => {
    if (!newAta.workshop || !newAta.colaboradores || newAta.colaboradores.length === 0) {
      throw new Error('Workshop e pelo menos um colaborador são obrigatórios')
    }
    const createdAta = { id: mockAtas.length + 1, ...newAta }
    mockAtas.push(createdAta)
    return createdAta
  },

  updateAta: (id, updatedAta) => {
    const index = mockAtas.findIndex((ata) => ata.id === id)
    if (index !== -1) {
      if (
        !updatedAta.workshop ||
        !updatedAta.colaboradores ||
        updatedAta.colaboradores.length === 0
      ) {
        throw new Error('Workshop e pelo menos um colaborador são obrigatórios')
      }
      mockAtas[index] = { ...mockAtas[index], ...updatedAta }
      return mockAtas[index]
    }
    throw new Error('Ata não encontrada')
  },

  deleteAta: (id) => {
    const index = mockAtas.findIndex((ata) => ata.id === id)
    if (index !== -1) {
      const deletedAta = mockAtas.splice(index, 1)[0]
      return deletedAta
    }
    throw new Error('Ata não encontrada')
  }
}
