import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import SearchBusinesses from '../../components/business/SearchBusinesses';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { isAuthenticated } from '../../helper/Utils';
import renderer from 'react-test-renderer'

describe(<SearchBusinesses />, () => {
    let wrapper,component;
    wrapper = shallow(<MemoryRouter><SearchBusinesses /></MemoryRouter>);
    component = wrapper.find(SearchBusinesses).dive();

    beforeEach(() => {
        axios.get.mockImplementation(
            jest.fn(() => Promise.resolve({
                data:{
                    businesses:[{
                        "Created By": "business creator", 
                        "Date Created": "Mon, 01 Apr 2017 9:10:00 GMT", 
                        "Last Modified": "Mon, 01 Apr 2017 9:11:00 GMT",       
                        "category": "categoryx", 
                        "description": "businessx description", 
                        "id": 1, 
                        "location": "locationx", 
                        "name": "businessx", 
                        "user_id": 1
                    }]
                }
            }))
        )
    });

    it('renders proper elements on the page', ()=> {
        component.setState({isAuthenticated:true})
        expect(component.find('div').length).toEqual(11)
    });

    it('check that state is undefined', () => {
        expect(component.state('business_name')).toEqual("")
        expect(component.state('filter')).toEqual("")
        expect(component.state('filter_value')).toEqual("")
        
    })

    
    

})