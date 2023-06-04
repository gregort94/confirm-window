//@ts-ignore
import uniqId from 'uniqid'
import { ref } from "vue"
import { ConfirmInstanseFull, ConfirmInstanse } from './types'

const modals = ref<ConfirmInstanseFull[]>([])
export const useModalStore = () => {
    const addModal = (confirmInstanse: ConfirmInstanse) => {
        modals.value.push({
            ...confirmInstanse,
            id: uniqId()
        })
    }
    const deleteModal = (id: string) => {
        const idx = modals.value.findIndex((item) => item.id === id)
        modals.value.splice(idx, 1)
    }
    return { modals, addModal, deleteModal }
}