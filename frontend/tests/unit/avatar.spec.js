import Avatar from "../../src/components/Avatar";
import { mount } from "@vue/test-utils";

describe("avatar", () => {
	describe("name", () => {
		it("check initials 'W'", () => {
			const wrapper = mount(Avatar, {
				propsData: {
					name: "Watson holmes"
				}
			});

			expect(wrapper.find("[data-test=avatar-initials]").text()).toBe("W");
		});

		it("empty name", () => {
			const wrapper = mount(Avatar, {
				propsData: {
					name: ""
				}
			});

			expect(wrapper.find("[data-test=avatar-initials]").text()).toBe("");
		});
	});

	describe("image", () => {
		it("render image", () => {
			const wrapper = mount(Avatar, {
				propsData: {
					name: "Watson",
					src: "https://www.gravatar.com/avatar/1"
				}
			});

			expect(wrapper.find("[data-test=avatar-image]").isVisible()).toBe(true);
		});

		it("check image url", () => {
			const wrapper = mount(Avatar, {
				propsData: {
					name: "Watson",
					src: "https://www.gravatar.com/avatar/1"
				}
			});

			expect(
				wrapper.find("[data-test=avatar-image] img").attributes("src")
			).toBe("https://www.gravatar.com/avatar/1");
		});
	});
});
