function picsumImg(picsumData) {
  let img = document.createElement("img");
  img.src = `https://picsum.photos/id/${picsumData.id}/${picsumData.width}`;
  return img;
}

export { picsumImg };
