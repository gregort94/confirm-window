import { useModalStore } from "./modalStore"
import { ConfirmInstanse } from "./types"

const modalStore = useModalStore()

export const useConfirm = () => {
    const confirm = (confirmInstanse: ConfirmInstanse) => {
        modalStore.addModal(confirmInstanse)
    }
    return { confirm }
}
