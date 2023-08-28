import { useEffect, useContext } from 'react';
import SearchIcon from '../../assets/img/Search.svg';
import { Container, InputContainer } from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router';

function Profile() {
  const { setUserIsLogged, userInfo } = useContext(UserContext)!; 
  const navigate = useNavigate();

  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  return ( 
    <Container>
      <div className='inputDiv'>
        <InputContainer>
          <img src={SearchIcon} alt="" />
          <input type="text" placeholder='Pesquisar no Orkut' />
        </InputContainer>
      </div>

      <div className='profileHeaderDiv'>
        <UserProfileHeader
          name={userInfo?.name || "Usuário"}
          relationship={userInfo?.relationship || 'Solteiro'}
          country={userInfo?.country || 'Brasil'}
          buttonContent="Editar meu perfil"
          handleButton={() => { navigate('/profile'); }}
        />
      </div>

      <div className='ProfileInfoDiv'>
        <ProfileInfo /> 
      </div>

      <div className='ListFriendsDiv'>
        <ListOfFriends />
      </div>

      <div className='ListCommunityDiv'>
        <ListOfCommunity />
      </div>
    </Container>
  );
}

export default Profile;
