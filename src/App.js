import React,{Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie'
                // the rest of the data
            },
        ],
    }
    render(){

        const data = [{"name": "abc", "age": 24}, {"name": "egf", "age": 45}];
        return (
            <Table data3={data}/>
        )
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
}

export default App
