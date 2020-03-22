import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { RJNotification, RJList } from '../components';
import { fetchAllNotification, readNotification } from '../actions';
import DndData from '../fake/draganddrop';
import {RJDndColumn} from '../components'

const Container = styled.div`

`
class RJDragandDrop extends Component {
    state = DndData

    onDragEnd = result => {
      const { destination, source, draggableId } = result
  
      if (!destination) {
        return
      }
  
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return
      }
  
      const start = this.state.columns[source.droppableId]
      const finish = this.state.columns[destination.droppableId]
  
      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)
  
        const newColumn = {
          ...start,
          taskIds: newTaskIds
        }
  
        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn
          }
        }
  
        this.setState(newState)
        return
      }
  
      // Moving from one list to another
      const startTaskIds = Array.from(start.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStart = {
        ...start,
        taskIds: startTaskIds
      }
  
      const finishTaskIds = Array.from(finish.taskIds)
      finishTaskIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      }
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }
      this.setState(newState)
    }

  componentDidMount() {
    // this.props.notificationList();
  }


  render() {
    return (
<div class="container dnd">
    <h3>Trello style Kanban Layout</h3>
    <h6>Stacks vertically on mobile screens</h6>
    <div class="row flex-row flex-sm-nowrap py-5">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            )

            return (
              <RJDndColumn key={column.id} column={column} tasks={tasks} />
            )
          })}
      </DragDropContext>

    </div>
</div>
    );
  }
}

const mapStatetoProps = (state) => {
//   return { notifications: state.notifications }
}

const mapDispatchprops = (dispatch) => {
  return { 
    //   notificationList: () => dispatch(fetchAllNotification()),
    //   readNotification: (id, data) => dispatch(readNotification(id, data)),
  }
}

export default connect(mapStatetoProps, mapDispatchprops)(RJDragandDrop);