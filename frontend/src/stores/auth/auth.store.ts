import type { AuthStatus } from "../../interfaces";

export interface AuthState {
    status: AuthStatus;
    token: string;
}
