const userContainer = document.getElementById('user-container');
const main = document.getElementsByTagName('main')[0];

function createProfile(user) {
    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    const heading = document.createElement('h2');
    heading.innerText = user.fullName

    const userText = document.createElement('div');
    userText.className ='user-text-container';
    const textContent = document.createElement('p');
    textContent.innerText = user.date_of_birth;
    const adult = document.createElement('label');
    adult.innerText = ` (${user.isAdult})`;

    const maleContainer = document.createElement('li');
    maleContainer.className = 'Male';

    const femaleContainer = document.createElement('li');
    femaleContainer.className = 'Female';

    if (user.gender === 'Male') {
      userContainer.appendChild(maleContainer);
      maleContainer.appendChild(heading);
      maleContainer.appendChild(avatar);
      maleContainer.appendChild(userText);
      userText.appendChild(textContent);
      userText.appendChild(adult);
    } else {
       userContainer.appendChild(femaleContainer)
       femaleContainer.appendChild(heading);
       femaleContainer.appendChild(avatar);
       femaleContainer.appendChild(userText);
       userText.appendChild(textContent);
       userText.appendChild(adult);
    }
  };
  
  Instancie.forEach(val => createProfile(val));

  function DeleteProfile() {

    Instancie.forEach(user => {
      let maleContainer = document.getElementsByClassName('Male')[0];
      let femaleContainer = document.getElementsByClassName('Female')[0];

      if (maleContainer && femaleContainer) {
        userContainer.removeChild(femaleContainer);
        userContainer.removeChild(maleContainer);

      } else if (!maleContainer && femaleContainer) {
        userContainer.removeChild(femaleContainer);

      } else if(!femaleContainer && maleContainer) {
        userContainer.removeChild(maleContainer);

      } else return;

    })

  }
  
  function DeleteMaleProfile() {
        Instancie.forEach(male => {

            if(male.gender === 'Male') {
              let maleContainer = document.getElementsByClassName('Male')[0];
              let femaleContainer = document.getElementsByClassName('Female')[0];
               if (maleContainer) userContainer.removeChild(maleContainer);

              if (!femaleContainer) {
                 userContainer.appendChild(femaleContainer);
              }
          }
    })  
  }

  function DeleteFemaleProfile() {
    Instancie.forEach( (female,indx) => {

      if(female.gender === 'Female') {
           let maleContainer = document.getElementsByClassName('Male')[0];
           let femaleContainer = document.getElementsByClassName('Female')[0];
           if (femaleContainer) userContainer.removeChild(femaleContainer);
           

            if (!maleContainer) {
                 userContainer.appendChild(maleContainer);
              }
        }

    })      
}

  function Add() {
    Instancie.forEach(val => createProfile(val))  
  }

  function AddMale() {
    Instancie.filter(filterMale).forEach(val => createProfile(val))  
  }

  function AddFemale() {
    Instancie.filter(filterFemale).forEach(val => createProfile(val))  
  }
  

  function AddEverything(buttonId) {
    const button = document.createElement('button');
    button.id = 'btn';
    button.innerText = 'Add Users';
  
    button.addEventListener('click', () => {
       let maleContainer = document.getElementsByClassName('Male');
       let femaleContainer = document.getElementsByClassName('Female');

       if (femaleContainer.length === 0 && maleContainer.length > 0) {
          AddFemale();
       } else if (femaleContainer.length > 0 && maleContainer.length === 0) {
          AddMale(); 
       } else if (femaleContainer.length === 0 && maleContainer.length === 0) {
          Add();
       } else {
        return;
       }

    });
    main.prepend(button);
  }
    

  function createFemale(buttonId) {
    const button = document.createElement('button');
    button.id = 'btn';
    button.innerText = 'FemaleProfile';
  
    button.addEventListener('click', () => {
        let maleContainer = document.getElementsByClassName('Male')[0];
        let femaleContainer = document.getElementsByClassName('Female')[0];

        if(!femaleContainer) {
            AddFemale();
        }
            DeleteMaleProfile();
               
    });
    main.prepend(button);
  }
  
  function createMale(buttonId) {
    const button = document.createElement('button');
    button.id = 'btn';
    button.innerText = 'MaleProfile';

    button.addEventListener('click', () => { 
        let maleContainer = document.getElementsByClassName('Male')[0];
        let femaleContainer = document.getElementsByClassName('Female')[0];

        if(!maleContainer){
            AddMale(); 
        }
            DeleteFemaleProfile();
    });
    main.prepend(button);
  }
  
  function DeleteButton(buttonId) {
    const button = document.createElement('button');
    button.id = 'btn';
    button.innerText = 'Delete Everything';

    button.addEventListener('click', () => {
        let maleContainer = document.getElementsByClassName('Male')[0];
        let femaleContainer = document.getElementsByClassName('Female')[0];

        if(maleContainer || femaleContainer) DeleteProfile();
        else return;
    });

    main.prepend(button);

  }

  /**
   * SEARCH - FORM
   */

function Search() {
  let nameElement, Value;
  
  let input = document.getElementById('search'),
    filter = input.value,
    li = userContainer.getElementsByTagName("li");
   
      for(let i = 0; i < li.length; i++) {
        nameElement = li[i].getElementsByTagName("h2")[0];
        Value = nameElement.textContent || nameElement.innerText;
  
        if(Value.indexOf(filter) > -1) { 
          li[i].style.display = "";
        } else {
          li[i].style.display ="none";    
        }
      }    
  }

  DeleteButton();
  createMale();
  createFemale();
  AddEverything();