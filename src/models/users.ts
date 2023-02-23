import Client from "../database";

export type User = {
    id?: number,
    name: string,
    email: string
};

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM users;'
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`)
        }
    }
    async addUser(user: User): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;'
            const result = await conn.query(sql, [user.name, user.email]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`${err}`)
        }
    }
}