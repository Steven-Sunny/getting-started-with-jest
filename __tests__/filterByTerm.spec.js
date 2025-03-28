describe("Filter function", () => {
    test("it should filter by search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];
        const outputA = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }]
        expect(filterByTerm(input, "link")).toEqual(output);
        
        expect(filterByTerm(input, "LINK")).toEqual(output); // New test

        expect(filterByTerm(input, "uRl")).toEqual(outputA); // Exercise 1 Test

        expect(filterByTerm(input, "")).toEqual(null); // Exercise 2 test
    });
  });
  
function filterByTerm(inputArr, searchTerm) {
    if(searchTerm == ""){
        return null;
    }
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
    //Test comment 1
}