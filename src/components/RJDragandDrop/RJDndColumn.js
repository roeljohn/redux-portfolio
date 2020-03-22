import React from 'react'
import styled from 'styled-components'
import {RJTodoList} from '../../components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TodoList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
`

export default class RJDndColumn extends React.Component {
  render() {
    return (

        <div class="col-sm-4 col-md-3">
          <div class="card">
          <div class="card-block">
          <a href="" data-toggle="dismiss" class="close">&times;</a>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} type="TASK">
          {(provided, snapshot) => (
            <TodoList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <RJTodoList key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TodoList>
          )}
        </Droppable>
        </div>
        </div>
        </div>
    )
  }
}
