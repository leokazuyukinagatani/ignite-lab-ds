import { Logo } from "../components/Logo"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import { Checkbox } from "../components/Checkbox"
import { Button } from "../components/Button"
import { Envelope, Lock } from "phosphor-react"
import { FormEvent, useState } from "react"

import axios from 'axios'

export function SignIn() {
  const[isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSignIn(event: FormEvent) {
    event.preventDefault();
    
    axios.post('/sessions',{
      email: 'leokazuyukinagatani@gmail.com',
      password: '12345678' 
    })

    setIsUserSignedIn(true)
  }
  return(
    <div className='w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100'>
    <header className='flex flex-col items-center'>
      <Logo/>
      <Heading size='lg' className='mt-4'>
        Ignite Lab
      </Heading>
      <Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
    </header>
    <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
      { isUserSignedIn && <Text>Login Realizado!</Text>}
      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Endereço de e-mail</Text>

        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input id="email" placeholder='Digite seu e-mail' type="email"/>
        </TextInput.Root>
        
      </label>

      <label htmlFor="password" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Sua senha</Text>

        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input id="password" placeholder='***************' type="password"/>
        </TextInput.Root>
        
      </label>


      <label htmlFor="remember" className='flex items-center gap-2'>
        <Checkbox id='remember'/>
        <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
      </label>

      <Button type="submit" onClick={handleSignIn} className='mt-4'>Entrar na plataforma</Button>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild className='text-gray-400 underline' size='sm'>
        <a href="" className='hover:text-gray-200'>Esqueceu sua senha?</a>
      </Text>
      <Text asChild className='text-gray-400 underline' size='sm'>
        <a href="" className='hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
      </Text>
    </footer>
   </div>
  )
}