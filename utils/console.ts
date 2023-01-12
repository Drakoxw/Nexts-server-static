// eslint-disable-next-line turbo/no-undeclared-env-vars
export const DEV = process.env.NODE_ENV

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logError (description = '', data: any = '') {
  if (DEV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(description, data)
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logDev (description = '', data: any = '') {
  if (DEV === 'development') {
    // eslint-disable-next-line no-console
    console.log(description, data)
  }
}

export function CatchConsole() {
  window.console.error = ($event, more) => {
    // eslint-disable-next-line no-console
    console.log('** Event 🤦‍♂️***', $event)
    // eslint-disable-next-line no-console
    console.log('** Trace 👉️***', more)
  }
}
