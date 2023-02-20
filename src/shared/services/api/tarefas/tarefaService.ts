import { Api } from "../apiConfig"
import { ApiException } from "../apiException"

export interface ItemTarefa {
    id: number,
    title: string
    isCompleted: boolean
}

const getAll = async (): Promise<ItemTarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas')
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar os registros')
    }
}

const getById = async (id: number): Promise<ItemTarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`)
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar um registro')
    }
}

const create = async (dataToCreate: Omit<ItemTarefa, 'id'>): Promise<ItemTarefa | ApiException> => {
    try {
        const { data } = await Api().post<ItemTarefa>('/tarefas', dataToCreate)
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar um registro')
    }
}

const updateById = async (id: number, dataToUpdate: ItemTarefa): Promise<ItemTarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate)
        return data
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro')
    }
}

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`)
        return undefined
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar um registro')
    }
}

export const TarefaService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
}