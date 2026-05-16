export class RBACService {
  static hasRole(role: string, allowedRoles: string[]) {
    return allowedRoles.includes(role);
  }
}
