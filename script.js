const content = document.getElementsByClassName("content");

const category = (category, score, icon) => {
    // category
    const ctg = document.createElement("div");
    ctg.setAttribute("class", `category ${category.toLowerCase()}`);
    content[0].appendChild(ctg);

    // title
    const title = document.createElement("div");
    title.setAttribute("class", "name");
    ctg.appendChild(title);

    const titleImg = document.createElement("img");
    titleImg.setAttribute("src", `${icon}`);
    titleImg.setAttribute("alt", `${category}`);
    title.appendChild(titleImg);

    const text = document.createTextNode(`${category}`);
    title.appendChild(text);

    // marks
    const marks = document.createElement("div");
    marks.setAttribute("class", "marks");
    ctg.appendChild(marks);

    const span1 = document.createElement("span");
    const span1txt = document.createTextNode(`${score} `);
    span1.appendChild(span1txt);
    marks.appendChild(span1);

    const span2 = document.createElement("span");
    const span2txt = document.createTextNode("/ 100");
    span2.appendChild(span2txt);
    marks.appendChild(span2);

    return ctg;
}

fetch("./data.json").then((data) => data.json())
    .then((result) => {
        result.forEach((item) => {
            console.log(item);
            content[0].appendChild(category(item.category, item.score, item.icon));
        })
    });
