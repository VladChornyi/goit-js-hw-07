interface Image  {
  url: string,
  alt: string
}



const images:Image[] = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galaryItem = ({ url, alt }:Image):string => `<li><img src="${url}" alt="${alt}" width = "200px" height = "150px"></li>`;
const galaryMarkup = images.reduce((acc, item)=> acc + galaryItem(item), "");
const galleryList = document.getElementById("gallery");
galleryList.insertAdjacentHTML("afterbegin", galaryMarkup);
galleryList.setAttribute('style', 'list-style: none; display: flex;');
