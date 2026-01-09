export const signInUrl = "api/v1/auth/login";
export const signUpUrl = "api/v1/auth/register";
export const verifuUrl = (userId: string, token: string) => `api/v1/auth/verify?userId=${userId}&token=${token}`;
export const dashboardDataUrl = "api/v1/transaction/dashboardData";
