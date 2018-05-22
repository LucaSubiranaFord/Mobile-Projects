import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoItemHeader from './TodoItemHeader';

export default class TodoList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            toDos : []
        };
    }

    updateToDo (toDo, index)
    {
        let toDos = this.state.toDos.slice();
        toDos[index] = toDo;
        this.setState({toDos});
    }

    removeToDo (index)
    {
        let toDos = this.state.toDos.slice();
        toDos.splice(index,1);
        this.setState({toDos});
    }

    addToDo(toDo)
    {
        let toDos = this.state.toDos.slice();
        toDos.push(toDo);
        this.setState({toDos});
    }

    render ()
    {
        const {toDos} = this.state;

        if(!toDos.length)
        {
            return (
                <div>
                    <TodoForm addToDo={(todo) => this.addToDo(todo)}/>
                    <hr />

                    <div className="alert alert-danger"> No Hay Tareas </div>
                </div>
            );
        }

        return (
            <div className="col-md-12">   
                <TodoForm addToDo={(todo) => this.addToDo(todo)}/>
                <hr />

            <table className="table">
                <TodoItemHeader />
                <tbody>
                    {
                        toDos.map((todo, index) => 
                        {
                            return (
                                <TodoItem
                                    onUpdateToDo = {(updatedToDo) => this.updateToDo(updatedToDo, index)}
                                    onRemove = {() => this.removeToDo(index)}
                                    index = {index}
                                    key={index} // Todo elemento personalizado debe tener una key unica, en este caso INDEX es unica. Solo para evitar warnings
                                >
                                    {todo}
                                </TodoItem>
                            );
                        })
                    }
                </tbody>    
            </table>            
            </div>
        );
    }
}