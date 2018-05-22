import React, {Component} from 'react';

export default class TodoForm extends Component
{
    constructor ()
    {
        super();
        this.state = {
            toDo: ''
        };
    }

    updateToDo(event)
    {
        this.setState(
            {
                toDo: event.target.value
            }
        );
    }

    addToDo(event)
    {
        event.preventDefault();
        this.props.addToDo(this.state.toDo);
    }

    render()
    {
        return(
            <form onSubmit={e => this.addToDo(e)}>
                <div className="row">
                    <div className="col">
                    <label htmlFor="toDo" className="sr-only">ToDo</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="toDo"
                            value={this.state.todo}
                            onChange={this.updateToDo.bind(this)}
                     />
                  </div>
                  <div className="col">
                     <button type="submit" className="btn btn-primary mb-2">
                         Añadir Tarea
                      </button>
                 </div>
             </div>
            </form>
        );
    }
}