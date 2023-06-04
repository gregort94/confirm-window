<script lang="ts" setup>
import ModalContainer from 'confirm/ModalContainer.vue';
import { useConfirm } from 'confirm';
const { confirm } = useConfirm()
const onOpenConfirmClick = () => {
    confirm({
        message: 'any message',
        onDone: () => {
            console.log('onDone');
        },
        onClose: () => {
            console.log('onClose');
        }
    })
}
</script>

<template>
    <div class="root">
        <button @click="onOpenConfirmClick">Open confirm</button>
        <ModalContainer></ModalContainer>
    </div>
</template>

<style scoped>
.root {
    height: 100vh;
}
</style>