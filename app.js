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
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Bob Zandstra',
    age: 39,
    gender: 'male',
    lookingfor: 'female',
    location: 'Utrecht',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  }
];

const profiles = profileIterator(data);

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