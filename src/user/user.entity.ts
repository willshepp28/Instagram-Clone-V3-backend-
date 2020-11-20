import { Entity, Column, ObjectIdColumn } from "typeorm";


@Entity()
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone_number: string;

    @Column()
    profile_pic: string;

    @Column()
    bio: string;

    @Column()
    website: string;
}


export class UserInput {
    username: string;
    password: string;
}