// profile.js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;
function v1(){}
function v2(){}
export var foo='bar';
setTimeout(()=>foo='baz', 500);
export {firstName, lastName, year};
export {
	v1 as streamV1,
	v2 as streamV2,
	v2 as streamLatestVersion
}
export default firstName;