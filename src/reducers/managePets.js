export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: state.pets.concat(action.pet) }
    case 'REMOVE_PET':
      return {pets: state.pets.filter((pet)=>{
        return pet.id !== action.id
      })}
    default:
      return state;
  }

}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = state.pets.map((pet)=>`<li>${pet.name}</li>`)
  let data = `<ul>${pets}</ul>`
  document.getElementById('container').innerHTML = data
}
// 
// dispatch({type: '@@INIT'})
