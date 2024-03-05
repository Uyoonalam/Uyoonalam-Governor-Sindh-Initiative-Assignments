function Album(Singer: string, Title: string): {Singer: string, Title: string} {
    const dictionaries = {
        Singer: Singer.charAt(0).toUpperCase() + Singer.slice(1),
        Title: Title.charAt(0).toUpperCase() + Title.slice(1)
    }
    return dictionaries       
}
let album1 = Album("NF","Hope")
console.log(album1)
"\n"
let album2 = Album("Alan Walker","Diffrent World")
console.log(album2)
"\n"
let album3 = Album("KSI","all over the place")
console.log(album3)