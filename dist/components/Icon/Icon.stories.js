import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from './Icon';
var meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 아이콘 컴포넌트입니다. 다양한 크기와 스타일의 아이콘을 제공합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: '아이콘 이름',
        },
        size: {
            control: 'select',
            options: ['16', '20', '24', '28', '32'],
            description: '아이콘 크기 (px)',
        },
        color: {
            control: 'color',
            description: '아이콘 색상',
        },
        className: {
            control: 'text',
            description: 'CSS 클래스명',
        },
    },
    args: {
        name: 'home',
        size: 24,
        color: '#333333',
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        name: 'home',
    },
};
// 크기별 아이콘
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [_jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px'
                        }, children: "16" }), _jsx("span", { style: { fontSize: '12px' }, children: "16px" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px'
                        }, children: "20" }), _jsx("span", { style: { fontSize: '12px' }, children: "20px" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px'
                        }, children: "24" }), _jsx("span", { style: { fontSize: '12px' }, children: "24px" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '28px',
                            height: '28px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px'
                        }, children: "28" }), _jsx("span", { style: { fontSize: '12px' }, children: "28px" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px'
                        }, children: "32" }), _jsx("span", { style: { fontSize: '12px' }, children: "32px" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '아이콘의 다양한 크기를 보여줍니다.',
            },
        },
    },
};
// 다양한 색상
export var Colors = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [_jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#333333',
                            borderRadius: '4px'
                        } }), _jsx("span", { style: { fontSize: '12px' }, children: "Default" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#007bff',
                            borderRadius: '4px'
                        } }), _jsx("span", { style: { fontSize: '12px' }, children: "Primary" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#28a745',
                            borderRadius: '4px'
                        } }), _jsx("span", { style: { fontSize: '12px' }, children: "Success" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#ffc107',
                            borderRadius: '4px'
                        } }), _jsx("span", { style: { fontSize: '12px' }, children: "Warning" })] }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }, children: [_jsx("div", { style: {
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#dc3545',
                            borderRadius: '4px'
                        } }), _jsx("span", { style: { fontSize: '12px' }, children: "Error" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '아이콘의 다양한 색상을 보여줍니다.',
            },
        },
    },
};
// 일반적인 아이콘들
export var CommonIcons = {
    render: function () { return (_jsx("div", { style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            padding: '20px'
        }, children: [
            'home', 'search', 'menu', 'close', 'arrow-left', 'arrow-right',
            'arrow-up', 'arrow-down', 'plus', 'minus', 'check', 'star',
            'heart', 'settings', 'user', 'mail', 'phone', 'location',
            'calendar', 'clock', 'download', 'upload', 'edit', 'delete'
        ].map(function (iconName) { return (_jsxs("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
            }, children: [_jsx("div", { style: {
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#666',
                        borderRadius: '4px'
                    } }), _jsx("span", { style: { fontSize: '11px', textAlign: 'center' }, children: iconName })] }, iconName)); }) })); },
    parameters: {
        docs: {
            description: {
                story: '일반적으로 사용되는 아이콘들입니다. 실제 구현에서는 SVG 또는 아이콘 폰트를 사용합니다.',
            },
        },
    },
};
// 인라인 아이콘 사용 예제
export var InlineUsage = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#666',
                            borderRadius: '2px'
                        } }), _jsx("span", { children: "\uD648\uC73C\uB85C \uAC00\uAE30" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#666',
                            borderRadius: '2px'
                        } }), _jsx("span", { children: "\uAC80\uC0C9\uD558\uAE30" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#666',
                            borderRadius: '2px'
                        } }), _jsx("span", { children: "\uC124\uC815 \uBCC0\uACBD" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '텍스트와 함께 인라인으로 사용되는 아이콘 예제입니다.',
            },
        },
    },
};
// 버튼 내 아이콘
export var IconInButton = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsxs("button", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    background: 'white',
                    cursor: 'pointer'
                }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#666',
                            borderRadius: '2px'
                        } }), _jsx("span", { children: "\uC800\uC7A5" })] }), _jsxs("button", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    background: '#007bff',
                    color: 'white',
                    cursor: 'pointer'
                }, children: [_jsx("div", { style: {
                            width: '16px',
                            height: '16px',
                            backgroundColor: 'white',
                            borderRadius: '2px'
                        } }), _jsx("span", { children: "\uB2E4\uC6B4\uB85C\uB4DC" })] }), _jsx("button", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    borderRadius: '50%',
                    background: '#f8f9fa',
                    cursor: 'pointer'
                }, children: _jsx("div", { style: {
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#666',
                        borderRadius: '2px'
                    } }) })] })); },
    parameters: {
        docs: {
            description: {
                story: '버튼 내에서 사용되는 아이콘 예제입니다.',
            },
        },
    },
};
// 상태를 나타내는 아이콘
export var StatusIcons = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#28a745',
                            borderRadius: '50%'
                        } }), _jsx("span", { children: "\uC131\uACF5" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#ffc107',
                            borderRadius: '50%'
                        } }), _jsx("span", { children: "\uACBD\uACE0" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#dc3545',
                            borderRadius: '50%'
                        } }), _jsx("span", { children: "\uC624\uB958" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#17a2b8',
                            borderRadius: '50%'
                        } }), _jsx("span", { children: "\uC815\uBCF4" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '상태를 나타내는 아이콘들입니다.',
            },
        },
    },
};
// 주의사항
export var Note = {
    render: function () { return (_jsxs("div", { style: {
            padding: '16px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px'
        }, children: [_jsx("h4", { style: { margin: '0 0 8px 0' }, children: "\uC544\uC774\uCF58 \uC0AC\uC6A9 \uC2DC \uC8FC\uC758\uC0AC\uD56D" }), _jsxs("ul", { style: { margin: 0, paddingLeft: '20px' }, children: [_jsx("li", { children: "\uC2E4\uC81C \uAD6C\uD604\uC5D0\uC11C\uB294 SVG \uC544\uC774\uCF58 \uB610\uB294 \uC544\uC774\uCF58 \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4" }), _jsx("li", { children: "\uD604\uC7AC\uB294 \uD50C\uB808\uC774\uC2A4\uD640\uB354\uB85C \uD68C\uC0C9 \uBC15\uC2A4\uB97C \uD45C\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4" }), _jsx("li", { children: "\uC811\uADFC\uC131\uC744 \uC704\uD574 \uC544\uC774\uCF58\uC5D0\uB294 \uC801\uC808\uD55C alt \uD14D\uC2A4\uD2B8\uB098 aria-label\uC744 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4" }), _jsx("li", { children: "\uC0C9\uC0C1\uB9CC\uC73C\uB85C \uC815\uBCF4\uB97C \uC804\uB2EC\uD558\uC9C0 \uB9D0\uACE0 \uCD94\uAC00\uC801\uC778 \uC2DC\uAC01\uC801 \uB2E8\uC11C\uB97C \uC81C\uACF5\uD558\uC138\uC694" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '아이콘 컴포넌트 사용 시 고려사항입니다.',
            },
        },
    },
};
