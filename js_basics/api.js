const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact")
const getFacts = async () => {
    console.log("getting data....");
    let response = await fatch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
};