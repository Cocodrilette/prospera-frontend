export interface AuthInput {
  isValid: boolean
}

export interface Email extends AuthInput {
  email: string | undefined
}

export interface Password extends AuthInput {
  password: string | undefined
}
