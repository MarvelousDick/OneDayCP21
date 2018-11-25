import React from 'react';
import axios from 'axios'

// const axios = require('axios')
class counter extends React.Component {

    state = {
        repoName: '',
        repoUrl: ''
    }

    componentDidMount() {
        const url = 'https://api.github.com/search/repositories?q=r&sort=stars'
        axios.get(url)
            .then(
                response => {
                    const result = response.data
                    console.log(response)
                    console.log(result.items[0])
                    const {name, html_url} = result.items[0]
                    this.setState({repoName: name, repoUrl: html_url})
                }
            )
            .catch((error) => {
                alert(error.message)
            })

        // fetch(url)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         const {name, html_url} = data.items[0]
        //         this.setState({repoName: name, repoUrl: html_url})
        //     })

    }

    render() {
        const {repoName, repoUrl} = this.state

        if (!repoName) {
            return <h2>Loading......</h2>
        } else {
            return <h2>Most star repo <a href={repoUrl}>{repoName}</a></h2>
        }

    }

}

export default counter