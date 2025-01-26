<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});
type PAYLOAD = {
  email: string
  password: string
  name: string
}
const form = ref<PAYLOAD>({
  email: '',
  password: '',
  name: ''
})
</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen">
    <div  class="w-full max-w-md">
        <form action="">
            <Card>
                <CardHeader>
                <CardTitle class="text-2xl">
                    Register
                </CardTitle>
                <CardDescription>
                    Enter your information below to Create your account.
                </CardDescription>
                </CardHeader>
                <CardContent class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="name">Name</Label>
                    <Input id="name" type="name" placeholder="Name" required  v-model="form.name"/>
                </div>
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
                        Register
                    </Button>
                    <p>
                        Already have an account? 
                        <NuxtLink to="/auth/login" class="border-b border-gray-500 text-muted-foreground hover:text-blue-900">Login</NuxtLink>
                    </p>
                </CardFooter>
            </Card>
        </form>
    </div>
  
    
</div>
</template>