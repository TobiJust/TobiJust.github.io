import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Intro from '@/components/Intro.vue'

describe('Intro.vue', () => {
  it('renders text', () => {
    const wrapper = shallowMount(Intro)
    expect(wrapper.text()).to.include('BAIRLINE')
  })
})
