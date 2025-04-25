import { User } from "../../models/user.model";

export const userStub = (): Partial<User> => {
	return {
		id: 1,
		name: "user1",
		email: "user@example.com",
		password: "12345678",
		is_active: false,
	};
};
