import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';
@Entity()
export class Users {
  @BeforeInsert()
  hashPass() {
    console.log('before');
  }

  // bcrypt.hash(this.password, 10, (error: string, hash: string) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   this.password = hash;
  // });

  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
