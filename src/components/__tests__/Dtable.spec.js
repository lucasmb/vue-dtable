import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Dtable from '../Dtable.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Dtable, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
