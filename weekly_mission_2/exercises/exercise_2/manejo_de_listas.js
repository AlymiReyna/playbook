const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //Imprime el nombre (propiedad name) de cada explorer en la lista, usando FOR EACH
   explorers.forEach(obj => console.log(obj.name))

   //Imprime el stack de cada explorer, usando FOR EACH
   explorers.forEach(obj => console.log(obj.stack))

   //Crea una nueva lista con las listas de stacks de cada explorer, usando MAP
   const explorersStack = explorers.map(function(obj){ return obj.stack})
   console.log(explorersStack)

   //**Obtiene la lista de explorers que tengan en su stack "js", usando FILTER (para validar un elemento en un lista se usa el método includes)
    const explorersContainingJS = explorers.filter((obj) => // esta es una función
  obj.stack.includes('js')) // indicación para solo filtrar elementos que incluyan "js"
  console.log(explorersContainingJS)

console.log("-----------------")

  //Busca el primer explorer que sea de la CDMX, usando FIND
  const city = explorers.find((city) => city = "CDMX")
  console.log(city)

  //Obtiene la suma de todos los exercises_completed, usando REDUCE
  const result_of_reduce = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
  console.log("Exercises completed: " + result_of_reduce + " total.")

  //Obtiene la validación de si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usando SOME
  const areSomeTrue = explorers.some((obj) =>  obj.missions.frontend.exercisesFinished === true)
  console.log(areSomeTrue)

  //Obtiene la validación de si todos los explorers tienen la propiedad isFinished del onboarding como true. Usando EVERY.
  const allOnboardingFinished = explorers.every((obj) => obj.missions.onboarding.isFinished === true)
  console.log(allOnboardingFinished)