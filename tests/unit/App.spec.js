import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import flushPromises from 'flush-promises'

describe('App.vue', () => {

  it('should call youtube subscriber info using a timed interval', () => {
    jest.useFakeTimers();
    const wrapper = mount(App);
    expect(setInterval).toHaveBeenCalledWith(wrapper.vm.fetchYoutubeStats, 1000);
    jest.clearAllTimers();

  })
  
  it('should fetch and store youtube subscriber info if it exists',  async (done) => {
    const wrapper = mount(App);
    await flushPromises();
    
    expect(wrapper.vm.count).toEqual('95436034');
    done();

  })
})
