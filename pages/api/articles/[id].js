import { articles } from "../../../data";

export default function handler(req,res){
  const { id } = req.query;
  const filtered = articles.find(article => article.id === id);

  if(filtered){
    return res.status(200).json(filtered);
  }else {
    return res.status(404).json({ message: 'Article not found'});
  }
}