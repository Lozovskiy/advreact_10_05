import React from 'react'
import { mount } from 'enzyme'
import eventsList from '../../mocks/conferences'

import { EventsTable } from './events-table-virtualized'

const events = eventsList.map((event) => ({ ...event, uid: Math.random() }))

describe('EventsTableVirtualized', () => {
  it('should render 3 rows', () => {
    const table = mount(<EventsTable events={events.slice(0, 3)} />)

    expect(table.find('.ReactVirtualized__Table__row').length).toBe(3)
  })

  it('should render 18 rows', () => {
    const table = mount(<EventsTable events={events} />)

    expect(table.find('.ReactVirtualized__Table__row').length).toBe(18)
  })
})
