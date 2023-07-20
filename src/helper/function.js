const shorten = (title) => {
    const splittitle = title.split(" ");
    const newtitle = `${splittitle[0]}` + `${splittitle[1]}`;
    return newtitle;
}

export {shorten};