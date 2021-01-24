// Class

class Persons {
    private name: string; //class 안에서만 쓸때에는
    public age: number; // 기본적으로
    protected skils: string;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


// //* React Class
// class App extends React.Component {

// }


// //* React Hook
// function App() {
//     return <div> Hello React </div>
// }

// //* Vue 
// new Vue({
//     el: '',
//     setup() {

//     }
// })