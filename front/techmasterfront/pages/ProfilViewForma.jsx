import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  MDBCol, 
  MDBContainer, 
  MDBRow, 
  MDBCard, 
  MDBCardText, 
  MDBCardBody, 
  MDBCardImage, 
  MDBBtn, 
  MDBTypography, 
  MDBIcon 
} from 'mdb-react-ui-kit';
import './ProfilViewForma.css';

// Import des images
import defaultAvatar from '../assets/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg';
import thumbnail1 from '../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png';
import thumbnail2 from '../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png';
import thumbnail3 from '../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png';
import thumbnail4 from '../assets/Les-nouveaux-concepts-proposes-par-les-YouTubeurs-Pour-cette-rentree-2022.-4.png';

const ProfilViewForma = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [upcomingLives, setUpcomingLives] = useState([]);

  useEffect(() => {
    // Simulation des données
    const mockData = {
      name: "Formateur " + id,
      location: "Paris, France",
      avatar: defaultAvatar,
      bio: "Expert en formation tech",
      specialite: "Développement Web",
      followers: 1026,
      following: 478,
      totalVideos: 253,
      recentPhotos: [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4
      ],
      videos: [
        {
          id: 1,
          title: "Introduction à React",
          thumbnail: thumbnail1,
          description: "Une vidéo d'introduction",
          createdAt: new Date()
        }
      ],
      upcomingLives: [
        {
          id: 1,
          title: "Live Coding Session",
          scheduledDate: new Date(),
          description: "Session live de programmation"
        }
      ]
    };

    setUserData(mockData);
    setVideos(mockData.videos);
    setUpcomingLives(mockData.upcomingLives);

    // Commenté en attendant que l'API soit prête
    /*
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`/api/users/${id}`);
        const videosResponse = await axios.get(`/api/users/${id}/videos`);
        const livesResponse = await axios.get(`/api/users/${id}/upcoming-lives`);

        setUserData(userResponse.data);
        setVideos(videosResponse.data);
        setUpcomingLives(livesResponse.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    fetchUserData();
    */
  }, [id]);

  if (!userData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage 
                    src={userData.avatar}
                    alt={userData.name} 
                    className="mt-4 mb-2 img-thumbnail" 
                    fluid 
                    style={{ 
                      width: '150px', 
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      border: '3px solid #fff',
                      zIndex: '1' 
                    }} 
                  />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Contacter
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{userData.name}</MDBTypography>
                  <MDBCardText>{userData.location}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{userData.totalVideos}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Vidéos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{userData.followers}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Abonnés</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{userData.following}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Abonnements</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">À propos</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{userData.specialite}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">{userData.location}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">{userData.bio}</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Vidéos récentes</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Voir tout</a></MDBCardText>
                </div>
                <MDBRow>
                  {userData.recentPhotos.slice(0, 2).map((photo, index) => (
                    <MDBCol className="mb-2" key={index}>
                      <MDBCardImage src={photo}
                        alt={`vidéo ${index + 1}`} className="w-100 rounded-3" />
                    </MDBCol>
                  ))}
                </MDBRow>
                <MDBRow className="g-2">
                  {userData.recentPhotos.slice(2, 4).map((photo, index) => (
                    <MDBCol className="mb-2" key={index}>
                      <MDBCardImage src={photo}
                        alt={`vidéo ${index + 3}`} className="w-100 rounded-3" />
                    </MDBCol>
                  ))}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProfilViewForma;
