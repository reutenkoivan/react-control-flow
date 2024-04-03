import{j as e,g as U,S as i}from"./genericMemo-D3Hqi8Qh.js";import{r as l}from"./index-BBkUAzwr.js";const p=({children:n,onChange:s,checked:t})=>e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:s}),e.jsx("span",{children:n})]});p.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"VoidFunction"},description:""}}};const C=({children:n,fallback:s=null,when:t})=>t?typeof n=="function"?n(t):n:s,h=U(C),v={title:"Show",component:h,tags:["autodocs"],parameters:{docs:{toc:!0}}},a=()=>{const[n,s]=l.useState(!1),t=()=>{s(o=>!o)};return e.jsxs(i,{gap:10,children:[e.jsx(p,{checked:n,onChange:t,children:"Toggle show"}),e.jsx(h,{when:n,children:e.jsx("span",{children:"This is some content"})})]})},r=()=>{const[n,s]=l.useState(!1),t=()=>{s(o=>!o)};return e.jsxs(i,{gap:10,children:[e.jsx(p,{checked:n,onChange:t,children:"Toggle show"}),e.jsx(h,{when:n,fallback:"This is a fallback",children:e.jsx("span",{children:"This is some content"})})]})},c=()=>{const[n,s]=l.useState(!1),[t,o]=l.useState(null),b=async()=>{s(!0),setTimeout(()=>{s(!1),o({name:"John Doe",age:30})},1e3)},T=()=>o(null);return e.jsxs(i,{gap:10,children:[e.jsx("button",{onClick:b,type:"button",children:"Fetch user"}),e.jsx("button",{onClick:T,type:"button",children:"Reset user"}),e.jsx(h,{when:t,fallback:n&&"Loading...",children:({name:j,age:y})=>e.jsxs(i,{children:[e.jsxs("span",{children:["Name: ",j]}),e.jsxs("span",{children:["Age: ",y]})]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Simple"};r.__docgenInfo={description:"",methods:[],displayName:"SimpleWithFallback"};c.__docgenInfo={description:"",methods:[],displayName:"ServerResponse"};var g,u,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(prev => !prev);
  };
  return <Stack gap={10}>
            <Toggle checked={show} onChange={toggleShow}>
                Toggle show
            </Toggle>

            <Show when={show}>
                <span>This is some content</span>
            </Show>
        </Stack>;
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,S,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(prev => !prev);
  };
  return <Stack gap={10}>
            <Toggle checked={show} onChange={toggleShow}>
                Toggle show
            </Toggle>

            <Show when={show} fallback='This is a fallback'>
                <span>This is some content</span>
            </Show>
        </Stack>;
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,k,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  type User = {
    name: string;
    age: number;
  };
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = async () => {
    setIsLoading(true);

    // Simulate a server response
    setTimeout(() => {
      setIsLoading(false);
      setUser({
        name: 'John Doe',
        age: 30
      });
    }, 1000);
  };
  const resetUser = () => setUser(null);
  return <Stack gap={10}>
            <button onClick={fetchUser} type='button'>
                Fetch user
            </button>
            <button onClick={resetUser} type='button'>
                Reset user
            </button>

            <Show when={user} fallback={isLoading && 'Loading...'}>
                {({
        name,
        age
      }) => <Stack>
                        <span>Name: {name}</span>
                        <span>Age: {age}</span>
                    </Stack>}
            </Show>
        </Stack>;
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const I=["Simple","SimpleWithFallback","ServerResponse"];export{c as ServerResponse,a as Simple,r as SimpleWithFallback,I as __namedExportsOrder,v as default};
