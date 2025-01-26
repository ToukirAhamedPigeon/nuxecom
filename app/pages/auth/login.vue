<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});
type PAYLOAD = {
  email: string
  password: string
}
const form = ref<PAYLOAD>({
  email: '',
  password: '',
})
</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen">
    <div  class="w-full max-w-md">
        <form action="">
            <Card>
                <CardHeader>
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter your credentials below to login to your account.
                </CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required v-model="form.email" />
                </div>
                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" required v-model="form.password" />
                </div>
                <div class="grid grid-cols-1 gap-2">
                    <AuthSocialButton label="Github" icon="radix-icons:github-logo" />
                </div>
                </CardContent>
                <CardFooter class="flex-col items-center">
                    <Button type="submit" class="w-full bg-black text-white hover:bg-gray-900">
                        Login
                    </Button>
                    <p>
                        Don't have an account? 
                        <NuxtLink to="/auth/register" class="border-b border-gray-500 text-muted-foreground hover:text-blue-900">Register</NuxtLink>
                    </p>
                </CardFooter>
            </Card>
        </form>
    </div>
  
    
</div>
</template>