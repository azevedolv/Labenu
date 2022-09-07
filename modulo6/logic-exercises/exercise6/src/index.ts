function isAnagram(s: string, t: string) {
	return s.split("").sort().join("") === t.split("").sort().join("")
    //separa, ordena e junta
}
const s = "gato";
const t = "toga";
console.log(isAnagram(s, t));
