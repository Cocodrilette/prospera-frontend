interface AuthInput {
  isValid: boolean
}

export interface Email extends AuthInput {
  email: string | undefined
}

export interface Password extends AuthInput {
  password: string | undefined
}

export interface Name extends AuthInput {
  name: string | undefined
}

export interface Address extends AuthInput {
  address: string | undefined
}

export interface Age extends AuthInput {
  age: number | undefined
}
