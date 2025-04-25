import { createContext ,useContext } from "react";

  export const Todocontext = createContext({
         // todo features....
        todos:[
             {
                id:1,
                todo:"todo complete",
                completed:false,
             }
        ],
         // add section in todo 
        addTodo : (todo) => {},
           
        // edit section and also affter adit add todo
          updatedTodo: (id,todo) =>{},

          // delete section in todo
          deletetodo:(id) =>{},

          todotoggle :(id) => {}


        
  })

     // when it was call that automate provide todocontext functionlaty.........
  export const useTodo = () => {
         return useContext(Todocontext)
  }

  export const TodoProvider = Todocontext.Provider
