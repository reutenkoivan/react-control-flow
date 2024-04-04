import{g as x,j as e,S as U}from"./genericMemo-D3Hqi8Qh.js";import{r as p}from"./index-BBkUAzwr.js";const j=({children:o,of:n,keyMapper:a,loading:t=!1,slots:s={}})=>t&&s.loading?s.loading:n?!n.length&&s.empty?s.empty:p.Children.toArray(n.map((r,i)=>{const d=(a==null?void 0:a(r,i))??i;return e.jsx(p.Fragment,{children:o(r,i)},d)})):s.fallback??null,m=x(j),L={title:"For",component:m,tags:["autodocs"],parameters:{docs:{toc:!0}}},c=()=>{const o={items:["one","two","three"]};return e.jsx(U,{children:e.jsx(m,{of:o.items,children:n=>e.jsx("span",{children:n})})})},u=()=>{const o=l=>l.id,n={empty:"No results",loading:"Loading...",fallback:"Initial state"},[a,t]=p.useState(!1),[s,r]=p.useState(null),i=()=>{t(!0),setTimeout(()=>{t(!1),r([{id:1,name:"John",age:25},{id:2,name:"Jane",age:32}])},1e3)},d=()=>{t(!0),setTimeout(()=>{t(!1),r([])},1e3)},k=()=>r(null);return e.jsxs(U,{gap:10,children:[e.jsx("button",{onClick:i,type:"button",children:"Fetch users"}),e.jsx("button",{onClick:d,type:"button",children:"Fetch empty users"}),e.jsx("button",{onClick:k,type:"button",children:"Reset users"}),e.jsx(m,{of:s,loading:a,keyMapper:o,slots:n,children:l=>e.jsxs("div",{children:[e.jsx("span",{children:l.name}),e.jsx("span",{children:l.age})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Simple"};u.__docgenInfo={description:"",methods:[],displayName:"ServerResponse"};var g,h,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const props = {
    items: ['one', 'two', 'three']
  };
  return <Stack>
            <For of={props.items}>{(item: string) => <span>{item}</span>}</For>
        </Stack>;
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,y,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  // Outside the component
  type User = {
    id: number;
    name: string;
    age: number;
  };
  const keyMapper = (user: User) => user.id;
  const slots: ForProps<User>['slots'] = {
    empty: 'No results',
    loading: 'Loading...',
    fallback: 'Initial state'
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
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const C=["Simple","ServerResponse"];export{u as ServerResponse,c as Simple,C as __namedExportsOrder,L as default};
