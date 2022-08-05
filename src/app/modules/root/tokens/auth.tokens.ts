import { InjectionToken } from '@angular/core';

export const ACCESS_TOKEN_KEY = new InjectionToken<string>('access-token');
export const REFRESH_TOKEN_KEY = new InjectionToken<string>('refresh-token');
export const USER_KEY = new InjectionToken<string>('auth-user');
