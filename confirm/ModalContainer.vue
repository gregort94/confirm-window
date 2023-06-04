<script lang="ts" setup>
import { ConfirmInstanseFull } from './types';
import { useModalStore } from './modalStore'
const { modals, deleteModal } = useModalStore()
const closeModal = (id: string) => {
    deleteModal(id)
}

const onCloseClick = (modal: ConfirmInstanseFull) => {
    closeModal(modal.id)
    modal.onClose()
}
const onDoneClick = (modal: ConfirmInstanseFull) => {
    closeModal(modal.id)
    modal.onDone()
}
</script>

<template>
    <div>
        <div class="modal" v-for="modal in modals" :key="modal.id">
            <div class="modal-body">
                <div>
                    {{ modal.message }}
                </div>
                <div class="controls">
                    <button @click="onDoneClick(modal)" class="confirm-button">Confirm</button>
                    <button @click="onCloseClick(modal)" class="close-button">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    inset: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-body {
    background: white;
    padding: 12px;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.controls {
    display: flex;
    justify-content: flex-end;
}

.confirm-button {
    background: green;
    color: white;
}

.close-button {
    background: red;
    color: white;
}
</style>