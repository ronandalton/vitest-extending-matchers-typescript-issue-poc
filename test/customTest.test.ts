import '../src/customMatchers';

import { expect, test } from 'vitest';

test('it works', async () => {
	expect('foo').toBeFoo();
});
