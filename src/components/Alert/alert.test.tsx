import React from 'react'
import {fireEvent, render} from "@testing-library/react"
import Alert, {AlertType} from './index'

describe('test alert component', () => {
    it('alert test', () => {
        const wrapper = render(<Alert title="标题">测试内容</Alert>);
        const element = wrapper.getByText('测试内容');
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element).toHaveClass('an-alert-content');
    });
    it('alert click test', () => {
        const wrapper = render(<Alert title="标题">测试内容</Alert>);
        const element = wrapper.getByText('关闭');
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element).toHaveClass('an-alert-header-right an-alert-left-content');
        // fireEvent.click(element);
        // expect(jest.fn()).toHaveBeenCalled();
    });
});
