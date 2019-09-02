import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../jsx/App1.jsx';
import Adapter from 'enzyme-adapter-react-16';


describe('<App />', () => {
    it('성공적으로 렌더링되어야 합니다.', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.length).toBe(1);
    });

   it('내부 Component를 그려낸다', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('SearchBar').length).toBe(1);
        expect(wrapper.find('VideoDetail').length).toBe(1);
        expect(wrapper.find('VideoList').length).toBe(1);
    });

    it('video가 10개 출력된다', () => {
        const wrapper = shallow(<App/>);        

        wrapper.instance().videoSearch('');
        expect(wrapper.state().videos.length).toBe(10);
    });

    it('selectedVideos가 videos[0]으로 설정되었다', () => {
        const wrapper = shallow(<App/>);
        wrapper.setState({
            videos: [],
            selectedVideo: null
        });

        wrapper.instance().videoSearch('abc');
        expect(wrapper.state().selectedVideo).toBe(videos[0])
    });

    it('className이 body인 div가 존재한다', () => {
        const wrapper = mount(<div className="body"/>);
        expect(wrapper.exists('.body')).toEqual(true);
    });

    it('SearchBar에서 함수 호출', () => {
        const someFunction = expect.createSpy();
        const wrapper = shallow(<SearchBar onSearchTermChange = {someFunction} />)

        wrapper.instance().onSomeAction();
        expect(someFunction.calls.length).toBe(1);
    });

    


});