import React from "react";
import Upload from "./Upload";
import { mount } from "enzyme";

describe("Upload component", () => {

	let props;

	const upload = () => mount(<Upload {...props} />)

	beforeEach(() => {
		props = {
			apiUrl: '',
			extensions: [],
		};
	});

	it("always renders an image", () => {
		const item = upload().find("img");
		expect(item.length).toBe(1);
	});

	it("always renders an upload file", () => {
		const item = upload().find('input[type="file"]');
		expect(item.length).toBe(1);
	});

});