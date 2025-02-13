import useUserStore from "../store/zustand/UserStore";

function ZustandTry() {
  const { user, setUser } = useUserStore();

  return (
    <div>
      <h2>Nama: {user.name}</h2>
      <h3>Umur: {user.age}</h3>
      <button onClick={() => setUser({ name: "nama default", age: 17 })}>
        Ganti User
      </button>
    </div>
  );
}

export default ZustandTry;
