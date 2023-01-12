
import http from './http'

export function validateEmail (idCorreo: string) {
  const route = '/ila/cliente/index.php'
  const body = {
    tipo: 'validarCorreo',
    idCorreo
  }
  return http().post(route, body)
}
