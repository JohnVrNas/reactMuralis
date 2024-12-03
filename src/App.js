import React, { useState } from "react";
import "./App.css";

const Formulario = () => {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const estados = {
    "São Paulo": ["Mogi das Cruzes", "Suzano", "Poá", "Guararema"],
    "Rio de Janeiro": ["Angra dos Reis", "Niterói", "Itaboraí"],
    "Minas Gerais": ["Belo Horizonte", "Monte Azul", "Muzambinho"],
  };

  const cursos = ["Matemática", "Letras", "Geografia"];

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
    setCidade("");
  };

  return (
    <form>
      <h2>Cadastro de Ingressantes</h2>

      <div>
        <label>Nome:</label>
        <input type="text" name="nome" />
      </div>

      <div>
        <label>Curso:</label>
        <select name="curso">
          <option value="">Selecione um curso</option>
          {cursos.map((curso) => (
            <option key={curso} value={curso}>
              {curso}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Estado:</label>
        <select name="estado" value={estado} onChange={handleEstadoChange}>
          <option value="">Selecione um estado</option>
          {Object.keys(estados).map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Cidades:</label>
        <select name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} disabled={!estado}>
          <option value="">Selecione uma cidade</option>
          {estado &&
            estados[estado].map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
        </select>
      </div>

      <div style={{ textAlign: "center" }}>
        <button type="button" className="btn-voltar">Voltar</button>
        <button type="submit" className="btn-gravar">Gravar</button>
      </div>
    </form>
  );
};

export default Formulario;
