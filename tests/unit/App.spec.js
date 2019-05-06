import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should show the appropriate Header', () => {
    const msg = 'Live Subscriber Count'
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch(msg)
  })
})
