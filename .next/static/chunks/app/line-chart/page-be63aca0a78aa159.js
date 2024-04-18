(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{8046:function(e,t,s){Promise.resolve().then(s.bind(s,718))},718:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var r=s(3827),a=s(4090),n=s(1777);let i={top:30,right:30,bottom:50,left:50};function l(e){let{data:t}=e,s=(0,a.useRef)(null),[l,d]=(0,a.useState)(0),[o,c]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=new ResizeObserver(e=>{for(let t of e)d(t.contentRect.width),c(t.contentRect.height)});return s.current&&e.observe(s.current),()=>{s.current&&e.unobserve(s.current)}},[s]),(0,a.useEffect)(()=>{l&&o&&m()},[t,l,o]);let m=()=>{let e=n.Ys(s.current).append("svg").attr("width",l).attr("height",o),r=l-i.left-i.right,a=o-i.top-i.bottom,d=e.append("g").attr("transform","translate(".concat(i.left,",").concat(i.top,")")),c=n.BYU().domain([0,n.Fp7(t,e=>e.value+10)||0]).range([a,0]);d.append("g").call(n.y4O(c));let m=n.tiA().domain(t.map(e=>e.name)).range([0,r]).padding(.1);d.append("g").attr("transform","translate(0,".concat(a,")")).call(n.LLu(m));let g=n.jvg().x(e=>m(e.name)+m.bandwidth()/2).y(e=>c(e.value));d.append("path").datum(t).attr("fill","none").attr("stroke","#e0ac2b").attr("stroke-width",3).attr("d",g)};return(0,a.useEffect)(()=>()=>{n.Ys(s.current).select("svg").remove()},[]),(0,r.jsx)("div",{ref:s,style:{width:"100%",height:"100%"}})}let d={name:"Linjediagram",version:{name:"1.0",date:"11 Marts, 2024",datetime:"2021-06-05"},description:"Et s\xf8jlediagram eller et pindediagram er et diagram, hvor man gennem h\xf8jden p\xe5 s\xf8jlerne illustrerer de forskellige frekvensers fordeling. Forskellen p\xe5 s\xf8jle- og pindediagrammet er bredden p\xe5 s\xf8jlerne/stolpe; de er smallest i et pindediagram",highlights:["- Bruges til at sammenligne variable med en numeral v\xe6rdi","- Kan sorteres p\xe5 en meningsfuld m\xe5de, eks, h\xf8j-lav, a-b etc.","- Er god til at vise forskelle p\xe5 en m\xe5de som er nemt at afkode"]},o=[{question:"What format are these icons?",answer:"The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code."},{question:"Can I use the icons at different sizes?",answer:"Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance."}],c=[{id:1,name:"Histogram",category:"Fordeling",href:"#",imageSrc:"https://media.geeksforgeeks.org/wp-content/uploads/20231004173705/Histogram.webp",imageAlt:"Histogram."}],m=[{name:"Tony",value:9},{name:"Peter",value:6},{name:"Pietro",value:1},{name:"Steve",value:7},{name:"Thor",value:8}];function g(){return(0,r.jsxs)("main",{className:"mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8",children:[(0,r.jsxs)("div",{className:"lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ",children:[(0,r.jsx)("div",{className:" col-span-4 row-span-2",children:(0,r.jsx)("div",{className:" h-full flex items-center justify-center overflow-hidden rounded-lg shadow border-2 p-10",children:(0,r.jsx)(l,{data:m})})}),(0,r.jsxs)("div",{className:"mx-auto sm:mt-16 lg:mt-0 lg:max-w-none col-span-3",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:d.name}),(0,r.jsxs)("p",{className:"mt-2 text-sm text-gray-500",children:["Version ",d.version.name," (Updated"," ",(0,r.jsx)("time",{dateTime:d.version.datetime,children:d.version.date}),")"]})]}),(0,r.jsx)("p",{className:"mt-6 text-gray-500",children:d.description}),(0,r.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2",children:[(0,r.jsx)("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Kopier ren D3.js"}),(0,r.jsx)("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Se kode"})]})]}),(0,r.jsxs)("div",{className:"border-t border-gray-200 pt-5 mt-5",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Godt at huske"}),(0,r.jsx)("div",{className:"prose prose-sm mt-4 text-gray-500",children:(0,r.jsx)("ul",{role:"list",children:d.highlights.map(e=>(0,r.jsx)("li",{children:e},e))})})]})]})]}),(0,r.jsxs)("div",{className:"mt-10 border-t border-gray-200 pt-10",children:[(0,r.jsx)("h3",{className:"",children:"Sp\xf8rgsm\xe5l og Svar"}),(0,r.jsx)("dl",{children:o.map(e=>(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("dt",{className:"mt-5 font-medium text-gray-900",children:e.question}),(0,r.jsx)("dd",{className:"prose prose-sm mt-2 max-w-none text-gray-500",children:(0,r.jsx)("p",{children:e.answer})})]},e.question))})]}),(0,r.jsxs)("div",{className:"mx-auto col-span-4 mt-20",children:[(0,r.jsx)("div",{className:"flex items-center justify-between space-x-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Lignede visualiseringer"})}),(0,r.jsx)("div",{className:"mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10",children:c.map(e=>(0,r.jsxs)("a",{href:e.href,className:"group hover:bg-blue-100 w-fit p-2 rounded-lg",children:[(0,r.jsxs)("div",{className:"aspect-square h-32 overflow-hidden rounded-lg bg-gray-100",children:[(0,r.jsx)("img",{src:e.imageSrc,alt:e.imageAlt,className:"object-cover object-center"}),(0,r.jsx)("div",{className:"flex items-end p-4 opacity-0 group-hover:opacity-100","aria-hidden":"true",children:(0,r.jsx)("div",{className:"w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter",children:"View Product"})})]}),(0,r.jsx)("div",{className:"mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900",children:(0,r.jsx)("h3",{children:e.name})}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:e.category})]},e.id))})]})]})}}},function(e){e.O(0,[777,971,69,744],function(){return e(e.s=8046)}),_N_E=e.O()}]);