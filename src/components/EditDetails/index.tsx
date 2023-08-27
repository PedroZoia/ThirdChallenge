import { Details, ParagraphHiddenInMobile } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
function EditDetails() {
  const navigate = useNavigate();
  return (
    <Details>
      <div>
        <h2>Músicas:</h2>
        <p>Trap </p>
        <ParagraphHiddenInMobile>Rap </ParagraphHiddenInMobile>
        <ParagraphHiddenInMobile>Indie </ParagraphHiddenInMobile>
        <button>Ver todos</button>
      </div>
      <div>
        <h2>Filmes:</h2>
        <p>A rede social</p>
        <ParagraphHiddenInMobile>Meu amigo totoro</ParagraphHiddenInMobile>
        <button onClick={() => navigate('/profile')}>Ver todos</button>
      </div>
    </Details>
  );
}

export default EditDetails;
