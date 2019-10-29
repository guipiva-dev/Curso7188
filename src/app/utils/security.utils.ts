import { UserModel } from './../models/user.model';


export class SecurityUtils {
    public static set(user: UserModel) {
        const data = JSON.stringify(user);

        localStorage.setItem('eshop.data', btoa(data));
    }

    public static get(): UserModel {
        const data = localStorage.getItem('eshop.data');

        if(!data) {
            return null;
        }

        return JSON.parse(atob(data));
    }

    public static hasToken(): boolean {
        const user = this.get();

        if(user && user.token) {
            return true;
        }
        return false;
    }

    public static isInRole(role: string): boolean {
        const user = this.get();

        if(!user
            || !user.roles
            || user.roles.length == 0) {
            return false;
        }

        return user.roles.includes(role);
    }

    public static clear() {
        localStorage.removeItem('eshop.data');
    }
}