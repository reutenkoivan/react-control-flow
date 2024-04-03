import{g as d,j as e,S as r}from"./genericMemo-D3Hqi8Qh.js";import{r as h}from"./index-BBkUAzwr.js";const m=({case:t,default:n,children:s})=>{if(!t)return n||null;const o=s[t];return o||n||null},i=d(m),w={title:"SwitchMap",component:i,tags:["autodocs"],parameters:{docs:{toc:!0}}},l=()=>{const t=[{value:"one",label:"One"},{value:"two",label:"Two"},{value:"three",label:"Three"},{value:"unknown",label:"Unknown"}],[n,s]=h.useState(t[0].value),o=a=>{s(a.target.value)};return e.jsxs(r,{gap:20,children:[e.jsx(r,{direction:"row",gap:5,children:t.map(a=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:a.value,checked:n===a.value,onChange:o}),e.jsx("span",{children:a.label})]},a.value))}),e.jsx(i,{case:n,default:e.jsx("span",{children:"Some Default Component"}),children:{one:e.jsx("span",{children:"One"}),two:e.jsx("span",{children:"Two"}),three:"Three"}})]})};l.__docgenInfo={description:"",methods:[],displayName:"Simple"};var c,u,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const options = [{
    value: 'one',
    label: 'One'
  }, {
    value: 'two',
    label: 'Two'
  }, {
    value: 'three',
    label: 'Three'
  }, {
    value: 'unknown',
    label: 'Unknown'
  }];
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setSelectedValue(event.target.value);
  };
  return <Stack gap={20}>
            <Stack direction='row' gap={5}>
                {options.map(option => <label key={option.value}>
                        <input type='radio' value={option.value} checked={selectedValue === option.value} onChange={handleChange} />
                        <span>{option.label}</span>
                    </label>)}
            </Stack>

            <SwitchMap case={selectedValue} default={<span>Some Default Component</span>}>
                {{
        one: <span>One</span>,
        two: <span>Two</span>,
        three: 'Three'
      }}
            </SwitchMap>
        </Stack>;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const g=["Simple"];export{l as Simple,g as __namedExportsOrder,w as default};
