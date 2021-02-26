const data = [
  {
    name: 'Jan Jansen',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Amsterdam',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: 'Kim Smit',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Rotterdam',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Bob Zandstra',
    age: 39,
    gender: 'male',
    lookingfor: 'male',
    location: 'Utrecht',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();


// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) { 

    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for a ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}


// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}