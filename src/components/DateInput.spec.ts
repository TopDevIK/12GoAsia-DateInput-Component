import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import DateInput from './DateInput.vue';

// Stubbing browser locale
vi.stubGlobal('navigator', { language: 'en-US' });

describe('DateInput Component', () => {
  it('displays correct format for en-US locale', async () => {
    // Given a DateInput component with modelValue prop set to '2023-05-01'
    const wrapper = mount(DateInput, {
      props: { modelValue: '2023-05-01' }
    });

    // Then the input field should have a placeholder with format 'MM/DD/YYYY'
    expect(wrapper.find('input').element.placeholder).toBe('MM/DD/YYYY');
  });

  it('updates model value when valid input is provided', async () => {
    // Given a DateInput component with modelValue prop set to '2023-05-01'
    const wrapper = mount(DateInput, {
      props: { modelValue: '2023-05-01' }
    });

    // When a valid date input '04/30/2023' is entered
    const input = wrapper.find('input');
    await input.setValue('04/30/2023');

    // Then the model value should be updated to '2023-04-30'
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['2023-04-30']);
  });

  it('does not update model value on invalid input', async () => {
    // Given a DateInput component with modelValue prop set to '2023-05-01'
    const wrapper = mount(DateInput, {
      props: { modelValue: '2023-05-01' }
    });

    // When an invalid date input '13/40/2023' is entered
    const input = wrapper.find('input');
    await input.setValue('13/40/2023');

    // Then the model value should not be updated
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  });
});
