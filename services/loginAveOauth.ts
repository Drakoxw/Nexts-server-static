import http from './http'

export function searchEmailOauth(email: string) {
  const route = '/auth/v2.0/auth.php'
  const body = {
    tipo: 'loginOauth',
    email
  }
  return http().post(route, body)
}
