import React, {Component} from 'react'
import Header from '../components/Header';
import FileUpload from '../components/FileUpload';
class Root extends Component {

    componentDidMount() {}
    render() {
        return (
            <div>
                <Header/>
                <FileUpload/>
            </div>
        )
    }
}

export default Root;