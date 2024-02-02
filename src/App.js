import {useEffect, useState} from "react";
import {getData} from "./api/api";
import {BtnList} from "./utils/BtnList";
import Button from "./components/buttons/Button";
import {Loader} from "./components/loader/Loader";
import Card from "./components/card/Card";

function App() {

  const [route, setRoute] = useState("posts")
  const [data, setData] = useState(null)

  useEffect(() => {
    getData(route)
        .then(res => setData(res))
  }, [route]);

  return (
    <div>
      {BtnList.map(item =>  <Button key={item.id} onClick={() => setRoute(item.route)} text={item.caption} />)}

      {!data && <Loader/>}

      {data?.length === 0 && <h1>Empty</h1>}

      {data?.map(item => <Card key={item.id} base={item}/>)}

    </div>
  );
}

export default App;
