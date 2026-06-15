export type TestCase = {
	scenario: string;
	arrange: () => Promise<void>;
	act?: () => Promise<void>;
	assert: () => Promise<void>;
};