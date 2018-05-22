import React, {Component} from 'react';

export default class TodoItemHeader extends Component
{
    render ()
    {
        return (
            <thead>
                <tr style={{textAlign: 'center'}}>
                    <th scope="col">#</th>
                    <th scope="col">Tarea Numero</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
        );
    }
}