# estrutura do Banco de dados
User {
    id : uuid
    name: string
    email: string
    password: string
    role: Role.id
}
Todo {
    id: uuid
    title: string
    description: string
    author: User.id
    created_at: date
    updated_at?: date
}
Role {
    id: integer,
    description: string
}

Roles: ["Admin", "User"]

