import { faker } from "@faker-js/faker";
import { user } from "../db";

const UserSeeder = async () => {
  return Promise.all(
    [...Array(faker.number.int({ min: 15, max: 30 }))].map(() => {
      return user.create({
        data: {},
      });
    })
  );
};

export default UserSeeder;
