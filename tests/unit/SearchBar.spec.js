
import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";
/**
 * testing emitted events on input search
 */
describe("emit search text", () => {
  it("emits an event with search text", async () => {
    // simulate setTimeout
    jest.useFakeTimers();
    const wrapper = mount(Header);

    // calling emitEvent twice
    wrapper.vm.DebounceFn();
    wrapper.vm.DebounceFn();

    // Fast forward and exhaust only currently pending timers
    jest.runOnlyPendingTimers();

    expect(wrapper.emitted().onSearch[0]).toEqual(["github"]);
  });
});
