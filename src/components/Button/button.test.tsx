import React from 'react'
import {fireEvent, render} from "@testing-library/react"
import Button, {ButtonProps, ButtonSize, ButtonType} from './index'

// test('our first react test case', () => {
//     const wrapper = render(<Button>Nice</Button>);
//     const element = wrapper.queryAllByText('Nice');
//     expect(element).toBeTruthy();
//     expect(element).toBeInTheDocument(); // 判断组件是否在文档中
// });

const defaultProps = {
    onClick: jest.fn()
};

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
};

const disableProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
};

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button { ...defaultProps }>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement; // 拥有按钮属性
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('an-btn an-btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button { ...testProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element).toHaveClass('an-btn-primary an-btn-lg klass')
    });
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href='http:www.bdu.com'>Link</Button>);
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('an-btn an-btn-link')
    });
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button { ...disableProps }>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement; // 拥有按钮属性
        expect(element).toBeInTheDocument(); // 判断组件是否在文档中
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disableProps.onClick).not.toHaveBeenCalled();
    })
});
