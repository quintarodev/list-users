import { useEffect, useMemo, useRef, useState } from "react"
import { UserType } from "../types"
import { api } from "../api"

export const SORTING_BY = {
  none: "none",
  name: "name",
  last: "last",
  country: "country",
}
export type SortType = keyof typeof SORTING_BY
export const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [activeBg, setBg] = useState(false)
  const [sort, setSort] = useState<SortType>("none")

  const usersRef = useRef<UserType[]>([])
  const usersSorted = useMemo(() => {
    return sort !== "none"
      ? [...users].sort((a, b) => {
          if (sort === "country") {
            return a.location.country.localeCompare(b.location.country)
          }
          if (sort === "name") {
            return a.name.first.localeCompare(b.name.first)
          }
          return a.name.last.localeCompare(b.name.last)
        })
      : users
  }, [sort, users])

  const deleteUser = (email: string) => {
    const newUsers = users.filter((user) => user.email !== email)
    setUsers(newUsers)
  }
  const resetUsers = () => setUsers(usersRef.current)
  useEffect(() => {
    api.getUser(100).then((data) => {
      setUsers(data)
      usersRef.current = [...data]
    })
  }, [])

  return { usersSorted, setUsers, sort, setSort, activeBg, setBg, resetUsers, deleteUser }
}
