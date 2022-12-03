const driver = [
    {
        firstName: "James",
        homeTown:"Westlands"
    },
    {
        firstName:"Mike",
        homeTown:"Dagoretti"
    }
]

function firstNamePrinter(collection){
    for(const driver of collection){
        console.log(driver.firstName);
        return driver;
    }
}