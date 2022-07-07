import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Greetings ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit}>
                    <div className='formSelector'>
                        <label>
                            Title:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className='formInput'>
                        <label>
                            First name: 
                            <input type="text" name={this.state.value} onChange={this.handleChange} />
                        </label>
                        
                        <label>
                            Second name:
                            <input type="text" surname={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <input type="submit" value="Greet me" />
                </form>
            </div>
            
        );
    }
}

export default Form;