//your JS code here. If required.
let student={
	name:`aditya`,
};
function getKeys(obj){
	let ans=[]
	for (let i of Object.keys(obj)) {
		ans.push(i);
	}
	return ans
}
console.log(getKeys(student))