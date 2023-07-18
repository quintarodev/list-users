import { FC } from "react"
import { SortType } from "../hooks/useUsers"
import { UserType } from "../types.d"
interface Props {
  users: UserType[]
  activeBg: boolean
  deleteUser: (emial: string) => void
  setSorting: (sort: SortType) => void
}
const ListUsers: FC<Props> = ({ users, activeBg = false, setSorting, deleteUser }: Props) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Picture</th>
          <th onClick={() => setSorting("name")}>Name</th>
          <th onClick={() => setSorting("last")}>LAst</th>
          <th onClick={() => setSorting("country")}>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={activeBg ? "[&>tr:nth-child(2n+1)]:bg-primary-100" : ""}>
        {users?.map((user) => (
          <tr key={user.email} className="  text-center">
            <td className="grid place-items-center">
              <img src={user.picture.thumbnail} alt="" />
            </td>
            <td className="">{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button
                className="bg-red-200 py-2 px-4 rounded-lg text-red-600 border-x-red-600 font-semibold text-sm uppercase"
                onClick={() => deleteUser(user.email)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default ListUsers
