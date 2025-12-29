declare module "ga-gtag" {
  export function install(trackingId: string): void;
  export function gtag(command: string, action: string, params?: any): void;
}
