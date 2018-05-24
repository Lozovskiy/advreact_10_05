import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchChunkEvents,
  toggleSelection as handleSelect,
  eventListSelector,
  loadedSelector,
  loadingSelector
} from '../../ducks/events'

import { Table, Column, InfiniteLoader } from 'react-virtualized'
import 'react-virtualized/styles.css'

export class EventsTable extends Component {
  static propTypes = {}

  componentDidMount() {
    !!this.props.fetchChunkEvents && this.props.fetchChunkEvents()
  }

  render() {
    const { loaded, events } = this.props

    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        rowCount={loaded ? events.length + 1 : events.length}
        loadMoreRows={this.loadMoreRows}
      >
        {({ onRowsRendered, registerChild }) => (
          <Table
            ref={registerChild}
            rowCount={events.length}
            rowGetter={this.rowGetter}
            rowHeight={40}
            width={1000}
            height={300}
            onRowClick={this.handleRowClick}
            onRowsRendered={onRowsRendered}
          >
            <Column dataKey="title" width={300} />
            <Column dataKey="where" width={300} />
            <Column dataKey="when" width={300} />
          </Table>
        )}
      </InfiniteLoader>
    )
  }

  loadMoreRows = () => {
    return new Promise(() => this.props.fetchChunkEvents())
  }

  isRowLoaded = ({ index }) => {
    return index < this.props.events.length
  }

  rowGetter = ({ index }) => this.props.events[index]
}

export default connect(
  (state) => ({
    events: eventListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
  }),
  { fetchChunkEvents, handleSelect }
)(EventsTable)
