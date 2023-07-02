const skills = [
    {id: 125223, skill: 'JS', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }