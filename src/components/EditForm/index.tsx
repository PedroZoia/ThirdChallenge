import { EditFormContainer } from "./style";
import EditDetails from "../EditDetails";
function EditForm() {

  return (
    <EditFormContainer>
      <h3>Editar informações</h3>
      <div>
        <h2>Profissão: <p>
        
        </p>
        </h2>
        
        <h2>Relacionamento</h2>
      </div>
      <div>
        <h2>Cidade:<p>
      
        </p>
        </h2>
        
      </div>
      <div>
        <h2>País:<p>
        
        </p>
        </h2>
        
      </div>
      <div>
        <h2>DD/MM/AA:<p>
  
        </p>
        </h2>
        
      </div>
      <div>
        <h2>Senha:<p>
 
        </p>
        </h2>
        
      </div>

      <div>
        <h2>Repetir senha:<p>
        
        </p>
        </h2>
        
      </div>
      <div>
        <h2>País:<p>
     
        </p>
        </h2>
        
      </div>
      <div>
        <button>Salvar</button>
      </div>
    </EditFormContainer>
  );
}

export default EditForm;
