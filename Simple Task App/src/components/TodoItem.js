import React, {Component} from 'react';

export default class TodoItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            editMode: false,
            toDo: props.children
        }
    }

    onEditMode()
    {
        if(this.state.editMode)
        {
            const {onUpdateToDo} = this.props;
            onUpdateToDo(this.state.toDo);
        }
        this.setState({
            editMode : !this.state.editMode
            }
        );
    }

    handleChange(event)
    {
        this.setState({toDo : event.target.value});
    }

    dynamicComponents () 
    {
        let input, actionButton;
        const {editMode, toDo} = this.state;

        if(editMode)
        {
            input = (
                <input
                    type="text"
                    className="form-control"
                    value={toDo}
                    onChange={(e) => this.handleChange(e)}
                    />
            );
            actionButton = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                    >
                    Actualizar
                </button>
            );

        } 
        else
        {
            input = toDo;

            actionButton = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                    >
                    Editar
                </button>
            );
        }
        return {input, actionButton};
    }

    render()
    {
        const {index, onRemove} = this.props;
        const dynamicComponents = this.dynamicComponents();

        return (
            <tr style={{textAlig: 'center'}}>
                <th scope="col">#</th>
                <th scope="col">{index + 1}</th>
                <th scope="col">{dynamicComponents.input}</th>
                <th scope="col">
                    <div className="btn-group" role="group">
                        {dynamicComponents.actionButton}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onRemove}
                            >
                            Eliminar
                        </button>
                    </div>
                </th>
            </tr>
        );
    }
}