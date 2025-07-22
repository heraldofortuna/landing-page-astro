import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../components/ui/Button.vue';

describe('Button Component', () => {
  it('renders with default props', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Click me'
      }
    })

    expect(wrapper.text()).toContain('Click me')
    expect(wrapper.classes()).toContain('bg-primary')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('h-14')
    expect(wrapper.classes()).toContain('px-10')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('applies disabled styles when disabled', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Disabled',
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('cursor-not-allowed')
    expect(wrapper.classes()).toContain('bg-gray-200')
    expect(wrapper.classes()).toContain('text-gray-500')
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Click me'
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Disabled',
        disabled: true
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})