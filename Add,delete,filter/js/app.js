// substring(); -> vrati mi od startu po koniec 
// banan.substring(0,3) -> ban

const generatedUsers = [{
  "id": 1,
  "first_name": "Jodi",
  "last_name": "Berresford",
  "gender": "Female",
  "avatar": "https://robohash.org/repudiandaevoluptatemrem.jpg?size=50x50&set=set1",
  "dateOfBirth": "2/5/1997"
}, {
  "id": 2,
  "first_name": "Brantley",
  "last_name": "Partrick",
  "gender": "Male",
  "avatar": "https://robohash.org/dignissimosimpeditcommodi.png?size=50x50&set=set1",
  "dateOfBirth": "3/4/2006"
}, {
  "id": 3,
  "first_name": "Roana",
  "last_name": "Dionisi",
  "gender": "Female",
  "avatar": "https://robohash.org/iddelectusmodi.jpg?size=50x50&set=set1",
  "dateOfBirth": "11/29/2000"
}, {
  "id": 4,
  "first_name": "Pippy",
  "last_name": "Dermot",
  "gender": "Female",
  "avatar": "https://robohash.org/ducimusetnon.bmp?size=50x50&set=set1",
  "dateOfBirth": "2/5/1994"
}, {
  "id": 5,
  "first_name": "Adrian",
  "last_name": "Dixsee",
  "gender": "Male",
  "avatar": "https://robohash.org/sequiestsunt.png?size=50x50&set=set1",
  "dateOfBirth": "11/19/1991"
}, {
  "id": 6,
  "first_name": "Jamal",
  "last_name": "Mara",
  "gender": "Male",
  "avatar": "https://robohash.org/aaspernaturaccusamus.png?size=50x50&set=set1",
  "dateOfBirth": "3/28/2010"
}, {
  "id": 7,
  "first_name": "Glad",
  "last_name": "Gallehawk",
  "gender": "Female",
  "avatar": "https://robohash.org/corporisconsequunturet.png?size=50x50&set=set1",
  "dateOfBirth": "5/2/2006"
}, {
  "id": 8,
  "first_name": "Sena",
  "last_name": "Airlie",
  "gender": "Female",
  "avatar": "https://robohash.org/magnametest.bmp?size=50x50&set=set1",
  "dateOfBirth": "5/15/2010"
}, {
  "id": 9,
  "first_name": "Olivero",
  "last_name": "McPhaden",
  "gender": "Male",
  "avatar": "https://robohash.org/praesentiummagnamqui.png?size=50x50&set=set1",
  "dateOfBirth": "8/2/2010"
}, {
  "id": 10,
  "first_name": "Kaja",
  "last_name": "Del Monte",
  "gender": "Female",
  "avatar": "https://robohash.org/suntdelectusexpedita.bmp?size=50x50&set=set1",
  "dateOfBirth": "2/10/2010"
}, {
  "id": 11,
  "first_name": "Erna",
  "last_name": "Govenlock",
  "gender": "Female",
  "avatar": "https://robohash.org/animietvoluptate.jpg?size=50x50&set=set1",
  "dateOfBirth": "9/14/2001"
}, {
  "id": 12,
  "first_name": "Welch",
  "last_name": "Courson",
  "gender": "Male",
  "avatar": "https://robohash.org/nobissitut.jpg?size=50x50&set=set1",
  "dateOfBirth": "9/6/2003"
}, {
  "id": 13,
  "first_name": "Lucho",
  "last_name": "Mardell",
  "gender": "Male",
  "avatar": "https://robohash.org/vitaequassunt.jpg?size=50x50&set=set1",
  "dateOfBirth": "10/16/2009"
}, {
  "id": 14,
  "first_name": "Cathie",
  "last_name": "Del Checolo",
  "gender": "Female",
  "avatar": "https://robohash.org/utindicta.jpg?size=50x50&set=set1",
  "dateOfBirth": "9/9/2004"
}, {
  "id": 15,
  "first_name": "Dame",
  "last_name": "Jeckell",
  "gender": "Male",
  "avatar": "https://robohash.org/perferendisautipsam.png?size=50x50&set=set1",
  "dateOfBirth": "7/7/2010"
}, {
  "id": 16,
  "first_name": "Fremont",
  "last_name": "Dingate",
  "gender": "Male",
  "avatar": "https://robohash.org/autnonenim.bmp?size=50x50&set=set1",
  "dateOfBirth": "9/30/1997"
}, {
  "id": 17,
  "first_name": "Natalya",
  "last_name": "Mosson",
  "gender": "Female",
  "avatar": "https://robohash.org/magninecessitatibusquod.bmp?size=50x50&set=set1",
  "dateOfBirth": "10/19/2002"
}, {
  "id": 18,
  "first_name": "Davon",
  "last_name": "Athowe",
  "gender": "Male",
  "avatar": "https://robohash.org/velautematque.jpg?size=50x50&set=set1",
  "dateOfBirth": "4/17/2004"
}, {
  "id": 19,
  "first_name": "Derk",
  "last_name": "Plastow",
  "gender": "Male",
  "dateOfBirth": "9/10/2003"
}, {
  "id": 20,
  "first_name": "Netta",
  "last_name": "Diemer",
  "gender": "Female",
  "dateOfBirth": "8/22/2006"
}]


class User {

    constructor(generatedUsers) {
      this.id = generatedUsers.id;
      this.first_name = generatedUsers.first_name;
      this.last_name = generatedUsers.last_name;
      this.gender = generatedUsers.gender;
      this.avatar = generatedUsers.avatar? generatedUsers.avatar : 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SK/en/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
      this.date_of_birth = generatedUsers.dateOfBirth;
    }

    get isAdult() {
      let today = new Date();
      let birthDate = new Date(this.date_of_birth);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
      return age; 
    }

    get fullName() {
        return this.gender === 'Male' ? `Mr. ${this.first_name} ${this.last_name}` : `Mrs. ${this.first_name} ${this.last_name}`
    }
  
  }


function filterFemale(gender) {
  return gender.gender === 'Female';
}

function filterMale(gender) {
  return gender.gender === 'Male';
}

const Instancie = generatedUsers.map(userClass => new User(userClass))