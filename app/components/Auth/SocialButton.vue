<template>
    <Button @click="authenticate" type="button" variant="outline">
            <div class="flex items-center">
                <Icon :icon="icon" class="mr-1 h-4 w-4"></Icon> {{ label }}
            </div>
        </Button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
defineProps<{
    label: string,
    icon: string
}>()

const authenticate = () => {
    //window.location.href = '/api/auth/github'
}
</script>

<style scoped>

</style>