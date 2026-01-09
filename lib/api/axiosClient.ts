import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if the error is 401 (Unauthorized)
    if (error.response?.status === 401) {

      // Ensure this runs only in the browser (Client-side)
      if (typeof window !== "undefined") {

        // 1. Attempt to clear client-accessible cookies
        // (Note: This won't clear HttpOnly cookies, but the redirect handles the rest)
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        // 2. Force redirect to Sign In
        // We use window.location to force a full page refresh and clear React state
        window.location.href = "/auth/signin";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;