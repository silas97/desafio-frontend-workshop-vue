import { mockColaboradores } from '@/data/mockData'

export default {
  getAllColaboradores: () => {
    return mockColaboradores
  },

  getColaboradorById: (id) => {
    const colaborador = mockColaboradores.find((c) => c.id === id)
    if (colaborador) {
      return colaborador
    }
    throw new Error('Colaborador não encontrado')
  },

  createColaborador: (newColaborador) => {
    if (!newColaborador.nome) {
      throw new Error('O nome do colaborador é obrigatório')
    }
    const createdColaborador = { id: mockColaboradores.length + 1, ...newColaborador }
    mockColaboradores.push(createdColaborador)
    return createdColaborador
  },

  updateColaborador: (id, updatedColaborador) => {
    const index = mockColaboradores.findIndex((colaborador) => colaborador.id === id)
    if (index !== -1) {
      if (!updatedColaborador.nome) {
        throw new Error('O nome do colaborador é obrigatório')
      }
      mockColaboradores[index] = { ...mockColaboradores[index], ...updatedColaborador }
      return mockColaboradores[index]
    }
    throw new Error('Colaborador não encontrado')
  },

  deleteColaborador: (id) => {
    const index = mockColaboradores.findIndex((colaborador) => colaborador.id === id)
    if (index !== -1) {
      const deletedColaborador = mockColaboradores.splice(index, 1)[0]
      return deletedColaborador
    }
    throw new Error('Colaborador não encontrado')
  }
}
