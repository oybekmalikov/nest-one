import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../../app.constants";

@Injectable()
export class JwtRolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const requiredRoles = this.reflector.getAllAndOverride<string[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		);
		if (!requiredRoles) {
			return true;
		}
		const roles = request.user.roles;
		const permission = roles.some((role: any) =>
			requiredRoles.includes(role.value)
		);
		if (!permission) {
			throw new ForbiddenException({
				message: "User's role not allowed",
			});
		}
		return true;
	}
}
