// src/mockData.js
export const mockColaboradores = [
  { id: 1, nome: 'Alice' },
  { id: 2, nome: 'Bob' },
  { id: 3, nome: 'Charlie' }
]

export const mockWorkshops = [
  {
    id: 1,
    nome: 'Workshop A',
    dataRealizacao: '2024-02-17T00:00:00Z',
    descricao: 'Descrição do Workshop A'
  },
  {
    id: 2,
    nome: 'Workshop B',
    dataRealizacao: '2024-03-15T00:00:00Z',
    descricao: 'Descrição do Workshop B'
  }
]

export const mockAtas = [
  {
    id: 1,
    workshop: mockWorkshops[0],
    colaboradores: [mockColaboradores[0], mockColaboradores[1]]
  },
  {
    id: 2,
    workshop: mockWorkshops[1],
    colaboradores: [mockColaboradores[1], mockColaboradores[2]]
  }
]
