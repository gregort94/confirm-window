export interface ConfirmInstanse {
    message: string
    onDone: () => void
    onClose: () => void
}
export interface ConfirmInstanseFull extends ConfirmInstanse {
    id: string
}