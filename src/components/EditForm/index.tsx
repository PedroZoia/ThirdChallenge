import { EditFormContainer } from "./style";
import EditDetails from "../EditDetails";
function EditForm() {

  return (
    <EditFormContainer>
      <h3>Editar informações</h3>
      <div>
        <h2>Profissão: </h2>
        <p>
          Solteiro
        </p>
      </div>
      <div>
        <h2>Cidade:</h2>
        <p>
          21 de julho
        </p>
      </div>
      <div>
        <h2>País:</h2>
        <p>
          22
        </p>
      </div>
      <div>
        <h2>DD/MM/AA:</h2>
        <p>
          Solteiro
        </p>
      </div>
      <div>
        <h2>Senha:</h2>
        <p>
          Programador
        </p>
      </div>

 
 
   
      <div>
        <h2>Repetir senha:</h2>
        <p>
          Guarantã
        </p>
      </div>
      <div>
        <h2>País:</h2>
        <p>
          Brasil
        </p>
      </div>
      <div>
        <button>Salvar</button>
      </div>
    </EditFormContainer>
  );
}

export default EditForm;
