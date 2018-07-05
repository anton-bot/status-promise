# Promise with a status #

A Promise that exposes a status: 'fulfilled', 'rejected' or 'pending'.

A normal Promise in JavaScript does not provide a way to check for the Promise status, so this package fixes it.

The status is expose via the `status` property and the awaitable promise itself via the `promise` property.

## Example ##

```js
(async() => {
	const PromiseWithStatus = require('status-promise');
	
	// Create a self-resolving Promise that waits for 5 sec:
	let p = new PromiseWithStatus((resolve, reject) => {
	  setTimeout(resolve, 5000);
	});

	console.log(p.status); // 'pending'
	
	// Wait for 5 seconds until the promise resolves:
	await p.promise;
	
	console.log(p.status); // 'fulfilled'
})();

```
