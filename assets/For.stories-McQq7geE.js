import{g as j,j as e,S as b}from"./genericMemo-D3Hqi8Qh.js";import{r as d}from"./index-BBkUAzwr.js";const F=({children:o,of:s,keyMapper:a,loading:n=!1,slots:t={}})=>n&&t.loading?t.loading:s?!s.length&&t.empty?t.empty:d.Children.toArray(s.map((r,i)=>{const l=(a==null?void 0:a(r,i))??i;return e.jsx(d.Fragment,{children:o(r,i)},l)})):null,m=j(F),I={title:"For",component:m,tags:["autodocs"],parameters:{docs:{toc:!0}}},c=()=>{const o={items:["one","two","three"]};return e.jsx(b,{children:e.jsx(m,{of:o.items,children:s=>e.jsx("span",{children:s})})})},u=()=>{const o=p=>p.id,s={empty:"No results",loading:"Loading..."},[a,n]=d.useState(!1),[t,r]=d.useState(null),i=()=>{n(!0),setTimeout(()=>{n(!1),r([{id:1,name:"John",age:25},{id:2,name:"Jane",age:32}])},1e3)},l=()=>{n(!0),setTimeout(()=>{n(!1),r([])},1e3)},x=()=>r(null);return e.jsxs(b,{gap:10,children:[e.jsx("button",{onClick:i,type:"button",children:"Fetch users"}),e.jsx("button",{onClick:l,type:"button",children:"Fetch empty users"}),e.jsx("button",{onClick:x,type:"button",children:"Reset users"}),e.jsx(m,{of:t,loading:a,keyMapper:o,slots:s,children:p=>e.jsxs("div",{children:[e.jsx("span",{children:p.name}),e.jsx("span",{children:p.age})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Simple"};u.__docgenInfo={description:"",methods:[],displayName:"ServerResponse"};var g,h,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const props = {
    items: ['one', 'two', 'three']
  };
  return <Stack>
            <For of={props.items}>{(item: string) => <span>{item}</span>}</For>
        </Stack>;
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,U;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  // Outside the component
  type User = {
    id: number;
    name: string;
    age: number;
  };
  const keyMapper = (user: User) => user.id;
  const slots: ForProps<User>['slots'] = {
    empty: 'No results',
    loading: 'Loading...'
  };

  // Inside the component
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[] | null>(null);
  const fetchUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUsers([{
        id: 1,
        name: 'John',
        age: 25
      }, {
        id: 2,
        name: 'Jane',
        age: 32
      }]);
    }, 1000);
  };
  const fetchEmptyUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUsers([]);
    }, 1000);
  };
  const resetUsers = () => setUsers(null);
  return <Stack gap={10}>
            <button onClick={fetchUsers} type='button'>
                Fetch users
            </button>
            <button onClick={fetchEmptyUsers} type='button'>
                Fetch empty users
            </button>
            <button onClick={resetUsers} type='button'>
                Reset users
            </button>

            <For of={users} loading={isLoading} keyMapper={keyMapper} slots={slots}>
                {user => <div>
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                    </div>}
            </For>
        </Stack>;
}`,...(U=(S=u.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};const C=["Simple","ServerResponse"];export{u as ServerResponse,c as Simple,C as __namedExportsOrder,I as default};
