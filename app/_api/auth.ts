// app/api/auth.ts
const API_BASE = "http://localhost:8080"; // ← 你的 Spring Boot 后端基础地址

export interface AuthResponse {
  accessToken?: string;
  refreshToken?: string;
  userId?: number;
  uid?: number;
  token?: string;
  data?: any;
}

/** 注册 */
export async function register(username: string, password: string) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}

/** 登录 */
export async function login(username: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data.data ?? data;
}

/** 登出 */
export async function logout(username: string) {
  const res = await fetch(`${API_BASE}/api/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}

/** 刷新 Access Token */
export async function refreshToken(rt: string): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: rt }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data.data ?? data;
}