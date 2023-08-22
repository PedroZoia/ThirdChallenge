import { EditFormContainer } from "./style";
import EditDetails from "../EditDetails";
function EditForm() {
  const handleContentChange = (
    event: React.FocusEvent<HTMLParagraphElement>,
    field: string
  ) => {
    const newValue = event.target.innerText;
    console.log(`Campo "${field}" atualizado para: ${newValue}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  return (
    <EditFormContainer>
      <h3>Editar informações</h3>
      <div>
        <h2>Relacionamento: </h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "relacionamento")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          Solteiro
        </p>
      </div>
      <div>
        <h2>Aniversário:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "aniversario")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          21 de julho
        </p>
      </div>
      <div>
        <h2>Idade:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "idade")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          22
        </p>
      </div>
      <div>
        <h2>Interesses no Orkut:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "interesses no orkut")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          Solteiro
        </p>
      </div>
      <div>
        <h2>Quem sou eu:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "quem sou eu")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          Programador
        </p>
      </div>

 
 
   
      <div>
        <h2>Moro:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "moro")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          Guarantã
        </p>
      </div>
      <div>
        <h2>País:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "país")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          Brasil
        </p>
      </div>
      <div>
        <h2>Cidade natal:</h2>
        <p
          contentEditable={true}
          onBlur={(event) => handleContentChange(event, "cidade natal")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          São Paulo
        </p>
      </div>
    </EditFormContainer>
  );
}

export default EditForm;
