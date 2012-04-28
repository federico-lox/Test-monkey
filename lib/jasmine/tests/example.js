/**
 * Test showing the basics of the Jasmine framework
 */

/*
// Set framework to Jasmine
@test-framework Jasmine
@test-exclude
@test-user-agent Mozilla 5.0/Android 2.3.4
@test-screen-resolution 800x480
@test-require-file myfile.js
@test-require-file my/folder/with/deps
*/

describe("Basic Suite", function() {
	it("Should pass a basic truthiness test.", function() {
		expect(true).toEqual(true);
	});

	it("Should fail when it hits an inequal statement.", function() {
		expect(1 + 1).toEqual(3);
	});
});

describe("Another Suite", function() {
	it("Should pass this test as well.", function() {
		expect(0).toEqual(0);
	});
}); 