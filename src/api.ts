import { UserType } from "./types"

const URL = "https://randomuser.me/api/?results="
export const api = {
  getUser: (count: number): Promise<UserType[]> =>
    fetch(`${URL}${count}`)
      .then((result) => result.json())
      .then((data) => data.results),
}
