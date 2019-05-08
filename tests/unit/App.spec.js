import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import flushPromises from 'flush-promises'

describe('App.vue', () => {
  it('should show the appropriate Header', () => {
    const msg = 'Live Subscriber Count'
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch(msg)
  })

  it('should fetch and store youtube subcriber info if it exists', async(done) => {
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.vm.subscriberCount).toEqual('95436034');
    done();
  })
})
