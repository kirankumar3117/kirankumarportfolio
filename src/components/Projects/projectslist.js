import snapdeal from "../../assets/snapdeal.png"
import shopbop from "../../assets/shopbop.png"
console.log(snapdeal)
const snapdeal1 = () =>{
    return <div>
        <p>The snapdeal clone website , a collaborative project.</p>
        <ul>
            <li>Used The rest Api</li>
            <li>An accurate ui design</li>
            <li>Api deployment on heroku</li>
            <li>ES6 funactinalities</li>
        </ul>
    </div>
}
const Project= [{
    "name":"SnapDeal",
    "discription":{snapdeal1},
    "git":"https://github.com/kirankumar3117/snapdeal-unit4",
    "image":"https://im5.ezgif.com/tmp/ezgif-5-087135ba4f.gif",
    "deploy":"https://friendly-sable-65643a.netlify.app/"
},
{
    "name":"ShopBop",
    "discription":"",
    "image":{shopbop},
    "git":"https://github.com/kirankumar3117/shopbop",
    "deploy":"https://github.com/kirankumar3117/shopbop"
}];


export default Project