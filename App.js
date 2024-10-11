// 1
{/* <div id="parent">
    <div id="child">
        <h1>I`m h1 tag</h1>
    </div>
</div> nested element 
Reactelement(objedct)=> HTML(browser understand)
*/  }

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I`m h1 tag")));

//     // const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello world from React!");  //core react
//     console.log(parent); //obj
//     const root=ReactDOM.createRoot(document.getElementById("root")); //dom 
//     root.render(parent);




//   2
{/* <div id="parent">
    <div id="child">
        <h1>I`m h1 tag</h1>
        <h2>Hey</h2>
    </div>
</div> nested element 
Reactelement(objedct)=> HTML(browser understand)
*/  }


//nested structure inside react......
// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"I`m h1 tag"),
//         React.createElement("h2",{},"hey...shri"),
//     ]));
  
//     // const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello world from React!");  //core react
//     console.log(parent); //obj
//     const root=ReactDOM.createRoot(document.getElementById("root")); //dom 
//     root.render(parent);









        //   3
    {/* <div id="parent">
    <div id="child">
        <h1>I`m h1 tag</h1>
        <h2>Hey</h2>
    </div>
    <div id="child2">
        <h1>I`m h1 tag</h1>
        <h2>Hey</h2>
    </div>
</div> nested element 
Reactelement(objedct)=> HTML(browser understand)
*/  }
//nested structure inside react......
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I`m h1 tag"),
        React.createElement("h2",{},"hey...shri"),
    ]),
        React.createElement("div",{id:"child2"},[
         React.createElement("h1",{},"I`m h1 tag"),
                React.createElement("h2",{},"hey...shri"),
        ]
          ),
]);
  
    // const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello world from React!");  //core react
    console.log(parent); //obj
    const root=ReactDOM.createRoot(document.getElementById("root")); //dom 
    root.render(parent);