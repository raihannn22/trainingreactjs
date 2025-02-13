import LocalStore from "../store/zustand/LocalStore";

function UserProfile() {
  const { user, setUser, clearUser } = LocalStore();

  return (
    <div>
      <h2>Nama: {user.name}</h2>
      <h3>Umur: {user.age}</h3>
      <button onClick={() => setUser({ name: "Ahmad Raihan", age: 22 })}>
        Simpan User
      </button>
      <button onClick={clearUser}>Reset User</button>
    </div>
  );
}

export default UserProfile;
