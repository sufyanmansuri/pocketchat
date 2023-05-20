import { LoginInputs, SingUpInputs } from '@/lib/schema'

export type LoginAction = (form: LoginInputs) => Promise<void>
export type SignUpAction = (form: SingUpInputs) => Promise<void>
export type LogoutAction = () => Promise<void>
