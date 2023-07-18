import Button from "./components/Button"
import ListUsers from "./components/ListUsers"
import { SortType, useUsers } from "./hooks/useUsers"

function App() {
  const { usersSorted, deleteUser, activeBg, resetUsers, setBg, setSort, sort } = useUsers()

  return (
    <main className="min-h-screen bg-primary-50">
      <div className="max-w-5xl mx-auto min-h-screen bg-primary-50">
        <h1 className="py-8 text-5xl font-semibold text-primary-950">Lista de Usuarios</h1>
        <div className="flex items-center space-x-6 my-8">
          <Button variant="secondary" onClick={() => setBg((bg) => !bg)}>
            cambiar bg
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              setSort((prev) => {
                const newSort: SortType = prev === "country" ? "none" : "country"
                return newSort
              })
            }
          >
            {sort === "country" ? "Desordenar" : "Ordenar"}
          </Button>
          <Button variant="primary" onClick={resetUsers}>
            Reset Users
          </Button>
          <span>Numero de usuarios {usersSorted.length}</span>
        </div>
        <ListUsers setSorting={setSort} deleteUser={deleteUser} users={usersSorted} activeBg={activeBg} />
      </div>
    </main>
  )
}

export default App
