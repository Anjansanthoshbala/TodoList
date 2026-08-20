export function Listrendering1(){
    const mobile = [{brand:"Apple",name:"Iphone 15",battery:"4000 mAh", ram:"12GB",price:60000},
                    {brand:"One Plus",name:"One Plus10R 5G", battery:"5000 mAh",ram:"12GB",price:41000},
                    {brand:"Oppo",name:"Oppo Reno 12",battery:"5000mAh",ram:"8GB",price:30000},
                    {brand:"Realme",name:"Realme GT 6",battery:"5500 mAh",ram:"8GB",price:40000}
    ]
    return(<>
     <table table border={1} cellPadding={3} cellSpacing={0}>
        <thead>
        <tr>
            <th>Brand</th>
            <th>Phone Name</th>
            <th>Battery</th>
            <th>Ram</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            {mobile.map((d) => (
            <tr>
             <td>{d.brand}</td>
            <td>{d.name}</td>
            <td>{d.battery}</td>
            <td>{d.ram}</td>
            <td>{d.price}</td>0
             </tr>
            ))}
        </tbody>
        </table>   
    </>)
}
export function Listrending3(){
    const marks = [{name:"Santhosh",age:21,mark:95},
                   {name:"Rahul",age:22,mark:76},
                   {name:"Raju",age:29,mark:56},
                   {name:"Ramu",age:43,mark:86},
                   {name:"Anjan",age:45,mark:67},
                    {name:"Bala",age:20,mark:76}];
                    const data =  marks.filter((s) => s.mark > 70)
                    return(<>
                        <table border={1} cellSpacing={0} cellPadding={3}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Marks</th>
                            </tr>
                           </thead>
                           <tbody>
                              {data.map((s) => ( <tr>
                                 <td>{s.name}</td>
                                 <td>{s.age}</td>
                                 <td>{s.mark}</td>
                              </tr>))}
                           </tbody>
                        </table>
                    </>)
}
export function Listren1(){
    const student = [{id:101, name:"realme", model:"realme 10pro", price:25000,status:"active"},
                    {id:102, name:"redme",model:"realme 10pro 5G",price: 25000, status:"active"},
                    {id:103,name:"Vivo",model:"vivo11",price:25000,status:"unactive"},
                    {id:104, name:"moto", model:"motog65", price:15000, status:"active"},
                    {id:105, name:"Oppo", model:"oppo 18", price:25000, status:"unactive"}];
                    return(<>
                       <table border={1} cellSpacing={0} cellPadding={3}>
                         <thead>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                         </thead>
                         <tbody>
                             {student.map((b) => (
                                <tr style={{backgroundColor: b.status == 'active'?"green":"red",color:"white"}}>
                                    <td>{b.id}</td>
                                    <td>{b.name}</td>
                                    <td>{b.model}</td>
                                    <td>{b.price}</td>
                                    <td>{b.status}</td>
                                </tr>
                             ))}
                         </tbody>
                       </table>
                    </>)
}
 export function Listrendere1(){
    const cars = [{brand:"Maruthi Suzuki",name:"Swift",color:"white",showroomprice:700000,onroadprice:"7-10L"},
                  {brand:"Mahindra",name:"Scorpia",color:"white",showroomprice:1500000,onroadprice:"7-10L"},
                   {brand:"Mahindra",name:"XUV 700",color:"white",showroomprice:1650000,onroadprice:"15-25L"}];
    // const data = cars.filter((a) => a.showroomprice > 1000000)
 return (<>
    <table border={1} cellPadding={3} cellSpacing={0}>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Name</th>
                <th>Color</th>
                <th>Showroomprice</th>
                <th>Onroadprice</th>
            </tr>
        </thead>
        <tbody>
            {cars.map((a) => (<tr style={{backgroundColor: a.showroomprice > '1000000'?'green':'red',color:'white'}}>
                  <td>{a.brand}</td>
                  <td>{a.name}</td>
                  <td>{a.color}</td>
                  <td>{a.showroomprice}</td>
                  <td>{a.onroadprice}</td>
            </tr>))}
        </tbody>
    </table>
 </>)
 }