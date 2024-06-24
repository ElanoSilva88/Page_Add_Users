import "./style.css";
import Trash from "../../assets/Trash.svg";

function Home() {
  const users = [
    {
      id: 1,
      nome: "Elano",
      idade: 18,
      email: "yI4j9@example.com",
    },
    {
      id: 2,
      nome: "Joquim",
      idade: 15,
      email: "yI4j9@example.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastrar Usuário</button>
      </form>

      {users.map((user) => (
        <div key={user.id}  className="card">
          <div>
            <p><span>{user.nome}</span></p>
            <p><span>{user.idade}</span></p>
            <p><span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
