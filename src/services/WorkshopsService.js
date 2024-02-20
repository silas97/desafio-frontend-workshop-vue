import { mockWorkshops } from '@/data/mockData'

export default {
  getAllWorkshops: () => {
    return mockWorkshops
  },

  getWorkshopById: (id) => {
    const workshop = mockWorkshops.find((w) => w.id === id)
    if (workshop) {
      return workshop
    }
    throw new Error('Workshop não encontrado')
  },

  createWorkshop: (newWorkshop) => {
    if (!newWorkshop.nome || !newWorkshop.dataRealizacao) {
      throw new Error('O nome e a data de realização do workshop são obrigatórios')
    }
    const createdWorkshop = { id: mockWorkshops.length + 1, ...newWorkshop }
    mockWorkshops.push(createdWorkshop)
    return createdWorkshop
  },

  updateWorkshop: (id, updatedWorkshop) => {
    const index = mockWorkshops.findIndex((workshop) => workshop.id === id)
    if (index !== -1) {
      if (!updatedWorkshop.nome || !updatedWorkshop.dataRealizacao) {
        throw new Error('O nome e a data de realização do workshop são obrigatórios')
      }
      mockWorkshops[index] = { ...mockWorkshops[index], ...updatedWorkshop }
      return mockWorkshops[index]
    }
    throw new Error('Workshop não encontrado')
  },

  deleteWorkshop: (id) => {
    const index = mockWorkshops.findIndex((workshop) => workshop.id === id)
    if (index !== -1) {
      const deletedWorkshop = mockWorkshops.splice(index, 1)[0]
      return deletedWorkshop
    }
    throw new Error('Workshop não encontrado')
  }
}
