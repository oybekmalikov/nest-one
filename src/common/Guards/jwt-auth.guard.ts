import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const authHeader = request.headers.authorization;
		if (!authHeader) {
			throw new UnauthorizedException({ message: "Token not given" });
		}
		const [bearer, token] = authHeader.split(" ");
		if (bearer !== "Bearer" || !token) {
			throw new UnauthorizedException({
				message: "Bearer or token not ",
			});
		}
		let user: any;
		try {
			user = this.jwtService.verify(token);
		} catch (error) {
			throw new UnauthorizedException({
				message: "Token expired or Invalid Signature",
				error,
			});
		}
		request.user = user;
		return true;
	}
}
