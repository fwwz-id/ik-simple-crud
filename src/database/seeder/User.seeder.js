import { faker } from "@faker-js/faker";

import UserService from "../../service/User.service";

const UserSeeder = async () => {
  return Promise.all(
    [...Array(faker.number.int({ min: 15, max: 30 }))].map(() => {
      const user = new UserService();

      return user.createUser();
    })
  );
};

export default UserSeeder;
