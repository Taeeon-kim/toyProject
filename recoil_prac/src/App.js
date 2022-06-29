import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import TodoList from './TodoList';

const textState = atom({
  key: 'testState',
  default: '',
})
function CharacterCounter(){
  return (<div>
    
      <TodoList />
  </div>)
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event)=>{
    setText(event.target.value);
  }
 console.log(textState);
  return (<div>
    <input type="text" value={text} onChange={onChange} />
    <br />
    Echo : {text}
  </div>)
}

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) =>{
    const text = get(textState);
    console.log(text);
    return text.length;
  }
})

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count : {count}</>;
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
